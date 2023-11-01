import React from 'react';
import cx from 'classnames';
import { twMerge } from 'tailwind-merge';
import PropTypes from 'prop-types'; // Import PropTypes

// Define the PropTypes for the Navbar component
Navbar.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
};

export default function Navbar({
  primary,
  secondary,
  success,
  warning,
  danger,
  children,
  ...otherProps
}) {
  const classes = twMerge(
    cx(
      'flex  justify-evenly w-screen gap-10 p-4 text-xl opacity-70 gap-x-5',
      'bg-pink-900 text-white',
      {
        'bg-blue-600': primary,
        'bg-gray-800': secondary,
        'bg-green-600': success,
        'bg-orange-500': warning,
        'bg-red-700': danger,
      }
    )
  );

  return (
    <nav className={classes} {...otherProps} >
        <div className="flex gap-10"> 
        {children}
        </div>

      
    </nav>
  );
}
