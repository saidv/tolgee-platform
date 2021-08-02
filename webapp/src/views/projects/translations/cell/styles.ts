import { makeStyles } from '@material-ui/core';

export const useCellStyles = makeStyles((theme) => ({
  cellPlain: {
    '&:focus-within $showOnHover': {
      opacity: 0.7,
    },
    '& $showOnHover': {
      opacity: 0,
      transition: 'opacity 0.1s ease-in-out',
    },
    '&:hover $showOnHover': {
      opacity: 0.7,
      transition: 'opacity 0.5s ease-in-out',
    },
  },
  cellClickable: {
    cursor: 'pointer',
  },
  state: {
    cursor: 'col-resize',
  },
  hover: {
    '&:hover': {
      background: theme.palette.grey[50],
    },
  },
  showOnHover: {
    '&:focus': {
      opacity: 1,
    },
  },

  controlsAbsolute: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  controlsSpaced: {
    '& > *': {
      marginLeft: 10,
      marginBottom: 5,
    },
  },
}));