
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Button({
  onClick = () => { },
  type = 'button',
  isExternal = false,
  href = '',
  className = '',
  style = {},
  target = '',
  children = null,
}) {
  const onClickHandler = () => {
    if (onClick) onClick();
  };

  if (type === 'link') {
    if (isExternal) {
      return (
        <a
          href={href}
          className={className}
          style={style}
          target={target === '_blank' ? '_blank' : undefined}
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <NavLink
        to={href}
        className={className}
        style={style}
        onClick={onClickHandler}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <button
      className={className}
      // @ts-ignore
      type={type}
      style={style}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'link', 'submit', 'reset']),
  href: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  children: PropTypes.node, // Accept any renderable content
  isExternal: PropTypes.bool,
};
