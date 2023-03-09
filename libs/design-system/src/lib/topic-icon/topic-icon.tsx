import { ReactNode } from 'react';
import classNames from 'classnames';
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
  color?: string;
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

export function TopicIcon({ iconName = 'bulb', color }: TopicIconProps) {
  const Icon = switchIcon(iconName);

  return (
    <div
      className={classNames(styles['topic_icon'], {
        [styles['topic_icon--v1_mod']]: color === 'purple',
        [styles['topic_icon--v2_mod']]: color === 'red',
        [styles['topic_icon--v3_mod']]: color === 'green',
      })}
    >
      {Icon}
    </div>
  );
}
