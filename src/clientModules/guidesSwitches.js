/**
 * Guides switches, ported from the MkDocs theme (en/docs/assets/js/theme.js).
 *
 * 1. Guides overview: a "By use case" / "By service provider" switch. Each tab
 *    names its view's h2 in data-view-heading; the h2 and everything up to the
 *    next h2 become that view's panel.
 * 2. Vendor guide pages: a deployment type switch (Cloud / Hybrid /
 *    Self-hosted) for content wrapped in elements with a data-deployments
 *    attribute. The choice is kept in the URL as ?deployment=<type>.
 *
 * Both views and all deployment types are in the page, so search and readers
 * without JavaScript get everything; the switches only hide content.
 *
 * Docusaurus renders the page with React, so every change made here (panels,
 * the inserted switch, hidden flags, classes) is recorded and undone before
 * the next route renders. A link to an anchor in hidden content (from another
 * page, the table of contents, or a link on the page) opens the view or
 * deployment type that shows it.
 */
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const undo = [];
let revealHandlers = [];

function setAttr(el, name, value) {
  const had = el.hasAttribute(name);
  const old = el.getAttribute(name);
  undo.push(() => (had ? el.setAttribute(name, old) : el.removeAttribute(name)));
  if (value === null) el.removeAttribute(name);
  else el.setAttribute(name, value);
}

function addClass(el, name) {
  if (el.classList.contains(name)) return;
  el.classList.add(name);
  undo.push(() => el.classList.remove(name));
}

function insertBefore(node, ref) {
  ref.parentNode.insertBefore(node, ref);
  undo.push(() => node.remove());
}

function restorePage() {
  while (undo.length) undo.pop()();
  revealHandlers = [];
}

function article() {
  return document.querySelector('.theme-doc-markdown');
}

function tocLinks() {
  return document.querySelectorAll('.table-of-contents a[href*="#"]');
}

function targetOf(link) {
  const id = decodeURIComponent(new URL(link.href, window.location.href).hash.slice(1));
  return id ? document.getElementById(id) : null;
}

/* ---------------------------------------------------------------------------
 * Guides overview: "By use case" / "By service provider" switch
 * ------------------------------------------------------------------------- */
function wrapGuidesView(tab) {
  const heading = document.getElementById(tab.dataset.viewHeading || '');
  if (!heading || heading.tagName !== 'H2') return null;
  const panel = document.createElement('div');
  panel.className = 'guides-view';
  panel.id = tab.getAttribute('aria-controls');
  panel.setAttribute('role', 'tabpanel');
  panel.setAttribute('aria-labelledby', tab.id);
  const parent = heading.parentNode;
  parent.insertBefore(panel, heading);
  const moved = [];
  let node = heading;
  while (node && !(node !== heading && node.tagName === 'H2')) {
    const next = node.nextElementSibling;
    moved.push([node, next]);
    panel.appendChild(node);
    node = next;
  }
  // Put React's nodes back where they were before the next render.
  undo.push(() => {
    moved.forEach(([n]) => parent.insertBefore(n, panel));
    panel.remove();
  });
  return panel;
}

function setUpGuidesSwitch() {
  const tablist = document.querySelector('.guides-switch');
  if (!tablist) return;
  const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
  const panels = tabs.map(wrapGuidesView);
  if (tabs.length === 0 || panels.some((panel) => !panel)) return;

  const panelIndexOf = (el) => (el ? panels.findIndex((panel) => panel.contains(el)) : -1);

  function syncTableOfContents(index) {
    tocLinks().forEach((link) => {
      const i = panelIndexOf(targetOf(link));
      if (i < 0) return;
      const item = link.closest('li');
      if (item) setAttr(item, 'hidden', i === index ? null : '');
    });
  }

  function select(index, options = {}) {
    tabs.forEach((tab, i) => {
      const selected = i === index;
      setAttr(tab, 'aria-selected', selected ? 'true' : 'false');
      setAttr(tab, 'tabindex', selected ? '0' : '-1');
      setAttr(panels[i], 'hidden', selected ? null : 'until-found');
    });
    syncTableOfContents(index);
    if (options.focus) tabs[index].focus();
    if (options.updateUrl) {
      const heading = panels[index].querySelector('h2[id]');
      if (heading) window.history.replaceState(window.history.state, '', `#${heading.id}`);
    }
  }

  tabs.forEach((tab, i) => {
    const onClick = () => select(i, {updateUrl: true});
    const onKey = (event) => {
      const next = {ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1}[event.key];
      if (next === undefined) return;
      event.preventDefault();
      select((next + tabs.length) % tabs.length, {focus: true, updateUrl: true});
    };
    tab.addEventListener('click', onClick);
    tab.addEventListener('keydown', onKey);
    undo.push(() => {
      tab.removeEventListener('click', onClick);
      tab.removeEventListener('keydown', onKey);
    });
  });
  panels.forEach((panel, i) => {
    const onMatch = () => select(i);
    panel.addEventListener('beforematch', onMatch);
    undo.push(() => panel.removeEventListener('beforematch', onMatch));
  });

  // Open the view that holds an anchor target.
  revealHandlers.push((id) => {
    const target = id ? document.getElementById(id) : null;
    const index = panelIndexOf(target);
    if (index < 0) return false;
    select(index);
    return true;
  });

  const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
  const initial = panelIndexOf(target);
  select(initial < 0 ? 0 : initial);
  setAttr(tablist, 'hidden', null);
  if (initial >= 0) target.scrollIntoView();
}

/* ---------------------------------------------------------------------------
 * Vendor guide pages: deployment type switch
 * ------------------------------------------------------------------------- */
const ORDER = ['cloud', 'hybrid', 'self-hosted'];
const LABELS = {cloud: 'Cloud', hybrid: 'Hybrid', 'self-hosted': 'Self-hosted'};
const DESCRIPTIONS = {
  cloud: 'WSO2 hosts the control plane and the gateways.',
  hybrid: 'WSO2 hosts the control plane, and you run the gateways.',
  'self-hosted': 'You run the gateways, on their own or with your own control plane.',
};
const URL_PARAM = 'deployment';

function setUpDeploymentSwitch() {
  const root = article();
  if (!root) return;
  const tagged = Array.from(root.querySelectorAll('[data-deployments]'));
  if (!tagged.length) return;
  const typesOf = (el) => el.getAttribute('data-deployments').split(/\s+/);
  const types = ORDER.filter((type) => tagged.some((el) => typesOf(el).includes(type)));
  if (types.length < 2) return;

  // Group the article into h2 sections, and keep only those with tagged content.
  let sections = [];
  Array.from(root.children).forEach((node) => {
    if (node.tagName === 'H2') sections.push({heading: node, nodes: []});
    if (sections.length) sections[sections.length - 1].nodes.push(node);
  });
  sections = sections.filter((section) =>
    section.nodes.some((node) => node.hasAttribute('data-deployments') || node.querySelector('[data-deployments]')),
  );
  const caps = Array.from(root.querySelectorAll('.vendor-cap')).filter((cap) =>
    cap.querySelector('[data-deployments]'),
  );

  const switcher = document.createElement('div');
  switcher.className = 'vendor-deployment-switch';
  switcher.setAttribute('role', 'group');
  switcher.setAttribute('aria-label', 'Deployment type');
  const label = document.createElement('span');
  label.className = 'vendor-deployment-switch__label';
  label.textContent = 'Show resources for';
  switcher.appendChild(label);
  const options = document.createElement('div');
  options.className = 'vendor-deployment-switch__options';
  switcher.appendChild(options);
  const description = document.createElement('p');
  description.className = 'vendor-deployment-switch__description';
  description.setAttribute('aria-live', 'polite');

  const isHidden = (el) => !!(el && el.closest('[hidden]'));

  function keepInUrl(type) {
    const url = new URL(window.location.href);
    if (url.searchParams.get(URL_PARAM) === type) return;
    url.searchParams.set(URL_PARAM, type);
    window.history.replaceState(window.history.state, '', url.href);
  }

  const buttons = types.map((type) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = LABELS[type];
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => {
      select(type);
      keepInUrl(type);
    });
    options.appendChild(button);
    return button;
  });

  const first = sections.length ? sections[0].heading : tagged[0];
  insertBefore(switcher, first);
  insertBefore(description, first);
  addClass(root, 'vendor-deployments-on');

  function select(type) {
    tagged.forEach((el) => setAttr(el, 'hidden', typesOf(el).includes(type) ? null : ''));
    caps.forEach((cap) => {
      setAttr(cap, 'hidden', null);
      const anyShown = Array.from(cap.querySelectorAll('[data-deployments]')).some((el) => !el.hasAttribute('hidden'));
      setAttr(cap, 'hidden', anyShown ? null : '');
    });
    sections.forEach((section) => {
      setAttr(section.heading, 'hidden', null);
      const shown = section.nodes.some((node) => {
        if (node === section.heading) return false;
        if (node.hasAttribute('data-deployments') || node.classList.contains('vendor-cap')) {
          return !node.hasAttribute('hidden');
        }
        return Array.from(node.querySelectorAll('[data-deployments]')).some((el) => !isHidden(el));
      });
      section.nodes.forEach((node) => {
        const own = node.hasAttribute('data-deployments') || node.classList.contains('vendor-cap');
        if (!own) setAttr(node, 'hidden', shown ? null : '');
      });
    });
    buttons.forEach((button, i) => button.setAttribute('aria-pressed', types[i] === type ? 'true' : 'false'));
    description.textContent = DESCRIPTIONS[type];
    tocLinks().forEach((link) => {
      const target = targetOf(link);
      const item = link.closest('li');
      if (target && item) setAttr(item, 'hidden', isHidden(target) ? '' : null);
    });
  }

  const current = () => {
    const pressed = buttons.find((b) => b.getAttribute('aria-pressed') === 'true');
    return pressed ? types[buttons.indexOf(pressed)] : null;
  };

  // A link to content hidden by the current selection switches to a type that
  // shows it, in the order the switch lists them.
  revealHandlers.push((id) => {
    const target = id ? document.getElementById(id) : null;
    if (!target || !isHidden(target)) return false;
    const before = current();
    for (const type of types) {
      select(type);
      if (!isHidden(target)) {
        keepInUrl(type);
        return true;
      }
    }
    select(before);
    return false;
  });

  const requested = new URL(window.location.href).searchParams.get(URL_PARAM);
  select(types.includes(requested) ? requested : types.includes('cloud') ? 'cloud' : types[0]);
  const hashTarget = decodeURIComponent(window.location.hash.slice(1));
  if (hashTarget && revealHandlers[revealHandlers.length - 1](hashTarget)) {
    document.getElementById(hashTarget).scrollIntoView();
  }
}

/* ---------------------------------------------------------------------------
 * Route lifecycle
 * ------------------------------------------------------------------------- */
export function onRouteUpdate({location, previousLocation}) {
  if (!ExecutionEnvironment.canUseDOM || !previousLocation) return;
  if (location.pathname !== previousLocation.pathname) {
    // Leaving the page: give React back the DOM it rendered.
    restorePage();
  } else if (location.hash && location.hash !== previousLocation.hash) {
    // An anchor on this page (table of contents, a link): open the content
    // that holds it before Docusaurus scrolls to it.
    const id = decodeURIComponent(location.hash.slice(1));
    revealHandlers.some((reveal) => reveal(id));
  }
}

export function onRouteDidUpdate({location, previousLocation}) {
  if (!ExecutionEnvironment.canUseDOM) return;
  if (previousLocation && location.pathname === previousLocation.pathname) return;
  // Let the new page finish rendering, then set up its switches.
  window.requestAnimationFrame(() => {
    setUpGuidesSwitch();
    setUpDeploymentSwitch();
  });
}
