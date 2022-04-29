import { Card, CardContent, CardMedia, SxProps, Theme, Typography } from '@mui/material';
import Image from 'next/image';
import { Ref } from 'react';

import styles from './Thumbnail.module.scss';

interface ThumbnailOptions {
  className?: string;
  alt?: string;
  title?: string;
  description?: string;
  imageUrl: string;
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
      <CardMedia className={`${styles['banner-cover']} ${className}`}>
        <Image
          src={imageUrl}
          alt={alt}
          height={thumbnailHeight || 200}
          width={thumbnailWidth || 200}
          lazyBoundary="50px"
        />
      </CardMedia>
      <CardContent>
        <Typography className={`${styles['thumbnail-title']}`} gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography className={`${styles['thumbnail-description']}`}>{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default Thumbnail;
