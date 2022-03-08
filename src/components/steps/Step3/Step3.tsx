import { Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import { AppCtx } from '../../../context/AppCtx';
import { StepTitleGrid } from '../../shared/styled_components';

import PrioritiesDnD from './PrioritiesDnD';

export default function Step3() {
  const { priorities, selectPriorities } = useContext(AppCtx);

  return (
    <>
      <Grid container justifyContent="center">
        <StepTitleGrid item md={9} xs={12}>
          <Typography align="center" gutterBottom sx={{ fontSize: '1.8em' }}>
            Your values, goals and lifestyle will help to inform the best
            prosthesis design for you.
          </Typography>
          <Typography
            align="center"
            gutterBottom
            sx={{ fontSize: '1.8em', mt: 4 }}
          >
            Your values and priorities may change over time.
          </Typography>
          <Typography
            gutterBottom
            variant="h3"
            sx={{ fontSize: '2.5em', mt: 6 }}
            align="center"
          >
            <b>What is important to you for your first prosthesis?</b>
          </Typography>
        </StepTitleGrid>
        <Grid item md={8} xs={12} sx={{ mb: 8 }}>
          <Typography align="center" gutterBottom sx={{ fontSize: '1.4em' }}>
            Take time to consider and sort your priorities.
          </Typography>
          <Typography align="center" gutterBottom sx={{ fontSize: '1.4em' }}>
            Drag and drop values and goals you would like to address with your
            prosthetist, in the order of your priorities.
          </Typography>
        </Grid>
        <PrioritiesDnD
          priorities={priorities}
          selectPriorities={selectPriorities}
        />
      </Grid>
    </>
  );
}
