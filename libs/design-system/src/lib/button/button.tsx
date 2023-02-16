import React from 'react';
import Link from 'next/link';

export interface ButtonProps {
  type?: 'primary' | 'secondary' | 'tertiary' | 'tertiary-inverted';
  size?: 'small' | 'normal' | 'large' | 'extra-large' | 'extra-large-x2';
  isVisible?: boolean;
  mobileWidth?: 'fit' | 'full';
  onClick?: () => void;
  link?: string;
  width?: 'fit' | 'full';
  text?: string;
  className?: string;
}

Button.defaultProps = {
  type: 'primary',
  size: 'normal',
  text: '',
  isVisible: true,
  mobileWidth: 'full',
  width: 'fit',
};

export function Button(props: ButtonProps) {
  let classes = null;

  switch (props.type) {
    case 'primary':
      classes = 'bg-[#9B62FF] text-background';
      break;
    case 'secondary':
      classes = 'bg-[#FF5262] text-background';
      break;
    case 'tertiary':
      classes = 'bg-background text-foreground';
      break;
    case 'tertiary-inverted':
      classes = 'bg-foreground text-background';
      break;
  }

  switch (props.size) {
    case 'small':
      classes = `${classes} px-6 py-2 text-base font-normal`;
      break;
    case 'normal':
      classes = `${classes} px-[30px] py-3 text-base font-semibold`;
      break;
    case 'large':
      classes = `${classes} px-[60px] py-4 text-base font-medium`;
      break;
    case 'extra-large':
      classes = `${classes} px-[60px] py-6 text-[18px] desktop:text-lg desktop:leading-[22px] font-medium`;
      break;
  }

  if (!props.isVisible) {
    return null;
  }

  const button = (
    <button
      className={`rounded-full text-center w-${props.mobileWidth} tablet:w-${
        props.width
      } h-fit ${classes} ${props.className || ''}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );

  if (props.link) {
    return (
      <Link href={props.link}>
        <a href={props.link}>{button}</a>
      </Link>
    );
  }

  return button;
}

export default Button;
