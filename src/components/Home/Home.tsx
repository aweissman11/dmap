import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

import { Button, Grid, Typography, styled } from '@mui/material';
import { RoadMap } from '../RoadMap';
import { BluePaper, Thumbnail } from '../shared/styled_components';
import { imgPdfThumbnail } from '../../assets';
import { PlayCircleOutline } from '@mui/icons-material';
import { useEffect } from 'react';

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
  margin: theme.spacing(12, 'auto'),
}));

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HomeContainer maxWidth="xl" data-testid="home-container">
      <RoadMap />
      <Title align="center" variant="h1">
        DECISION MAP
      </Title>
      <Typography align="center" variant="h3">
        Decision-Making Aid for Lower Limb Prosthesis Design
      </Typography>
      <Typography gutterBottom align="center" sx={{ mt: 4 }}>
        This tool is designed to help you and your prosthetist work together
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
          to="/map/1"
          color="secondary"
          data-testid="get_started"
          sx={{ width: 275, height: 75, fontSize: '1.8em' }}
          endIcon={<PlayCircleOutline sx={{ fontSize: '1.4em !important' }} />}
        >
          Get Started
        </Button>
      </ButtonGrid>

      <Grid container justifyContent="center">
        <Grid item md={7} xs={12} sx={{ mb: 6 }}>
          <BluePaper>
            <Grid container direction="column" alignItems="center">
              <a
                href="https://dmap-files.s3.us-west-2.amazonaws.com/2022_09_28_DMAP+Prototype+Copyright.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Thumbnail src={imgPdfThumbnail} alt="PDF Thumbnail" />
              </a>
              <Typography gutterBottom variant="h3" sx={{ fontSize: '1.5em' }}>
                <b>Click here to print a paper version of this decision aid</b>
              </Typography>
            </Grid>
          </BluePaper>
        </Grid>
      </Grid>
    </HomeContainer>
  );
};

export default Home;
