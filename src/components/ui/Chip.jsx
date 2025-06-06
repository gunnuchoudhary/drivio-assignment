import React from 'react';

const Chip = ({
  children,
  variant = 'default',
  size = 'medium',
  selected = false,
  onClick,
  onRemove,
  disabled = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    default: selected 
      ? 'bg-green-600 text-white' :'bg-gray-200 text-gray-800 hover:bg-gray-300',
    primary: selected 
      ? 'bg-green-600 text-white' :'bg-green-100 text-green-800 hover:bg-green-200',
    secondary: selected 
      ? 'bg-gray-600 text-white' :'bg-gray-100 text-gray-800 hover:bg-gray-200',
    outline: selected 
      ? 'bg-green-600 text-white border border-green-600' :'bg-white text-gray-800 border border-gray-300 hover:bg-gray-50',
  };
  
  const sizes = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-3 py-1.5 text-sm',
    large: 'px-4 py-2 text-base',
  };
  
  const chipClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : onClick ? 'cursor-pointer' : ''
  } ${className}`;

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    if (!disabled && onRemove) {
      onRemove();
    }
  };

  return (
    <span
      onClick={handleClick}
      className={chipClasses}
      {...props}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={handleRemove}
          disabled={disabled}
          className="ml-1 hover:bg-black hover:bg-opacity-20 rounded-full p-0.5 focus:outline-none"
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </span>
  );
};

export default Chip;