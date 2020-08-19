import React from 'react';
import SvgIcon from './SvgIcon';

export default function createSvgIcon(path, displayName) {
  const Component = (props, ref) => (
    <SvgIcon ref={ref} {...props}>
      {path}
    </SvgIcon>
  );

  Component.displayName = `${displayName}Icon`;

  return React.memo(React.forwardRef(Component));
}
