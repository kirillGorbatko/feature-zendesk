import { ReactNode } from 'react';
import styles from './topic-icon.module.scss';

import {
  BulbIcon,
  CircleIcon,
  FlagIcon,
  RectanglesIcon,
  SpeakerIcon,
  TrianglesIcon,
  UnionIcon,
  WrenchIcon,
} from './icons';

interface TopicIconProps {
  iconName?: string;
}

const switchIcon = (iconName: string) => {
  let Icon;

  switch (iconName) {
    case 'bulb': {
      Icon = <BulbIcon />;
      break;
    }
    case 'circle': {
      Icon = <CircleIcon />;
      break;
    }
    case 'flag': {
      Icon = <FlagIcon />;
      break;
    }
    case 'rectangles': {
      Icon = <RectanglesIcon />;
      break;
    }
    case 'speaker': {
      Icon = <SpeakerIcon />;
      break;
    }
    case 'triangles': {
      Icon = <TrianglesIcon />;
      break;
    }
    case 'union': {
      Icon = <UnionIcon />;
      break;
    }
    case 'wrench': {
      Icon = <WrenchIcon />;
      break;
    }

    default:
      break;
  }

  return Icon;
};

export function TopicIcon({ iconName = 'bulb' }: TopicIconProps) {
  const Icon = switchIcon(iconName);

  return <div className={styles['topic_icon']}>{Icon}</div>;
}
