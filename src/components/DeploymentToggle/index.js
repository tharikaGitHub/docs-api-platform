import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import styles from './styles.module.css';

// Navbar toggle between the Cloud docs (this site) and the Self-managed page,
// which points readers to the existing API Platform documentation.
export default function DeploymentToggle({mobile}) {
  const {pathname} = useLocation();
  const selfManagedPath = useBaseUrl('/self-managed');
  const isSelfManaged = pathname.replace(/\/$/, '') === selfManagedPath.replace(/\/$/, '');

  const options = [
    {label: 'Cloud', to: '/', active: !isSelfManaged},
    {label: 'Self-managed', to: '/self-managed', active: isSelfManaged},
  ];

  return (
    <nav
      aria-label="Deployment"
      className={clsx(styles.toggle, mobile && styles.mobile)}>
      {options.map(({label, to, active}) => (
        <Link
          key={label}
          to={to}
          aria-current={active ? 'page' : undefined}
          className={clsx(styles.option, active && styles.active)}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
