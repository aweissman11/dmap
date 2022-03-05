import {
  Grid,
  Paper,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  imgCane,
  imgCrutches,
  imgMedicalHelp,
  imgShowerChair,
  imgWalker,
  imgWheelChair,
} from '../../../assets';
import {
  BluePaper,
  Img,
  LegList,
  StepTitleGrid,
} from '../../shared/styled_components';

const DeviceWrap = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: 170,
    margin: theme.spacing(0, 'auto', 2),
  },
}));

const RoundWrap = styled('div')(({ theme }) => ({
  borderRadius: '100%',
  border: '2px solid black',
  padding: theme.spacing(1),
  marginRight: theme.spacing(2),
}));

const AbilityImg = styled('img', {
  shouldForwardProp: p => p !== 'scale',
})<{ scale?: number }>(({ theme, scale }) => ({
  height: 100,
  width: 100,
  transform: `scale(${scale ? scale : 1})`,
  [theme.breakpoints.between('md', 'lg')]: {
    height: 75,
    width: 75,
  },
  [theme.breakpoints.between('sm', 'md')]: {
    height: 63,
    width: 63,
  },
  [theme.breakpoints.down('sm')]: {
    height: 30,
    width: 30,
  },
}));

export default function Step1() {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container justifyContent="center">
      <StepTitleGrid item md={9} xs={12}>
        <Typography align="center" gutterBottom sx={{ fontSize: '1.8em' }}>
          Everyone's recovery is at a different pace.
        </Typography>
        <Typography
          align="center"
          gutterBottom
          sx={{ fontSize: '1.8em', mt: 4 }}
        >
          Everyone's healing process is unique.
        </Typography>
        <Typography
          align="center"
          gutterBottom
          sx={{ fontSize: '1.8em', mt: 4 }}
        >
          It is normal to have strong feelings after amputation.
        </Typography>
        <Typography gutterBottom variant="h3" sx={{ fontSize: '2.5em', mt: 6 }}>
          <b>
            Talk with your health provider about your healing timelines and
            needs.
          </b>
        </Typography>
      </StepTitleGrid>
      <Grid item md={6} xs={12} sx={{ mb: 6 }}>
        <BluePaper>
          <Typography variant="h4" align="center">
            Lower Limb Amputation
          </Typography>
          <Typography align="center" sx={{ fontSize: '1.3em' }}>
            Amputation is a surgery to make the most functional and healthy
            residual limb possible.
          </Typography>
        </BluePaper>
      </Grid>
      <Grid item md={9} xs={12} sx={{ mb: 6 }}>
        <Paper sx={{ p: 3, backgroundColor: theme => theme.palette.grey[100] }}>
          <Typography align="center" variant="h5" sx={{ mb: 2 }}>
            <b>Recovery after amputation may include:</b>
          </Typography>
          <Grid container justifyContent="space-evenly">
            <Paper sx={{ width: '200px', padding: 2, mb: 2 }}>
              <b>Managing swelling:</b>
              <LegList sx={{ mb: 1 }}>
                <li>Shrinker</li>
                <li>Rigid dressing</li>
                <li>Post operative prosthesis</li>
              </LegList>
            </Paper>
            <Paper sx={{ width: '200px', padding: 2, mb: 2 }}>
              <b>Managing tight muscles:</b>
              <LegList sx={{ mb: 1 }}>
                <li>Stretching</li>
                <li>Positioning</li>
                <li>Therapy</li>
              </LegList>
            </Paper>
            <Paper sx={{ width: '200px', padding: 2, mb: 2 }}>
              <b>Building Strength:</b>
              <LegList sx={{ mb: 1 }}>
                <li>Exercises</li>
                <li>Balance</li>
                <li>Stairs</li>
                <li>Endurance</li>
                <li>Preventing falls</li>
                <li>Moving around your home</li>
              </LegList>
            </Paper>
          </Grid>
        </Paper>
      </Grid>
      <Grid item md={9} xs={12} sx={{ mb: 6 }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            <b>
              Based on your abilities, assistive devices may help you move in
              your home and life places:
            </b>
          </Typography>
          <Grid
            container
            justifyContent="center"
            direction={smScreen ? 'column' : 'row'}
          >
            <DeviceWrap>
              <RoundWrap>
                <AbilityImg
                  src={imgShowerChair}
                  alt="Shower chair icon"
                  scale={0.8}
                />
              </RoundWrap>
              <Typography>Shower Bench</Typography>
            </DeviceWrap>
            <DeviceWrap>
              <RoundWrap>
                <AbilityImg
                  src={imgWheelChair}
                  alt="Wheelchair icon"
                  scale={1.2}
                />
              </RoundWrap>
              <Typography>Wheelchair</Typography>
            </DeviceWrap>
            <DeviceWrap>
              <RoundWrap>
                <AbilityImg src={imgWalker} alt="Walker icon" />
              </RoundWrap>
              <Typography>Walker</Typography>
            </DeviceWrap>
            <DeviceWrap>
              <RoundWrap>
                <AbilityImg src={imgCrutches} alt="Crutches icon" />
              </RoundWrap>
              <Typography>Crutches</Typography>
            </DeviceWrap>
            <DeviceWrap>
              <RoundWrap>
                <AbilityImg src={imgCane} alt="Cane icon" scale={0.8} />
              </RoundWrap>
              <Typography>Cane</Typography>
            </DeviceWrap>
          </Grid>
        </Paper>
      </Grid>

      <Grid item md={9} xs={12} sx={{ mb: 6 }}>
        <Paper sx={{ p: 3, backgroundColor: theme => theme.palette.grey[100] }}>
          <Grid container spacing={3} justifyContent="space-evenly">
            <Grid item xs={10}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                <b>
                  Emotional support may help you through your life with
                  amputation:
                </b>
              </Typography>
            </Grid>
            <Grid item md={4} xs={8}>
              <LegList sx={{ mb: 1 }}>
                <li>Family</li>
                <li>Friends</li>
                <li>Clergy</li>
                <li>Social Workers</li>
                <li>Counselors</li>
                <li>Mental Health Providers</li>
                <li>Psychologist</li>
              </LegList>
            </Grid>
            <Grid item md={4} xs={8}>
              <LegList sx={{ mb: 1 }}>
                <li>Psychiatrist</li>
                <li>Physician</li>
                <li>Physical Therapist</li>
                <li>Occupational Therapist</li>
                <li>Prosthetist</li>
                <li>Peer Support</li>
              </LegList>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item md={9} xs={12} sx={{ mb: 6 }}>
        <BluePaper>
          <Grid container>
            <Grid
              item
              xs={10}
              container
              justifyContent="space-evenly"
              direction="column"
            >
              <Typography variant="h4">Emotional and Peer Support</Typography>
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
