import clsx from 'clsx';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { TextField as UiTextField } from 'ui-neumorphism';
import { CustomTheme } from '../../theme/theme';

export interface TextFieldProps {
  className?: string;
  rest?: any;
}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const TextField: React.FC<TextFieldProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  return (
    <>
      <UiTextField className={clsx([classes.inputContainer, className])} width={800} />
    </>
  );
};

export { TextField };
