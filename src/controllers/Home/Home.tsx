import React from 'react';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

import RoadMap from '../../assets/presentation_road_map.png';
import { Button, Grid, Typography, styled } from '@mui/material';

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

const HomeImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  marginBottom: theme.spacing(8),
}));

export default function SimpleContainer() {
  return (
    <HomeContainer maxWidth="md">
      <HomeImage src={RoadMap} alt="Decision Road Map Diagram" />
      <Title align="center" variant="h1">
        DECISION MAP
      </Title>
      <Typography align="center" variant="h3">
        Support for prosthetic design and selection
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
