import { styled, Typography } from '@mui/material';
import { v4 as uuid } from 'uuid';
import {
  imgBigCat,
  imgCar,
  imgCarryingBoxes,
  imgClothes_1,
  imgClothes_2,
  imgClothes_3,
  imgClothes_4,
  imgClothes_5,
  imgClothes_6,
  imgCooking,
  imgCostMaintenance,
  imgCycling,
  imgDribbling,
  imgFamily,
  imgFootElevated,
  imgFootUp,
  imgGolf,
  imgBlackHeart,
  imgHiking,
  imgMountains,
  imgPlane,
  imgProsthesisZebra,
  imgSoccer,
  imgTrain,
  imgVacuum,
  imgWaves,
  imgWeightlifting,
  imgLawnMowing,
  imgGardening,
} from '../../../assets';

const PriorityCircle = styled('div')(({ theme }) => ({
  height: 170,
  width: 170,
  borderRadius: '100%',
  border: '1px solid black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  margin: theme.spacing(2),
  position: 'relative',
  backgroundColor: theme.palette.primary.light,
}));

const Icon = styled('img', {
  shouldForwardProp: (p: string) => !['left', 'top', 'size'].includes(p),
})<{ left: number; top: number; size?: number }>(
  ({ theme, left, top, size }) => ({
    position: 'absolute',
    height: size ? size : 110,
    width: size ? size : 110,
    left: left,
    top: top,
  }),
);

export const prioritiesList = [
  {
    id: uuid(),
    content: (
      <PriorityCircle>
        <Typography align="center" sx={{ mt: 2, maxWidth: '110px' }}>
          <b>Household Tasks</b>
        </Typography>
        <Icon src={imgVacuum} alt="Vacuum icon" left={0} top={50} />
        <Icon
          src={imgCooking}
          alt="Cooking icon"
          left={65}
          top={53}
          size={100}
        />
      </PriorityCircle>
    ),
  },
  {
    id: uuid(),
    content: (
      <PriorityCircle>
        <Typography align="center" sx={{ mt: 2, maxWidth: '110px' }}>
          <b>Exercise</b>
        </Typography>
        <Icon
          src={imgCycling}
          alt="Bicycling icon"
          left={-10}
          top={30}
          size={120}
        />
        <Icon
          src={imgWeightlifting}
          alt="Weightlifting icon"
          left={65}
          top={37}
        />
      </PriorityCircle>
    ),
  },
  {
    id: uuid(),
    content: (
      <PriorityCircle>
        <Typography align="center" sx={{ mt: 2, maxWidth: '110px' }}>
          <b>Heavy Work</b>
        </Typography>
        <Icon
          src={imgBigCat}
          alt="Big Cat icon"
          left={-10}
          top={30}
          size={140}
        />
        <Icon
          src={imgCarryingBoxes}
          alt="Carrying Boxes icon"
          left={65}
          top={37}
        />
      </PriorityCircle>
    ),
  },
  {
    id: uuid(),
    content: (
      <PriorityCircle>
        <Typography align="center" sx={{ mt: 2, maxWidth: '110px' }}>
          <b>Cost & Maintenance</b>
        </Typography>
        <Icon
          src={imgCostMaintenance}
          alt="Cost Maintenance icon"
          left={-5}
          top={20}
          size={170}
        />
      </PriorityCircle>
    ),
  },
  {
    id: uuid(),
    content: (
      <PriorityCircle>
        <Typography align="center" sx={{ mt: 2, maxWidth: '110px' }}>
          <b>Travel</b>
        </Typography>
        <Icon src={imgCar} alt="Car icon" left={-10} top={10} />
        <Icon src={imgPlane} alt="Plane icon" left={65} top={37} />
        <Icon src={imgTrain} alt="Train icon" left={10} top={70} />
      </PriorityCircle>
    ),
  },
  {
    id: uuid(),
    content: (
      <PriorityCircle>
        <Typography align="center" sx={{ mt: 2, maxWidth: '110px' }}>
          <b>Clothes & Shoes</b>
        </Typography>
        <Icon
          src={imgClothes_1}
          alt="Clothes icon"
          left={10}
          top={50}
          size={60}
        />
        <Icon
          src={imgClothes_2}
          alt="Clothes icon"
          left={90}
          top={50}
          size={60}
        />
        <Icon
          src={imgClothes_3}
          alt="Clothes icon"
          left={20}
          top={90}
          size={60}
        />
        <Icon
          src={imgClothes_4}
          alt="Clothes icon"
          left={90}
          top={90}
          size={60}
        />
        <Icon
          src={imgClothes_5}
          alt="Clothes icon"
          left={50}
          top={50}
          size={60}
        />
        <Icon
          src={imgClothes_6}
          alt="Clothes icon"
          left={50}
          top={90}
          size={60}
        />
      </PriorityCircle>
    ),
  },
  {
    id: uuid(),
    content: (
      <PriorityCircle>
        <Typography align="center" sx={{ mt: 2, maxWidth: '110px' }}>
          <b>Family & Caretaking</b>
        </Typography>
        <Icon src={imgFamily} alt="Family icon" left={-5} top={20} size={170} />
      </PriorityCircle>
    ),
  },
  {
    id: uuid(),
    content: (
      <PriorityCircle>
        <Typography align="center" sx={{ mt: 2, maxWidth: '110px' }}>
          <b>Sound & Appearance</b>
        </Typography>
        <Icon
          src={imgProsthesisZebra}
          alt="Prosthesis icon"
          left={35}
          top={70}
          size={80}
        />
      </PriorityCircle>
    ),
  },
  {
    id: uuid(),
    content: (
      <PriorityCircle>
        <Typography align="center" sx={{ mt: 2, maxWidth: '110px' }}>
          <b>Sports</b>
        </Typography>
        <Icon src={imgSoccer} alt="Soccer icon" left={-10} top={10} />
        <Icon src={imgGolf} alt="Golf icon" left={65} top={37} />
        <Icon
          src={imgDribbling}
          alt="Dribbling icon"
          left={15}
          top={80}
          size={90}
        />
      </PriorityCircle>
    ),
  },
  {
    id: uuid(),
    content: (
      <PriorityCircle>
        <Typography align="center" sx={{ mt: 2, maxWidth: '110px' }}>
          <b>Comfort & Health</b>
        </Typography>
        <Icon
          src={imgFootElevated}
          alt="Foot Elevated icon"
          left={0}
          top={50}
        />
        <Icon
          src={imgFootUp}
          alt="Foot Up icon"
          left={65}
          top={53}
          size={100}
        />
      </PriorityCircle>
    ),
  },
  {
    id: uuid(),
    content: (
      <PriorityCircle>
        <Typography align="center" sx={{ mt: 2, maxWidth: '110px' }}>
          <b>Outdoors</b>
        </Typography>
        <Icon src={imgHiking} alt="Hiking icon" left={-10} top={15} />
        <Icon src={imgMountains} alt="Mountains icon" left={70} top={16} />
        <Icon src={imgWaves} alt="Waves icon" left={25} top={80} size={90} />
      </PriorityCircle>
    ),
  },
  {
    id: uuid(),
    content: (
      <PriorityCircle>
        <Typography align="center" sx={{ mt: 2, maxWidth: '110px' }}>
          <b>Intimacy & Relationships</b>
        </Typography>
        <Icon
          src={imgBlackHeart}
          alt="Heart icon"
          left={22}
          top={50}
          size={120}
        />
      </PriorityCircle>
    ),
  },
  {
    id: uuid(),
    content: (
      <PriorityCircle>
        <Typography align="center" sx={{ mt: 2, maxWidth: '110px' }}>
          <b>Yard Work</b>
        </Typography>
        <Icon
          src={imgLawnMowing}
          alt="Lawn Mower icon"
          left={0}
          top={30}
          size={90}
        />
        <Icon src={imgGardening} alt="Gardening icon" left={65} top={37} />
      </PriorityCircle>
    ),
  },
  {
    id: uuid(),
    content: (
      <PriorityCircle>
        <Typography align="center" sx={{ mt: 2, maxWidth: '110px' }}>
          <b>Other</b>
        </Typography>
        <Typography sx={{ fontSize: '8em', mt: '-30px' }}>?</Typography>
      </PriorityCircle>
    ),
  },
];
