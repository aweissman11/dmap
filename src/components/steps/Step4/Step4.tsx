import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid, styled } from '@mui/material';

import {
  BluePaper,
  Img,
  LegList,
  StepTitleGrid,
} from '../../shared/styled_components';
import {
  imgLabeledProsthesis_1,
  imgLabeledProsthesis_2,
  imgMedicalHelp,
} from '../../../assets';

const HeadingType = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(25),
  fontWeight: theme.typography.fontWeightRegular,
}));

const LEG_COMPONENTS = [
  {
    name: 'Liner',
    description:
      'A soft interface that is put over your leg before putting on the prosthesis.',
  },
  {
    name: 'Socket',
    description:
      'A part that is custom fit to your leg. A new prosthesis user will often get many different sockets in the first 1-2 years.',
  },
  {
    name: 'Suspension',
    description: 'How a prosthesis holds onto your leg.',
  },
  {
    name: 'Knee',
    description: (
      <span>
        A part for people with{' '}
        <u>
          <em>above knee amputations</em>
        </u>{' '}
        that allows the prosthesis to bend for sitting, walking and other
        activities.
      </span>
    ),
  },
  {
    name: 'Foot',
    description:
      'The bottom part that is used to stand, balance, walk and for activities.',
  },
  {
    name: 'Accessories',
    description:
      'Additions to a prosthesis that may help with activities or appearance.',
  },
];

export default function Step1() {
  return (
    <Grid container justifyContent="center">
      <StepTitleGrid item md={9} xs={12}>
        <Typography gutterBottom sx={{ fontSize: '1.8em' }}>
          You and your prosthetist will work <b>together</b> to design the best
          prosthesis for you.
        </Typography>
        <Typography gutterBottom sx={{ fontSize: '1.8em', mt: 4 }}>
          There are many parts that go into a prosthesis, with pros and cons for
          each part.
        </Typography>
        <Typography gutterBottom variant="h3" sx={{ fontSize: '2.5em', mt: 6 }}>
          <b>Talk with your prosthetist about your prosthesis options.</b>
        </Typography>
      </StepTitleGrid>
      <Grid container justifyContent="space-between" sx={{ mb: 6 }}>
        <Grid
          item
          xs={12}
          md={4}
          container
          alignItems="center"
          justifyContent="center"
        >
          {/* TODO: Make labels clickable */}
          <Typography align="center" variant="h4" sx={{ mr: 2 }}>
            Above Knee Prosthesis
          </Typography>
          <Img src={imgLabeledProsthesis_1} alt="Prosthetic leg diagram" />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          container
          alignItems="center"
          sx={{ mt: 2, mb: 4 }}
        >
          <div>
            {/* TODO: Add expand/collapse all button */}
            {LEG_COMPONENTS.map(cmp => (
              <Accordion key={cmp.name}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <HeadingType>{cmp.name}</HeadingType>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{cmp.description}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </Grid>

        <Grid item xs={12} md={4} container alignItems="center">
          <Typography align="center" variant="h4" sx={{ ml: 2 }}>
            Below Knee Prosthesis
          </Typography>
          <Img src={imgLabeledProsthesis_2} alt="Prosthetic leg diagram" />
        </Grid>
      </Grid>
      <Grid item md={9} xs={12} sx={{ mb: 6 }}>
        <BluePaper>
          <Grid container>
            <Grid item xs={10}>
              <Typography variant="h4">Cost of a Prosthesis</Typography>
              <Typography>
                Insurance, programs and resources may influence the cost of a
                prosthesis and available prosthesis options.
              </Typography>
              <Typography component="div">
                <LegList>
                  <li>
                    <b>Medicare</b>
                  </li>
                  <li>
                    <b>Medicaid</b>
                  </li>
                  <li>
                    <b>Private Resources</b>
                  </li>
                  <li>
                    <b>Out of Pocket</b>
                  </li>
                  <li>
                    <b>Copays</b>
                  </li>
                </LegList>
              </Typography>
              <Typography>
                <b>RESOURCE:</b>{' '}
                <a
                  href="https://www.amputee-coalition.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.amputee-coalition.org
                </a>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Img src={imgMedicalHelp} alt="medical help icon" />
            </Grid>
          </Grid>
        </BluePaper>
      </Grid>
    </Grid>
  );
}
