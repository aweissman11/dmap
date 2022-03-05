import { styled, Typography } from '@mui/material';
import { imgSignStreet } from '../../../assets';

const StreetWrap = styled('div')(({ theme }) => ({
  position: 'relative',
  width: 350,
}));

const JourneyText = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: 102,
  left: 63,
  fontSize: '2.7em',
  width: '220px',
  textAlign: 'center',
  lineHeight: '0.9em',
  color: 'white',
}));

export default function MyJourney() {
  return (
    <StreetWrap>
      <img
        src={imgSignStreet}
        alt="street sign"
        style={{ width: '100%', minWidth: 350 }}
      />
      <JourneyText>My Journey</JourneyText>
    </StreetWrap>
  );
}
