import {
  Artist,
  Calendar,
  Contest,
  Link,
  Podcast,
  Release,
  Tour,
} from '../../icons';

type IconProps = {
  iconName: string;
  className: string;
};

const switchIcon = (iconName: string) => {
  let Icon;

  switch (iconName) {
    case 'artist': {
      Icon = <Artist />;
      break;
    }
    case 'calendar': {
      Icon = <Calendar />;
      break;
    }
    case 'release': {
      Icon = <Release />;
      break;
    }
    case 'contest': {
      Icon = <Contest />;
      break;
    }
    case 'tour': {
      Icon = <Tour />;
      break;
    }
    case 'podcast': {
      Icon = <Podcast />;
      break;
    }
    case 'link': {
      Icon = <Link />;
      break;
    }

    default:
      Icon = <Artist />;
      break;
  }

  return Icon;
};

export default function Icon({ iconName, className }: IconProps) {
  const Icon = switchIcon(iconName);

  return <div className={className}>{Icon}</div>;
}
