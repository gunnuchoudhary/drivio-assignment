import React from 'react';

const Card = ({
  children,
  variant = 'default',
  padding = 'medium',
  shadow = 'medium',
  rounded = 'medium',
  className = '',
  onClick,
  ...props
}) => {
  const baseClasses = 'bg-white border transition-colors duration-200';
  
  const variants = {
    default: 'border-gray-200',
    outlined: 'border-gray-300',
    elevated: 'border-gray-100',
  };
  
  const paddings = {
    none: 'p-0',
    small: 'p-3',
    medium: 'p-4',
    large: 'p-6',
  };
  
  const shadows = {
    none: 'shadow-none',
    small: 'shadow-sm',
    medium: 'shadow-md',
    large: 'shadow-lg',
  };
  
  const roundings = {
    none: 'rounded-none',
    small: 'rounded-sm',
    medium: 'rounded-lg',
    large: 'rounded-xl',
  };
  
  const interactiveClasses = onClick 
    ? 'cursor-pointer hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2' 
    : '';
  
  const cardClasses = `${baseClasses} ${variants[variant]} ${paddings[padding]} ${shadows[shadow]} ${roundings[rounded]} ${interactiveClasses} ${className}`;

  const CardComponent = onClick ? 'button' : 'div';

  return (
    <CardComponent
      onClick={onClick}
      className={cardClasses}
      {...props}
    >
      {children}
    </CardComponent>
  );
};

export default Card;