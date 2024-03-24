
import classNames from 'classnames';
import { Button } from 'keep-react';

export const PrimaryButton = ({ text, background, hover }) => {
  const isWhiteBackground = background === 'white';
  const isTealBackground = background === 'teal';

  const buttonClasses = classNames(
    `bg-${background}`,
    `hover:bg-${isWhiteBackground ? 'teal' : 'white'}`,
    `hover:text-${isWhiteBackground ? 'white' : 'teal'}`,
    'border',
    `text-${text}`,
    `border-${text}`,
    isTealBackground ? '' : 'hover:border-transparent',
    'py-2',
    'px-4',
    'rounded-none',
    'transition-all',
    'duration-500',
    'ease-in-out'
  );
  return <Button className={buttonClasses}>Let&lsquo;s Talk</Button>;
};
