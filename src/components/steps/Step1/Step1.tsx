import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Grid, styled } from '@mui/material';

import ProstheticLegs from '../../../assets/prosthetic_legs.png';

const HeadingType = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(15),
  fontWeight: theme.typography.fontWeightRegular,
}));

const Img = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
}));

const LEG_COMPONENTS = [
  {
    name: 'Suspension',
    description: 'How a prosthesis holds on to your residual limb.',
  },
  {
    name: 'Socket',
    description:
      'A rigid part of the prosthesis that fits over your residual limb and distributes your weight while standing and walking.',
  },
  {
    name: 'Interface/Liner',
    description:
      'A soft part of the prosthesis, in between your residual limb and the hard socket that protects your residual limb.',
  },
  {
    name: 'Knee',
    description:
      'A mid-section attachment for an above knee prosthesis that allows for the prosthesis to bend for sitting, walking, running, and activities.',
  },
  {
    name: 'Prosthetic foot/ankle',
    description:
      'The bottom attachment of your prosthesis that provides a foundation for standing, walking, running, and activities.',
  },
  {
    name: 'Cover',
    description:
      'An optional part of a prosthesis that covers and protects the internal parts of a prosthesis.  The cover can be made in the shape and appearance of a leg.',
  },
  {
    name: 'Accessories',
    description:
      'Additions to a prosthesis that contribute to day to day activities.',
  },
];

export default function Step1() {
  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid item md={8} xs={12} sx={{ mb: 6 }}>
          <Typography>
            There are several parts that make up a lower limb prosthesis. Within
            each part, there are numerous options available. For your first
            prosthesis, you and your prosthetist will work together to determine
            the optimal option for you, including decisions about:
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between" sx={{ mb: 6 }}>
        <Grid item xs={12} md={5} container alignItems="center">
          <Img src={ProstheticLegs} alt="Prosthetic leg diagram" />
        </Grid>
        <Grid item xs={12} md={6}>
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
        </Grid>
      </Grid>
    </Container>
  );
}
