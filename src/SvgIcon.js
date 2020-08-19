import React from 'react';
import clsx from 'clsx';

const SvgIcon = React.forwardRef(function SvgIcon(props, ref) {
  const { children, className, viewBox = '0 0 24 24', ...rest } = props;

  const classes = clsx(className, 'icon');

  return (
    <svg
      className={classes}
      focusable="false"
      viewBox={viewBox}
      aria-hidden={true}
      ref={ref}
      {...rest}
    >
      {children}
    </svg>
  );
});

export default SvgIcon;
