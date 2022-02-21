import { Grid, Typography } from '@mui/material';

import PrioritiesDnD from './PrioritiesDnD';

export default function Step3() {
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item md={9} xs={12} sx={{ mb: 6 }}>
          <Typography gutterBottom sx={{ fontSize: '1.8em' }}>
            Your values, goals and lifestyle will help to inform the best
            prosthesis design for you.
          </Typography>
          <Typography gutterBottom sx={{ fontSize: '1.8em', mt: 4 }}>
            Your values and priorities may change over time.
          </Typography>
          <Typography
            gutterBottom
            variant="h3"
            sx={{ fontSize: '2.5em', mt: 6 }}
          >
            <b>What is important to you for your first prosthesis?</b>
          </Typography>
        </Grid>
        <Grid item md={8} xs={12} sx={{ mb: 8 }}>
          <Typography gutterBottom>
            You and your prosthetist will be working together to design the best
            prosthesis to meet your needs. It is important to consider your
            personal values, goals, and lifestyle to help determine the best
            prosthesis for you.
          </Typography>
          <Typography gutterBottom>
            What is important to you for your first prosthesis?
          </Typography>
        </Grid>
        <PrioritiesDnD />
      </Grid>
    </>
  );
}
