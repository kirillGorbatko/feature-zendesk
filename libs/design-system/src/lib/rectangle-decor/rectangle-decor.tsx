import classNames from 'classnames';
import DefaultImg from './rect-default-img';

import styles from './rectangle-decor.module.scss';

type RectangleDecorProps = {
  img?: string;
  variant?:
    | 'black'
    | 'purple'
    | 'turquoise'
    | 'gradient'
    | 'image'
    | 'secondary_gradient'
    | 'tertiary_gradient';
  size?:
    | 'normal'
    | 'large'
    | 'medium'
    | 'xxl'
    | 'sm'
    | 'sm2'
    | 'long'
    | 'xl'
    | 'secondary_sm'
    | 'secondary_md'
    | 'secondary_long';
};

export function RectangleDecor({
  img,
  variant,
  size = 'large',
}: RectangleDecorProps) {
  let sizeMod = 'rectangle_decor--size_1_mod';
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
    case 'turquoise': {
      fillMod = 'rectangle_decor--color_3_mod';
      break;
    }
    case 'gradient': {
      fillMod = 'rectangle_decor--color_4_mod';
      break;
    }
    case 'secondary_gradient': {
      fillMod = 'rectangle_decor--color_5_mod';
      break;
    }
    case 'tertiary_gradient': {
      fillMod = 'rectangle_decor--color_6_mod';
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
      sizeMod = 'rectangle_decor--size_1_mod';
      break;
    }
    case 'long': {
      sizeMod = 'rectangle_decor--size_2_mod';
      break;
    }
    case 'normal': {
      sizeMod = 'rectangle_decor--size_3_mod';
      break;
    }
    case 'sm': {
      sizeMod = 'rectangle_decor--size_4_mod';
      break;
    }
    case 'sm2': {
      sizeMod = 'rectangle_decor--size_5_mod';
      break;
    }
    case 'xxl': {
      sizeMod = 'rectangle_decor--size_6_mod';
      break;
    }
    case 'medium': {
      sizeMod = 'rectangle_decor--size_7_mod';
      break;
    }
    case 'xl': {
      sizeMod = 'rectangle_decor--size_8_mod';
      break;
    }
    case 'secondary_sm': {
      sizeMod = 'rectangle_decor--size_9_mod';
      break;
    }
    case 'secondary_md': {
      sizeMod = 'rectangle_decor--size_10_mod';
      break;
    }
    case 'secondary_long': {
      sizeMod = 'rectangle_decor--size_11_mod';
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
