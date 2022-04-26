import {
  Card,
  CardContent,
  CardMedia,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';

import styles from './Thumbnail.module.scss';

interface ThumbnailOptions {
  className?: string;
  alt?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  sx?: SxProps<Theme>;
  thumbnailWidth?: number;
  thumbnailHeight?: number;
}

const Thumbnail = ({
  className,
  alt,
  title,
  description,
  imageUrl,
  thumbnailHeight,
  thumbnailWidth,
  sx,
}: ThumbnailOptions) => {
  return (
    <Card elevation={0} sx={{ ...sx }}>
      <CardMedia
        className={`${styles['banner-cover']} ${className}`}
        component="img"
        height={thumbnailHeight}
        width={thumbnailWidth}
        image={imageUrl}
        alt={alt}
      />
      <CardContent>
        <Typography
          className={`${styles['thumbnail-title']}`}
          gutterBottom
          variant="h5"
          component="div"
        >
          {title}
        </Typography>
        <Typography className={`${styles['thumbnail-description']}`}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Thumbnail;
