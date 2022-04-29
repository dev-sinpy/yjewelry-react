import { Box, Button, Container, styled, Tab, Tabs, Typography } from '@mui/material';
import fetcher from 'lib/fetcher';
import { useState } from 'react';
import Thumbnail from 'shared-components/Thumbnail/Thumbnail.component';
import useSWR from 'swr';
import { ProductCategory, ProductDataRoot } from './interfaces/product.interface';
import styles from './TrendingProducts.module.scss';

const CategoryTabs = styled(Tabs)({
  borderRadius: '20px',
  border: '1px solid #bfd1e8',
  '& .MuiTabs-indicator': {
    // backgroundColor: '#1890ff',
    // borderRadius: '20px',
    // background: '#ffffff',
    // height: '30px',
    // border: '1px solid #bfd1e8',
  },
});

const TrendingProducts = () => {
  const { data } = useSWR<ProductDataRoot>('/api/featured_bestsellers/0', fetcher);

  const [selectedCategory, setSelectedCategory] = useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedCategory(newValue);
  };

  return (
    <Box className="flex flex-col items-center">
      <Typography variant="belweLight" className="text-3xl">
        trending now
      </Typography>

      <CategoryTabs
        textColor="secondary"
        indicatorColor="secondary"
        value={selectedCategory}
        onChange={handleChange}
        aria-label="trending products"
      >
        {data?.productData?.map((category: ProductCategory, idx) => (
          <Tab
            key={idx}
            label={
              <Typography color="secondary" variant="apercu" className="text-xs">
                {category.category_name}
              </Typography>
            }
            value={idx}
            sx={{
              backgroundColor: 'rgba(191, 209, 232, 0.5)',
              borderRadius: '20px',
              height: '10px',
              color: '#090954',
            }}
          />
        ))}
      </CategoryTabs>

      <div className="flex flex-wrap justify-around p-4 gap-14">
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
      <Button color="secondary" variant="outlined">
        <Typography variant="apercu">Discover All Charms</Typography>
      </Button>
    </Box>
  );
};

export default TrendingProducts;
