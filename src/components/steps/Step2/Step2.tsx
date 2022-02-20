import { Grid, Paper, styled, Typography } from '@mui/material';

import AgreeRadio from './AgreeRadio';
import { imgLegIcon, imgConversationPng } from '../../../assets';

const QUESTIONS = [
  'When there is more than one option for a part of my prosthesis, I should be told about each one.*',
  'I believe that my prosthetist needs to know everything about my medical history to take good care of me.*',
  'I would rather have my prosthetist make decisions about what’s best for my prosthesis than to be given a whole lot of choices.*',
];

const PaddedPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(1),
  width: '100%',
}));

const BluePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.primary.light,
}));

const QuestionsList = styled('ul')(({ theme }) => ({
  // listStyle: `url(${imgProsthesisZebra})`,
  fontSize: '1em',
  '& > li': {
    marginLeft: theme.spacing(2),
    listStyle: 'none',
    '&::before': {
      content: "''",
      display: 'inline-block',
      height: 15,
      width: 15,
      backgroundImage: `url(${imgLegIcon})`,
      marginRight: theme.spacing(1),
    },
  },
}));

const Img = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
}));

export default function Step2() {
  return (
    <Grid container data-testid="step-2" justifyContent="center">
      <Grid item md={9} xs={12} sx={{ mb: 6 }}>
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
      </Grid>
      <Grid item md={8} xs={12}>
        {QUESTIONS.map(q => (
          <PaddedPaper key={q}>
            <AgreeRadio question={q} />
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
              <QuestionsList>
                <li>What does your normal day look like?</li>
                <li>Who helps or supports you at home?</li>
                <li>What do you do for work and fun?</li>
                <li>
                  What do you see yourself doing with a prosthesis in a year?
                </li>
                <li>What are your concerns?</li>
              </QuestionsList>
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
