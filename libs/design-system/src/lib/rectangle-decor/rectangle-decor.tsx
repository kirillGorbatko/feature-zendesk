import classNames from 'classnames';
import DefaultImg from './rect-default-img';

import styles from './rectangle-decor.module.scss';

type RectangleDecorProps = {
  img?: string;
  variant?: 'black' | 'purple' | 'tortoise' | 'gradient' | 'image';
  size?: 'normal' | 'large' | 'medium' | 'xxl' | 'sm' | 'sm2' | 'long';
};

export function RectangleDecor({
  img,
  variant,
  size = 'large',
}: RectangleDecorProps) {
  let sizeMod = 'rectangle_decor--mod_1';
  let fillMod = 'rectangle_decor--color_1_mod';

  switch (variant) {
    case 'black': {
      fillMod = 'rectangle_decor--color_1_mod';
      break;
    }
    case 'purple': {
      fillMod = 'rectangle_decor--color_2_mod';
      break;
    }
    case 'tortoise': {
      fillMod = 'rectangle_decor--color_3_mod';
      break;
    }
    case 'gradient': {
      fillMod = 'rectangle_decor--color_4_mod';
      break;
    }
    case 'image': {
      fillMod = 'rectangle_decor--image_mod';
      break;
    }

    default:
      break;
  }
  switch (size) {
    case 'large': {
      sizeMod = 'rectangle_decor--mod_1';
      break;
    }
    case 'long': {
      sizeMod = 'rectangle_decor--mod_2';
      break;
    }
    case 'normal': {
      sizeMod = 'rectangle_decor--mod_3';
      break;
    }
    case 'sm': {
      sizeMod = 'rectangle_decor--mod_4';
      break;
    }
    case 'sm2': {
      sizeMod = 'rectangle_decor--mod_5';
      break;
    }
    case 'xxl': {
      sizeMod = 'rectangle_decor--mod_6';
      break;
    }
    case 'medium': {
      sizeMod = 'rectangle_decor--mod_7';
      break;
    }

    default:
      break;
  }

  const className = classNames(
    styles['rectangle_decor'],
    styles[fillMod],
    styles[sizeMod]
  );

  return (
    <div className={className}>
      {variant === 'image' &&
        (img ? (
          <img className={styles['rectangle_decor__img']} src={img} alt="#" />
        ) : (
          <DefaultImg className={styles['rectangle_decor__img']} />
        ))}
    </div>
  );
}

export default RectangleDecor;
