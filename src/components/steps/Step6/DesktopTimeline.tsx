import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
// import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import {
  imgProsthesisLeg,
  imgRoadSvg,
  imgSignYieldTriangle,
  imgWalker,
  imgProsthesisFoot,
  imgOneLeg,
} from '../../../assets';
import { ConeList } from '../../shared/styled_components';
import { Paper, styled } from '@mui/material';

const DesktopTimeline = styled(Timeline)(({ theme }) => ({
  marginTop: theme.spacing(8),
  [theme.breakpoints.down(1300)]: {
    display: 'none',
  },
}));

const YeildSign = styled('img')(({ theme }) => ({
  width: 120,
  margin: -18,
}));

const RoadSignWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const WalkerIcon = styled('img')(({ theme }) => ({
  position: 'absolute',
  top: 17,
  left: 18,
  width: 45,
}));

const FootIcon = styled('img')(({ theme }) => ({
  position: 'absolute',
  top: 22,
  left: 12,
  width: 35,
}));

const LegIcon = styled('img')(({ theme }) => ({
  position: 'absolute',
  top: 19,
  left: 27,
  width: 40,
}));

const OneLegIcon = styled('img')(({ theme }) => ({
  position: 'absolute',
  top: 9,
  left: 10,
  width: 65,
}));

type TRoadWarningSignProps = {
  icon: string;
};
const RoadWarningSign = ({ icon }: TRoadWarningSignProps) => (
  <RoadSignWrapper>
    <YeildSign src={imgSignYieldTriangle} alt="road sign" />
    {icon === 'walker' && <WalkerIcon src={imgWalker} alt="prosthetic icon" />}
    {icon === 'prosthesis' && (
      <>
        <FootIcon src={imgProsthesisFoot} alt="prosthesis foot icon" />
        <LegIcon src={imgProsthesisLeg} alt="prosthesis icon" />
      </>
    )}
    {icon === 'one-leg' && <OneLegIcon src={imgOneLeg} alt="one legged icon" />}
  </RoadSignWrapper>
);

export default function DesktopTimelineComponent() {
  return (
    <DesktopTimeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{
            m: 'auto 0',
            position: 'relative',
            bottom: 14,
            fontSize: '1.3em',
            fontWeight: 'bold',
          }}
          align="right"
        >
          Getting a Prosthesis
        </TimelineOppositeContent>
        <TimelineSeparator>
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <RoadWarningSign icon="walker" />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Paper
            sx={{
              pt: 1,
              pl: 1,
              pb: 1,
              pr: 3,
              width: 'max-content',
              maxWidth: 300,
            }}
          >
            <Typography>
              It may take several visits and weeks to make your prosthesis.
            </Typography>
            <Typography>
              Prosthesis design will be determined in the first 1-2 visits.
            </Typography>
            <ConeList>
              <li>Meeting prosthetist</li>
              <li>Measuring</li>
              <li>Fitting</li>
              <li>Delivery</li>
              <li>Follow up</li>
            </ConeList>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <img
        src={imgRoadSvg}
        alt="road"
        style={{ width: 40, margin: '-40px auto -1px' }}
      />

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', fontSize: '1.3em', fontWeight: 'bold' }}
        >
          Prosthesis Training
        </TimelineOppositeContent>
        <TimelineSeparator>
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <RoadWarningSign icon="walker" />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Paper
            sx={{
              pt: 1,
              pl: 1,
              pb: 1,
              pr: 3,
              width: 'max-content',
              ml: 'auto',
              mr: 2,
              textAlign: 'left',
            }}
          >
            <ConeList>
              <li>Physical Therapy</li>
              <li>Occupational Therapy</li>
              <li>Prosthetist</li>
              <li>At home</li>
              <li>In clinic</li>
              <li>At a rehabilitation center</li>
            </ConeList>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', fontSize: '1.3em', fontWeight: 'bold' }}
          align="right"
        >
          Prosthesis Changes
        </TimelineOppositeContent>
        <TimelineSeparator>
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <RoadWarningSign icon="prosthesis" />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Paper sx={{ p: 1, width: 'max-content', maxWidth: 300 }}>
            <Typography>
              Your prosthesis may need changes in the first 1-2 years.
            </Typography>
            <ConeList>
              <li>New Sockets</li>
              <li>Suspension</li>
              <li>Liner</li>
              <li>Foot</li>
              <li>Knee</li>
              <li>Alignment</li>
            </ConeList>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <img
        src={imgRoadSvg}
        alt="road"
        style={{ width: 40, margin: '-40px auto -1px' }}
      />

      <TimelineItem>
        <TimelineOppositeContent
          sx={{
            m: 'auto 0',
            position: 'relative',
            bottom: 12,
            fontSize: '1.3em',
            fontWeight: 'bold',
          }}
        >
          Medical Necessity
        </TimelineOppositeContent>
        <TimelineSeparator>
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <RoadWarningSign icon="prosthesis" />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Paper
            sx={{
              p: 1,
              width: 'max-content',
              ml: 'auto',
              mr: 2,
              maxWidth: 300,
              textAlign: 'left',
            }}
          >
            <Typography>
              Prosthesis changes may depend on changes to your life, leg, health
              or barriers you might encounter.
            </Typography>
            <ConeList>
              <li>Activity</li>
              <li>Health</li>
              <li>Pain</li>
              <li>Limb volume/shape</li>
              <li>Surgery</li>
              <li>Skin</li>
            </ConeList>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <img
        src={imgRoadSvg}
        alt="road"
        style={{ width: 40, margin: '-40px auto -1px' }}
      />

      <TimelineItem>
        <TimelineOppositeContent
          sx={{
            m: 'auto 0',
            position: 'relative',
            bottom: 14,
            fontSize: '1.3em',
            fontWeight: 'bold',
          }}
          align="right"
        >
          Life Changes
        </TimelineOppositeContent>
        <TimelineSeparator>
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <RoadWarningSign icon="one-leg" />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Paper sx={{ p: 1, width: 'max-content', maxWidth: 300 }}>
            <Typography>
              A prosthesis may need to change to meet your needs over your
              lifetime.
            </Typography>
            <ConeList>
              <li>Goals</li>
              <li>Values</li>
              <li>Activity</li>
              <li>Changing family</li>
              <li>Maternity</li>
              <li>Caretaking</li>
              <li>Being cared for</li>
              <li>Social support</li>
              <li>Job</li>
              <li>Environment</li>
            </ConeList>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <img
        src={imgRoadSvg}
        alt="road"
        style={{ width: 40, margin: '-40px auto -1px' }}
      />

      <TimelineItem>
        <TimelineOppositeContent
          sx={{
            m: 'auto 0',
            fontSize: '1.3em',
            fontWeight: 'bold',
          }}
        >
          Limb Changes
        </TimelineOppositeContent>
        <TimelineSeparator>
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <RoadWarningSign icon="one-leg" />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Paper
            sx={{
              pt: 1,
              pl: 1,
              pb: 1,
              pr: 3,
              width: 'max-content',
              ml: 'auto',
              mr: 2,
              maxWidth: 300,
              textAlign: 'left',
            }}
          >
            <ConeList>
              <li>Revision Surgeries</li>
              <li>Volume/Size/Shape</li>
              <li>Pain</li>
              <li>Bone</li>
              <li>Skin</li>
              <li>Muscle</li>
            </ConeList>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', fontSize: '1.3em', fontWeight: 'bold' }}
          align="right"
        >
          Age & Health Changes
        </TimelineOppositeContent>
        <TimelineSeparator>
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <RoadWarningSign icon="one-leg" />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
          <img src={imgRoadSvg} alt="road" style={{ width: 40 }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Paper
            sx={{
              pt: 1,
              pl: 1,
              pb: 1,
              pr: 3,
              width: 'max-content',
              maxWidth: 300,
            }}
          >
            <ConeList>
              <li>Arthritis</li>
              <li>Weight</li>
              <li>Balance</li>
              <li>Vision</li>
              <li>Hearing</li>
              <li>Strength</li>
              <li>Health</li>
              <li>Diet</li>
            </ConeList>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </DesktopTimeline>
  );
}
