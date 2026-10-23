import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

// Points readers of the old cloud product to its existing documentation, which
// sits next to this site (…/docs/saas/ -> …/docs/cloud/). Relative to the base
// URL, so it works on staging and production alike.
const BIJIRA_PAGE = 'cloud/introduction/what-is-bijira/';

export default function BijiraDocsBanner() {
  const bijiraDocs = useBaseUrl('/').replace(/[^/]+\/$/, '') + BIJIRA_PAGE;
  return (
    // It leads to the other docs site, so it opens in a new tab.
    <a className={styles.banner} href={bijiraDocs} target="_blank" rel="noopener noreferrer">
      <svg className={styles.info} width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5M12 8h.01" />
      </svg>
      <span className={styles.text}>
        Using <strong>API Platform Cloud (formerly Bijira)</strong>? <span className={styles.link}>View its docs</span>
      </span>
      <span className={styles.arrow} aria-hidden="true">↗</span>
    </a>
  );
}
