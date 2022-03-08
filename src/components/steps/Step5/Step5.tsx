import { Grid, Paper, Typography } from '@mui/material';

import { imgConversationPng } from '../../../assets';
import { BluePaper, Img, StepTitleGrid } from '../../shared/styled_components';
import Options from './Options';

export default function Step5() {
  return (
    <Grid container data-testid="step-2" justifyContent="center">
      <StepTitleGrid item md={9} xs={12}>
        <Typography align="center" gutterBottom sx={{ fontSize: '1.8em' }}>
          Options for a prosthesis may be different in ways that matter to you.
        </Typography>
        <Typography
          align="center"
          gutterBottom
          sx={{ fontSize: '1.8em', mt: 4 }}
        >
          There are many ways to develop preferences for options.
        </Typography>
        <Typography
          align="center"
          gutterBottom
          variant="h3"
          sx={{ fontSize: '2.5em', mt: 6 }}
        >
          <b>Ask your prosthetist questions to find what works best for you.</b>
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
            <Grid item xs={12}>
              <Typography align="center" variant="h5" sx={{ mb: 2 }}>
                <b>Is this option...</b>
              </Typography>
            </Grid>
            <Grid item xs={12} container justifyContent="center">
              <Options />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item md={9} xs={12} sx={{ mb: 6 }}>
        <BluePaper>
          <Grid container>
            <Grid item xs={10}>
              <Typography gutterBottom variant="h3" sx={{ fontSize: '1.5em' }}>
                <b>
                  Exposure to options and using a prosthesis is the best way to
                  find what you might like.
                </b>
              </Typography>
              <Typography>
                <u>
                  <b>Pictures:</b>
                </u>
              </Typography>
              <Typography sx={{ mb: 1 }}>What does it look like?</Typography>
              <Typography>
                <u>
                  <b>Show and tell:</b>
                </u>
              </Typography>
              <Typography sx={{ mb: 1 }}>
                Are there opportunities to hold and feel this option?
              </Typography>
              <Typography>
                <u>
                  <b>Videos:</b>
                </u>
              </Typography>
              <Typography sx={{ mb: 1 }}>
                Are there ways to watch how it works?
              </Typography>
              <Typography>
                <u>
                  <b>Other people with amputation:</b>
                </u>
              </Typography>
              <Typography>
                Connect with other people who are using the option to learn
                about their experience.
              </Typography>
              <Typography sx={{ mb: 1 }}>
                <u>
                  <b>RESOURCE:</b>
                </u>{' '}
                <a
                  href="https://www.amputee-coalition.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.amputee-coalition.org
                </a>
              </Typography>
              <Typography>
                <u>
                  <b>Manufacturer Trials:</b>
                </u>
              </Typography>
              <Typography sx={{ mb: 1 }}>
                Are there ways to get experience using this option?
              </Typography>
            </Grid>
            <Grid item xs={2} container alignItems="center">
              <Img src={imgConversationPng} alt="conversation icon" />
            </Grid>
          </Grid>
        </BluePaper>
      </Grid>
    </Grid>
  );
}
