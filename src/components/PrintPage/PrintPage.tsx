import { ArrowBack, Print } from '@mui/icons-material';
import { Button, Container, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { AllAnswers } from '../AllAnswers';
import { RoadMap } from '../RoadMap';

export default function PrintPage() {
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container sx={{ pt: 6, pb: 6 }}>
      <Grid
        container
        justifyContent="space-between"
        sx={{ displayPrint: 'none' }}
      >
        <Button
          variant="outlined"
          onClick={history.goBack}
          startIcon={<ArrowBack />}
        >
          Go Back
        </Button>{' '}
        <Button variant="contained" endIcon={<Print />} onClick={window.print}>
          Print
        </Button>
      </Grid>

      <Grid container justifyContent="center">
        <Grid
          item
          xs={12}
          sx={{
            mb: 5,
            mt: 2,
          }}
        >
          <RoadMap />
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <AllAnswers />
      </Grid>
    </Container>
  );
}
