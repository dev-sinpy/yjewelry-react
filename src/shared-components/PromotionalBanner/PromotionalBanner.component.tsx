/* eslint-disable @next/next/no-img-element */
import usePromotionBanner from 'hooks/usePromotionBanner';
import Image from 'next/image';
import styles from './PromotionalBanner.module.scss';

const PromotionBanner = () => {
  const { promotionBanner, isLoading } = usePromotionBanner();

  return (
    <div
      className={`${styles.promotionBanner} w-full`}
      style={{
        background: `url("${promotionBanner?.BackgroundImageUrl}")`,
      }}
    >
      {isLoading ? (
        <div className={styles.loading}>
          <div className={styles.loading__spinner}></div>
        </div>
      ) : (
        <div className={`${styles.promotionImage} ${styles.cloud}`}>
          <Image
            alt="promotion banner"
            src={promotionBanner?.PromotionImageUrl || ''}
            width={100}
            height={50}
            layout="fixed"
          />
        </div>
      )}
      <button className={`btn-light ${styles.btnCta}`}>{promotionBanner?.CTAText}</button>
    </div>
  );
};

export default PromotionBanner;
