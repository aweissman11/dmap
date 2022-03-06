import { Grid, Typography, styled, Container } from '@mui/material';
import { AppCtx } from '../../context/AppCtx';
import { useContext, Fragment } from 'react';
import { AGREEMENT_LEVELS } from '../steps/Step2/AgreeRadio';
import { prioritiesList } from '../steps/Step3/Priorities';

const PageBreakGrid = styled(Grid)(({ theme }) => ({
  breakAfter: 'always',
  breakInside: 'avoid',
  pageBreakAfter: 'always',
  pageBreakInside: 'avoid',
}));

const NotesLine = styled('hr')(({ theme }) => ({
  width: '100%',
  height: 20,
  margin: 'auto',
  borderLeft: 'none',
  borderRight: 'none',
  borderTop: 'none',
  borderBottom: 'solid 2px black',
}));

export default function AllAnswers() {
  const { priorities, surveyQuestions } = useContext(AppCtx);

  return (
    <Container maxWidth="md" style={{ position: 'relative' }}>
      <PageBreakGrid container>
        <Grid item xs={12} sx={{ mb: 5 }}>
          <Typography sx={{ fontSize: '2em', mb: 2 }} align="center">
            <b>Communication</b>
          </Typography>
          {Object.entries(surveyQuestions).map(q => (
            <Fragment key={q[0]}>
              <Typography sx={{ fontSize: '1.4em' }}>
                {q[1].question}
              </Typography>
              {q[1].importance !== '' ? (
                <Typography sx={{ fontSize: '1.4em', mb: 2 }}>
                  <b>Response:</b> {AGREEMENT_LEVELS[q[1].importance]}
                </Typography>
              ) : (
                <Typography sx={{ fontSize: '1.4em', mb: 2 }}>
                  You did not answer.
                </Typography>
              )}
            </Fragment>
          ))}
        </Grid>
      </PageBreakGrid>
      <PageBreakGrid container>
        <Grid item xs={12} sx={{ mb: 5 }}>
          <Typography sx={{ fontSize: '2em', mb: 2 }} align="center">
            <b>Your prosthesis design values are as follows:</b>
          </Typography>
          {priorities.length ? (
            <>
              <Typography align="center" sx={{ fontSize: '1.6em' }}>
                More Important
              </Typography>
              {priorities.map((p, ix) => (
                <Grid container alignItems="center" key={p.id}>
                  <Grid item xs={1}>
                    <Typography sx={{ fontSize: '1.4em' }} align="center">
                      <b>{ix + 1}. </b>
                    </Typography>
                  </Grid>
                  <Grid item xs={11}>
                    {prioritiesList.find(pr => pr.id === p.id)?.content}
                  </Grid>
                </Grid>
              ))}
              <Typography align="center" sx={{ fontSize: '1.6em' }}>
                Less Important
              </Typography>
            </>
          ) : (
            <Typography sx={{ fontSize: '1.4em' }}>
              You did not select any priorities.
            </Typography>
          )}
        </Grid>
      </PageBreakGrid>
      <PageBreakGrid sx={{ display: 'none', displayPrint: 'block' }}>
        <Typography align="center" sx={{ fontSize: '1.6em' }}>
          As you go through your journey, take notes on your questions or
          thoughts to discuss with your prosthetist and care team.
        </Typography>
        <NotesLine />
        <NotesLine />
        <NotesLine />
        <NotesLine />
        <NotesLine />
        <NotesLine />
        <NotesLine />
        <NotesLine />
        <NotesLine />
        <NotesLine />
        <NotesLine />
        <NotesLine />
        <NotesLine />
        <NotesLine />
        <NotesLine />
        <NotesLine />
        <NotesLine />
        <NotesLine />
      </PageBreakGrid>
    </Container>
  );
}
