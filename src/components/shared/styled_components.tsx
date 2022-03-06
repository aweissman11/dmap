import { Grid, Paper, styled } from '@mui/material';
import { imgConstructionCone, imgLegIcon } from '../../assets';

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

export const ConeList = styled('ul')(({ theme }) => ({
  fontSize: '1em',
  '& > li': {
    marginLeft: theme.spacing(4),
    background: `url(${imgConstructionCone}) no-repeat left center`,
    padding: '7px 10px 5px 34px',
    listStyle: 'none',
    margin: 0,
    verticalAlign: 'middle',
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

export const Thumbnail = styled('img')(({ theme }) => ({
  height: 'auto',
  width: 250,
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.grey[300]}`,
  cursor: 'pointer',
}));
