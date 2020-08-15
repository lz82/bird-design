import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
library.add(fab, fas);

export type Theme =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export interface IconProps extends FontAwesomeIconProps {
  theme?: Theme;
}

const Icon: React.FC<IconProps> = (props) => {
  const { icon, theme, className, ...restProps } = props;

  const iconCls = classnames('bird-icon', className, {
    [`icon-${theme}`]: theme
  });

  return <FontAwesomeIcon className={iconCls} icon={icon} {...restProps} />;
};

export default Icon;
