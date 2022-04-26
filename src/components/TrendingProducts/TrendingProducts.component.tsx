import { Typography } from '@mui/material';
import fetcher from 'lib/fetcher';
import { useState } from 'react';
import Thumbnail from 'shared-components/Thumbnail/Thumbnail.component';
import useSWR from 'swr';
import { ProductDataRoot } from './interfaces/product.interface';
import styles from './TrendingProducts.module.scss';

const TrendingProducts = () => {
  const { data } = useSWR<ProductDataRoot>(
    '/api/featured_bestsellers/0',
    fetcher
  );

  const [selectedCategory, setSelectedCategory] = useState(1);

  return (
    <div>
      <Typography className={`${styles['header']}`}>trending now</Typography>
      <div className={styles['product-list']}>
        {data?.productData[selectedCategory] &&
          data?.productData[selectedCategory].products.map((product) => (
            <div key={product.id} className={styles['product-thumbnail']}>
              <Thumbnail
                title={product.name}
                description={product.price_model.price}
                imageUrl={product.images[0].src}
                thumbnailHeight={200}
                thumbnailWidth={200}
                sx={{ background: 'transparent' }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
