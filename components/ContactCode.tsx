import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'arsalanmakhajankar.com',
    href: 'https://arsalan-makhajankar-portfolio-website.vercel.app/',
  },
  {
    social: 'email',
    link: 'arsalankm786@gmail.com',
    href: 'mailto:arsalankm786@gmail.com',
  },
  {
    social: 'github',
    link: 'Arsalan0736',
    href: 'https://github.com/Arsalan0736',
  },
  {
    social: 'linkedin',
    link: 'Arsalan Makhajankar',
    href: 'https://www.linkedin.com/in/arsalan-makhajankar-388526257',
  },
  {
    social: 'twitter',
    link: 'Arsalan Makhajankar',
    href: 'https://x.com/arsalankm786',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          <span className={styles.key}>{item.social}:</span>
          <a className={styles.value} href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
