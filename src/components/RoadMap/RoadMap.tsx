import { styled } from '@mui/material';
import {
  imgConversation,
  imgHeart,
  imgOneCrutch,
  imgProsAndCons,
  imgProsthesisLeg,
  imgRoad,
  imgOneLeg,
  imgMapAllSteps,
  imgMapStep_1,
  imgMapStep_2,
  imgMapStep_3,
  imgMapStep_4,
  imgMapStep_5,
  imgMapStep_6,
} from '../../assets';
import RoadSign from './RoadSign';

const RoadMapWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 400,
  maxWidth: 845,
  margin: 'auto',
  [theme.breakpoints.down('md')]: {
    height: 200,
  },
  [theme.breakpoints.down('sm')]: {
    height: 150,
  },
}));

const CssMap = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const MapImage = styled('div', {
  shouldForwardProp: p => p !== 'step',
})<{ step: number }>(({ theme, step }) => {
  let image = imgMapAllSteps;
  switch (step) {
    case 1:
      image = imgMapStep_1;
      break;
    case 2:
      image = imgMapStep_2;
      break;
    case 3:
      image = imgMapStep_3;
      break;
    case 4:
      image = imgMapStep_4;
      break;
    case 5:
      image = imgMapStep_5;
      break;
    case 6:
      image = imgMapStep_6;
      break;
    default:
      break;
  }
  return {
    height: '100%',
    width: '100%',
    backgroundImage: `url(${image})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  };
});

const HomeImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
}));

const OneCrutch = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '35.5%',
  width: 150,
  height: 150,
  left: '13.5%',
  backgroundImage: `url(${imgOneCrutch})`,
}));

const Conversation = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '27%',
  width: 130,
  height: 130,
  left: '25.9%',
  backgroundImage: `url(${imgConversation})`,
}));

const HeartCrutch = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '35.5%',
  width: 150,
  height: 150,
  left: '35.8%',
  backgroundImage: `url(${imgOneCrutch})`,
}));

const Heart = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '48.3%',
  width: 25,
  height: 25,
  left: '43.2%',
  backgroundImage: `url(${imgHeart})`,
}));

const Leg = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '35.6%',
  width: 90,
  height: 90,
  left: '50.2%',
  backgroundImage: `url(${imgProsthesisLeg})`,
}));

const ProsAndCons = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '39.6%',
  width: 110,
  height: 110,
  left: '60.7%',
  backgroundImage: `url(${imgProsAndCons})`,
}));

const OneLeg = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '28.8%',
  width: 140,
  height: 140,
  left: '69.6%',
  backgroundImage: `url(${imgOneLeg})`,
}));

type TRoadMapProps = {
  step?: number;
};

function RoadMap({ step }: TRoadMapProps) {
  return (
    <RoadMapWrapper>
      <CssMap>
        <HomeImage src={imgRoad} alt="Decision Road Map Diagram" />
        <OneCrutch />
        {((step && step >= 2) || !step) && <Conversation />}
        {((step && step >= 3) || !step) && (
          <>
            <HeartCrutch />
            <Heart />
          </>
        )}
        {((step && step >= 4) || !step) && <Leg />}
        {((step && step >= 5) || !step) && <ProsAndCons />}
        {((step && step >= 6) || !step) && <OneLeg />}

        {/* ======**** ROAD SIGNS ****====== */}
        {((step && step === 1) || !step) && (
          <RoadSign text="My Amputation" top={15.3} left={16.3} num={1} />
        )}
        {((step && step === 2) || !step) && (
          <RoadSign
            text="My Communication"
            top={66.2}
            left={25.3}
            num={2}
            isBottom
          />
        )}
        {((step && step === 3) || !step) && (
          <RoadSign text="My Values" top={15.3} left={39.2} num={3} />
        )}
        {((step && step === 4) || !step) && (
          <RoadSign
            text="My First Prosthesis"
            top={66.2}
            left={49.6}
            num={4}
            isBottom
          />
        )}
        {((step && step === 5) || !step) && (
          <RoadSign text="My Preferences" top={15.3} left={60.6} num={5} />
        )}
        {((step && step === 6) || !step) && (
          <RoadSign text="My Journey" top={66.2} left={71.9} num={6} isBottom />
        )}
      </CssMap>

      <MapImage step={step || 0} />
    </RoadMapWrapper>
  );
}
export default RoadMap;
