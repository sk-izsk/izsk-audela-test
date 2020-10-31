import React from 'react';
import { createUseStyles } from 'react-jss';
import 'ui-neumorphism/dist/index.css';
import { axiosApi, urlArtist } from './api/axios';
import { TextField } from './components';
import { CustomTheme } from './theme/theme';

const useStyles = createUseStyles((theme: CustomTheme) => ({
  '@global': {
    body: {
      padding: 0,
      margin: 0,
      backgroundColor: theme.colors.thirdColor,
      fontFamily: theme.fontProperties.fontFamily,
      scrollBehavior: 'smooth',
    },
  },
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
  },
  textField: {
    flex: 1,
    marginTop: theme.spacing(1),
  },
}));

const App = () => {
  useStyles();
  const classes = useStyles();

  axiosApi.get(urlArtist).then((resp) => console.log(resp));

  return (
    <div className={classes.mainContainer}>
      <TextField className={classes.textField} />
    </div>
  );
};

export { App };
