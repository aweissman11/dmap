import { useContext } from 'react';
import { Grid, Paper, styled, Typography } from '@mui/material';

import AgreeRadio from './AgreeRadio';
import { imgConversationPng } from '../../../assets';
import {
  BluePaper,
  Img,
  LegList,
  StepTitleGrid,
} from '../../shared/styled_components';
import { TImportance, TQuestionId } from '../../../types';
import { AppCtx } from '../../../context/AppCtx';

const PaddedPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(1),
  width: '100%',
}));

export default function Step2() {
  const { surveyQuestions, answerSurveyQuestions } = useContext(AppCtx);

  const answerQuestion = (id: TQuestionId, importance: TImportance) => {
    surveyQuestions[id].importance = importance;
    answerSurveyQuestions(surveyQuestions);
  };

  return (
    <Grid container data-testid="step-2" justifyContent="center">
      <StepTitleGrid item md={9} xs={12}>
        <Typography gutterBottom sx={{ fontSize: '1.8em' }}>
          You and your prosthetist will work <b>together</b> to determine if a
          prosthesis will be useful for you.
        </Typography>
        <Typography gutterBottom sx={{ fontSize: '1.8em', mt: 4 }}>
          There are many prosthesis options, and lots of information.
        </Typography>
        <Typography gutterBottom variant="h3" sx={{ fontSize: '2.5em', mt: 6 }}>
          <b>
            Share with your prosthetist how you would like to talk about this
            information.
          </b>
        </Typography>
      </StepTitleGrid>
      <Grid item md={8} xs={12}>
        {Object.entries(surveyQuestions).map(q => (
          <PaddedPaper key={q[0]}>
            <AgreeRadio
              id={q[0] as TQuestionId}
              question={q[1]}
              answerQuestion={answerQuestion}
            />
          </PaddedPaper>
        ))}
      </Grid>
      <Grid item md={7} xs={12} sx={{ mb: 6 }}>
        <Typography variant="subtitle2">
          <b>* Adapted from:</b> Flynn KE, Smith MA, Vanness D. A typology of
          preferences for participation in healthcare decision making. Soc Sci
          Med. 2006;63(5):1158-1169.
        </Typography>
      </Grid>
      <Grid item md={9} xs={12} sx={{ mb: 6 }}>
        <BluePaper>
          <Grid container>
            <Grid item xs={10}>
              <Typography gutterBottom variant="h3" sx={{ fontSize: '1.5em' }}>
                <b>
                  Your prosthetist will ask you questions to help design the
                  best prosthesis for you:
                </b>
              </Typography>
              <LegList>
                <li>What does your normal day look like?</li>
                <li>Who helps or supports you at home?</li>
                <li>What do you do for work and fun?</li>
                <li>
                  What do you see yourself doing with a prosthesis in a year?
                </li>
                <li>What are your concerns?</li>
              </LegList>
            </Grid>
            <Grid item xs={2}>
              <Img src={imgConversationPng} alt="conversation icon" />
            </Grid>
          </Grid>
        </BluePaper>
      </Grid>
    </Grid>
  );
}
