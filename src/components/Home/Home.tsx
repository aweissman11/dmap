import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

import { Button, Grid, Typography, styled } from '@mui/material';
import RoadMap from '../RoadMap';

const HomeContainer = styled(Container)(({ theme }) => {
  return {
    paddingTop: theme.spacing(8),
  };
});

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  [theme.breakpoints.down('sm')]: {
    fontSize: '4rem',
  },
}));

const ButtonGrid = styled(Grid)(({ theme }) => ({
  margin: theme.spacing(8, 'auto'),
}));

export default function SimpleContainer() {
  return (
    <HomeContainer maxWidth="xl">
      <RoadMap />
      <Title align="center" variant="h1">
        DECISION MAP
      </Title>
      <Typography align="center" variant="h3">
        Support for prosthetic design and selection
      </Typography>
      <Typography gutterBottom align="center" sx={{ mt: 4 }}>
        This tool is designed to help you and your prosthetists work together
        with your care team to make the best prosthesis for you.
      </Typography>
      <Typography gutterBottom align="center">
        This tool shows decisions that may come up in your journey.
      </Typography>
      <Typography gutterBottom align="center">
        Use and review at your pace, or stop and return to it later in your
        journey.
      </Typography>
      <ButtonGrid container justifyContent="center">
        <Button
          variant="contained"
          component={Link}
          to="/map/0"
          color="secondary"
        >
          Get Started
        </Button>
      </ButtonGrid>
    </HomeContainer>
  );
}
