import { Grid, Paper, styled } from '@mui/material';
import { imgLegIcon } from '../../assets';

export const BluePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.primary.light,
}));

export const LegList = styled('ul')(({ theme }) => ({
  fontSize: '1em',
  '& > li': {
    marginLeft: theme.spacing(4),
    listStyle: `outside url(${imgLegIcon})`,
    '&::marker': {
      fontSize: '2.1em',
      lineHeight: '.5em',
    },
  },
}));

export const Img = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
}));

export const StepTitleGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));
