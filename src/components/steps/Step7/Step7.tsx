import { Print } from '@mui/icons-material';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { useHistory } from 'react-router';

import { imgPdfThumbnail } from '../../../assets';
import { AllAnswers } from '../../AllAnswers';
import {
  BluePaper,
  StepTitleGrid,
  Thumbnail,
} from '../../shared/styled_components';

export default function Step7() {
  const history = useHistory();

  return (
    <Grid container data-testid="step-2" justifyContent="center">
      <StepTitleGrid item md={9} xs={12}>
        <Typography align="center" gutterBottom sx={{ fontSize: '1.8em' }}>
          As you go through your journey, use the answers you've given here to
          discuss with your prosthetist and the care team.
        </Typography>
        <Typography
          align="center"
          gutterBottom
          variant="h3"
          sx={{ fontSize: '2.5em', mt: 6 }}
        >
          <b>Print your answers from this exercise using the link below:</b>
        </Typography>
      </StepTitleGrid>
      <Grid item md={9} xs={12} sx={{ mb: 6 }}>
        <Paper
          sx={{ p: 3, backgroundColor: (theme) => theme.palette.grey[200] }}
        >
          <Grid container>
            <Grid item xs={12} container justifyContent="flex-end">
              <Button
                variant="contained"
                endIcon={<Print />}
                sx={{ ml: 'auto' }}
                onClick={() => history.push('/print')}
              >
                Print Your Answers
              </Button>
            </Grid>
            <AllAnswers />
          </Grid>
        </Paper>
      </Grid>
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
  );
}
