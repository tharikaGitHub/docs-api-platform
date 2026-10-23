import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './self-managed.module.css';

// The self-managed components keep their existing documentation, so this page
// only points readers there: the Self-managed landing page of the existing
// docs, which sits next to this site (…/docs/saas/ -> …/docs/self-managed/).
// Relative to the base URL, so it works on staging and production alike.
function useExistingDocsUrl() {
  return useBaseUrl('/').replace(/[^/]+\/$/, '') + 'self-managed/';
}

export default function SelfManaged() {
  const existingDocs = useExistingDocsUrl();
  return (
    <Layout
      title="Self-managed"
      description="Documentation for running WSO2 API Platform components on your own infrastructure.">
      <main className={styles.page}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Self-managed</p>
          <p className={styles.lead}>
            For API Manager, API Gateway, AI Gateway, API Portal, and AI
            Workspace, see the existing documentation given below.
          </p>
          {/* It leads to the other docs site, so it opens in a new tab. */}
          <a className={styles.card} href={existingDocs} target="_blank" rel="noopener noreferrer">
            <span className={styles.icon} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="7" rx="2" />
                <rect x="3" y="13" width="18" height="7" rx="2" />
                <path d="M7 7.5h.01M7 16.5h.01" />
              </svg>
            </span>
            <span className={styles.cardTitle}>WSO2 API Platform self-managed documentation</span>
            <span className={styles.arrow} aria-hidden="true">↗</span>
          </a>
        </div>
      </main>
    </Layout>
  );
}
