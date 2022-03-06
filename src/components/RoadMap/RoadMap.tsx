import { Menu, MenuItem, styled, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import { useHistory } from 'react-router';
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

const MapImage = styled('img', {
  shouldForwardProp: p => p !== 'printMode',
})<{ printMode: boolean }>(({ theme, printMode }) => ({
  height: '100%',
  width: '100%',
  cursor: 'pointer',
  [theme.breakpoints.up('md')]: {
    display: printMode ? 'block' : 'none',
  },
}));

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

type TStepObj = {
  title: string;
  summary: string;
};

type TRoadMapProps = {
  step?: number;
  steps?: TStepObj[];
};

function RoadMap({ step, steps }: TRoadMapProps) {
  const history = useHistory();
  const theme = useTheme();
  const printMode = useMediaQuery('print');

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStepMenu = (stepIx: number) => {
    handleClose();
    history.push(`/map/${stepIx + 1}`);
  };

  const getImgSrc = () => {
    switch (step) {
      case 1:
        return imgMapStep_1;
      case 2:
        return imgMapStep_2;
      case 3:
        return imgMapStep_3;
      case 4:
        return imgMapStep_4;
      case 5:
        return imgMapStep_5;
      case 6:
        return imgMapStep_6;
      default:
        return imgMapAllSteps;
    }
  };

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

      <MapImage src={getImgSrc()} printMode={printMode} onClick={handleClick} />
      {steps && (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {steps.map((s, ix) => (
            <MenuItem
              key={s.summary}
              sx={{
                backgroundColor:
                  step === ix + 1
                    ? theme.palette.grey[300]
                    : theme.palette.common.white,
              }}
              onClick={() => handleStepMenu(ix)}
            >
              {ix + 1}. {s.summary}
            </MenuItem>
          ))}
        </Menu>
      )}
    </RoadMapWrapper>
  );
}
export default RoadMap;
