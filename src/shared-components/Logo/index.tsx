import styles from './Logo.module.scss';

interface LogoOptions {
  className?: string;
  alt?: string;
}

const BrandLogo = (props: LogoOptions) => {
  return (
    <div className={`${styles.logo} ${props.className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
      >
        <path
          d="M25 0C11.2133 0 0 11.2133 0 25C0 38.7867 11.2133 50 25 50C38.7867 50 50 38.7867 50 25C50 11.2133 38.7867 0 25 0ZM38.8733 5.41L26.6467 31.3267L12.37 4.58333C16.0433 2.3 20.37 0.98 25 0.98C30.1667 0.98 34.9533 2.62667 38.8733 5.41ZM0.98 25C0.98 18.18 3.84 12.02 8.42 7.64667L24.11 36.7167L18.7033 48.18C8.50333 45.4033 0.98 36.0667 0.98 25ZM25 49.02C24.0033 49.02 23.02 48.95 22.0533 48.8333L41.6067 7.67333C46.17 12.05 49.02 18.1967 49.02 25.0033C49.02 38.2433 38.2433 49.02 25 49.02Z"
          fill="#090954"
        ></path>
      </svg>
    </div>
  );
};

export default BrandLogo;
