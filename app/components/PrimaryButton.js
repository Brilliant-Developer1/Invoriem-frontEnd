

import classNames from 'classnames';

export const PrimaryButton = ({ text, background, hover }) => {
  const isWhiteBackground = background === 'white';
  const isTealBackground = background === 'teal';

  const buttonClasses = classNames(
    'py-2',
    'px-4',
    'rounded-none',
    'transition-all',
    'duration-500',
    'ease-in-out',
    {
      'bg-white text-teal border border-teal': isWhiteBackground,
      'hover:bg-teal hover:text-white hover:border-white': isWhiteBackground,
      'bg-teal text-white border border-white': isTealBackground,
      'hover:bg-white hover:text-teal hover:border-teal': isTealBackground,
    }
  );

  
  return (
    <button className={buttonClasses}>{text}</button>
  );
};
