import { BaseIcon, InvertedIcon } from './ui';

export interface ServiceAudienceImageProps {
  variant?: 'inverted';
}

export function ServiceAudienceImage({ variant }: ServiceAudienceImageProps) {
  return variant === 'inverted' ? <InvertedIcon /> : <BaseIcon />;
}

export default ServiceAudienceImage;
