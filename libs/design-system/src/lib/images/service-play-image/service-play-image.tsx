import { BaseIcon, InvertedIcon } from './ui';

export interface ServicePlayImageProps {
  variant?: 'inverted';
}

export function ServicePlayImage({ variant }: ServicePlayImageProps) {
  return variant === 'inverted' ? <InvertedIcon /> : <BaseIcon />;
}

export default ServicePlayImage;
