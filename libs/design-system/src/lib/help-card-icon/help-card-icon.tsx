import styles from './help-card-icon.module.scss';

import {
  ServiceAnalyticsImage,
  ServiceAudienceImage,
  ServicePlayImage,
} from '@featurefm/design-system';

export interface HelpCardIconProps {
  iconName: 'play' | 'analytics' | 'audience';
  variant?: 'inverted';
}

export function HelpCardIcon({ iconName, variant }: HelpCardIconProps) {
  return (
    <div className={styles['help_card_icon']}>
      <div className="help_card_icon__image">
        {iconName === 'analytics' && (
          <ServiceAnalyticsImage variant={variant} />
        )}
        {iconName === 'audience' && <ServiceAudienceImage variant={variant} />}
        {iconName === 'play' && <ServicePlayImage variant={variant} />}
      </div>
    </div>
  );
}

export default HelpCardIcon;
