import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Arsalan Makhajankar</h1>
        <div className={styles.subtitle}>Software Engineer | Full Stack Developer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
            👋 Hey! I&apos;m a full-stack developer from Maharashtra, India. I specialize in building modern, scalable applications with the MERN stack and Next.js, blending clean UI with strong backend integration.
            </p>
            <p className={styles.paragraph}>
            My main toolkit includes Next.js, React, Node, Express, MongoDB, Java, and Python — but I&apos;m always exploring new frameworks and technologies to sharpen my craft.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              1. Software Engineering Job Simulation <span className={styles.highlight}>@ JPMorgan Chase & Co. (2025) - </span> developed a Spring Boot backend with event-driven messaging using Kafka and implemented secure RESTful microservices.
            </p>

            <p className={styles.paragraph}>
              2. Web Developer Intern <span className={styles.highlight}>@ TechnoHacks Edutech (2024) - </span> built MERN stack apps, REST APIs, and responsive UIs with Next.js.
            </p>

            <p className={styles.paragraph}>
              3. Full Stack Developer Intern <span className={styles.highlight}>@ Bharat Intern (2024) - </span> designed and deployed full-stack apps with a focus on performance and usability.
            </p>
            <p className={styles.paragraph}>
            These experiences gave me hands-on exposure to Agile workflows, SDLC best practices, and collaborative coding with Git/GitHub.
            </p>
          </section>

          {/* <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Writing</h2>
            <p className={styles.paragraph}>
              I&apos;ve had the pleasure of writing for some amazing
              publications like{' '}
              <span className={styles.highlight}>100ms Blog</span>,{' '}
              <span className={styles.highlight}>LogRocket Blog</span>,{' '}
              <span className={styles.highlight}>DEV.to</span> and more as a
              freelance technical author.
            </p>
          </section> */}

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
            Outside coding, I enjoy learning about AI, cybersecurity, and new tech trends. I’ve also led hackathon teams and earned recognition, including an Oracle Database Foundations Associate certificate and a Next.js full-stack certification from LinkedIn Learning.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
