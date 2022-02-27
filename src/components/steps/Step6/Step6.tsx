import { Grid, Paper, Typography } from '@mui/material';
import { StepTitleGrid } from '../../shared/styled_components';

import DesktopTimeline from './DesktopTimeline';
import MobileTimeline from './MobileTimeline';
import MyJourney from './MyJourney';

export default function Step5() {
  return (
    <Grid container data-testid="step-2" justifyContent="center">
      <StepTitleGrid item md={9} xs={12}>
        <Typography gutterBottom sx={{ fontSize: '1.8em' }}>
          Everyone's timeline for getting a prosthesis and learning to use a
          prosthesis is different.
        </Typography>
        <Typography gutterBottom sx={{ fontSize: '1.8em', mt: 4 }}>
          Your prosthesis design may change as your body, life, and goals change
          over time.
        </Typography>
        <Typography gutterBottom variant="h3" sx={{ fontSize: '2.5em', mt: 6 }}>
          <b>
            Talk with your prosthetist about potential decisions in your
            journey.
          </b>
        </Typography>
      </StepTitleGrid>
      <Grid item md={8} xs={12} sx={{ mb: 6 }}>
        <Paper sx={{ p: 3, backgroundColor: theme => theme.palette.grey[200] }}>
          <Grid
            container
            justifyContent="center"
            direction="row"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              sx={{ height: 240, mt: -6 }}
              container
              justifyContent="center"
            >
              {/* <Typography align="center" variant="h5" sx={{ mb: 2 }}>
                <b>Is this option...</b>
              </Typography> */}
              <MyJourney />
            </Grid>
            <Grid item xs={12} container justifyContent="center">
              <DesktopTimeline />
              <MobileTimeline />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
