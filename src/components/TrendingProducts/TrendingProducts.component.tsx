import { Box, Container, Typography } from '@mui/material';
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
    <Box className="flex flex-col items-center">
      <Typography variant="belweLight" className="text-3xl">
        trending now
      </Typography>

      <div className="flex flex-wrap justify-around">
        {data?.productData[selectedCategory] &&
          data?.productData[selectedCategory].products.map((product) => (
            <div key={product.id} className={styles.productThumbnail}>
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
      <button className={`btn-light ${styles.btnCta}`}>
        Discover All Charms
      </button>
    </Box>
  );
};

export default TrendingProducts;
