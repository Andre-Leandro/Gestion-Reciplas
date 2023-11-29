import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  nombre: {
    fontWeight: 'bold',
    marginRight: '10px',
    fontSize: '1.7.0rem',
  },
  valor: {
    flexGrow: 1,
    fontSize: '1.2rem',
    color: '#333',
  },
});

function CampoValor({ nombre, valor }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.nombre}>{nombre}</div>
      <div className={classes.valor}>{valor}</div>
    </div>
  );
}

export default CampoValor;
