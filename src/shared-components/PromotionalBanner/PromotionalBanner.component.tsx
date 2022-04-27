/* eslint-disable @next/next/no-img-element */
import usePromotionBanner from 'hooks/usePromotionBanner';
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
      <img
        className={`${styles.promotionImage} ${styles.cloud}`}
        alt="promotion banner"
        src={promotionBanner?.PromotionImageUrl}
      />
      <button className={`btn-light ${styles.btnCta}`}>
        {promotionBanner?.CTAText}
      </button>
    </div>
  );
};

export default PromotionBanner;
