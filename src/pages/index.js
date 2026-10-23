import {Redirect} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

// The site opens on the introduction page.
export default function Home() {
  return <Redirect to={useBaseUrl('/introduction/what-is-api-platform-cloud')} />;
}
