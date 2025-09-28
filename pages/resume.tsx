import Link from 'next/link';
import styles from '@/styles/ResumePage.module.css';
import type { GetStaticProps } from 'next';
import type { Resume } from '@/types';
import resumeData from '@/data/resume.json';

interface ResumePageProps {
  resume: Resume;
}

const ResumePage = ({ resume }: ResumePageProps) => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Resume</h1>
      <p className={styles.pageSubtitle}>
        Download my resume or browse highlights below.
      </p>

      <div className={styles.actions}>
        <a href="/resume.pdf" className={styles.downloadBtn} download>
          Download Resume
        </a>
      </div>

      <section className={styles.headerCard}>
        <h2 className={styles.name}>{resume.name}</h2>
        <div className={styles.title}>{resume.title}</div>
        <div className={styles.meta}>
          <span>{resume.location}</span>
          {resume.phone && (
            <>
              <span>•</span>
              <span>{resume.phone}</span>
            </>
          )}
          <span>•</span>
          <a href={`mailto:${resume.email}`}>{resume.email}</a>
          {resume.website && (
            <>
              <span>•</span>
              <Link href={resume.website} target="_blank" rel="noopener">
                {resume.website}
              </Link>
            </>
          )}
        </div>
        <p className={styles.summary}>{resume.summary}</p>
        {resume.skills?.length ? (
          <div className={styles.tags}>
            {resume.skills.slice(0, 3).map((s, i) => (
              <span key={i} className={styles.tag}>{s}</span>
            ))}
          </div>
        ) : null}
      </section>

      {/* Compact view: sections hidden intentionally. */}
    </div>
  );
};

export const getStaticProps: GetStaticProps<ResumePageProps & { title: string }> = async () => {
  // Data is imported statically; still returning via GSP for consistency
  return {
    props: { title: 'Resume', resume: resumeData as Resume },
  };
};

export default ResumePage;
