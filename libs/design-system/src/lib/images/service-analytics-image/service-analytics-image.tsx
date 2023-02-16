import { BaseIcon, InvertedIcon } from './ui';

export interface ServiceAnalyticsImageProps {
  variant?: 'inverted';
}

export function ServiceAnalyticsImage({ variant }: ServiceAnalyticsImageProps) {
  return variant === 'inverted' ? <InvertedIcon /> : <BaseIcon />;
}

export default ServiceAnalyticsImage;
