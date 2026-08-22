import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>

        <p className="hero__subtitle">
          {siteConfig.tagline}
        </p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started"
          >
            Open the knowledge base
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Computer Technician Tool Collection"
      description="Tools for diagnosing, repairing, securing, and optimizing computers."
    >
      <HomepageHeader />

      <main>
        <section className={styles.quickLinks}>
          <div className="container">
            <div className="row">
              {/* Diagnostics */}
              <article className="col col--4">
                <h2>Hardware & Software Diagnostics</h2>

                <p>
                  Diagnostic tools for system information, sensors, storage,
                  memory, components, operating systems, and troubleshooting.
                </p>

                <Link to="/docs/tools/diagnostics/">
                  Browse diagnostics →
                </Link>
              </article>

              {/* Utilities */}
              <article className="col col--4">
                <h2>Utilities & Recovery</h2>

                <p>
                  Utilities for system maintenance, recovery, security,
                  conversion, bootable media, and everyday technician tasks.
                </p>

                <Link to="/docs/tools/utilities/">
                  Browse utilities →
                </Link>
              </article>

              {/* Platforms */}
              <article className="col col--4">
                <h2>Platforms</h2>

                <p>
                  Operating systems, mobile devices, browsers, servers, gaming platforms, embedded devices, and related reference material.
                </p>

                <Link to="/docs/platforms/operating-systems/">
                  Browse platforms →
                </Link>
              </article>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}