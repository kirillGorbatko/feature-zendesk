/* eslint-disable-next-line */
import React from 'react';
import classnames from 'classnames';

export interface LineSeparatorProps {
  className?: string;
}

export function LineSeparator(props: LineSeparatorProps) {
  return (
    <div
      className={classnames('border-t-line2 border-t', props.className)}
    />
  );
}

export default LineSeparator;
