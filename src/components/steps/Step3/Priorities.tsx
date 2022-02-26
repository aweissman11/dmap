import { Grid, Paper, styled, Typography } from '@mui/material';
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
  imgQuestionMark,
} from '../../../assets';

const PriorityWrapper = styled(Paper)(({ theme }) => ({
  width: 'calc(100% - 32px)',
  margin: theme.spacing(1, 2),
  pointerEvents: 'none',
  backgroundColor: 'white',
}));

const PriorityType = styled(Typography)(({ theme }) => ({
  fontSize: '1.5em',
  marginLeft: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    fontSize: '1.2em',
  },
}));

const Icon = styled('img', {
  shouldForwardProp: (p: string) => !['size'].includes(p),
})<{ size?: number }>(({ theme, size }) => ({
  height: size ? size : 90,
  width: size ? size : 90,
  [theme.breakpoints.down('md')]: {
    height: 50,
    width: 50,
  },
}));

export const prioritiesList = [
  {
    id: uuid(),
    name: 'Household Tasks',
    content: (
      <PriorityWrapper>
        <Grid container justifyContent="space-between">
          <Grid
            item
            xs={6}
            container
            justifyContent="flex-start"
            alignItems="center"
          >
            <PriorityType>
              <b>Household Tasks</b>
            </PriorityType>
          </Grid>
          <Grid item xs={6} container justifyContent="space-evenly">
            <Icon src={imgVacuum} alt="Vacuum icon" />
            <Icon src={imgCooking} alt="Cooking icon" />
          </Grid>
        </Grid>
      </PriorityWrapper>
    ),
  },
  {
    id: uuid(),
    name: 'Exercise',
    content: (
      <PriorityWrapper>
        <Grid container justifyContent="space-between">
          <Grid
            item
            xs={6}
            container
            justifyContent="flex-start"
            alignItems="center"
          >
            <PriorityType>
              <b>Exercise</b>
            </PriorityType>
          </Grid>
          <Grid item xs={6} container justifyContent="space-evenly">
            <Icon src={imgCycling} alt="Bicycling icon" />
            <Icon src={imgWeightlifting} alt="Weightlifting icon" />
          </Grid>
        </Grid>
      </PriorityWrapper>
    ),
  },
  {
    id: uuid(),
    name: 'Heavy Work',
    content: (
      <PriorityWrapper>
        <Grid container justifyContent="space-between">
          <Grid
            item
            xs={6}
            container
            justifyContent="flex-start"
            alignItems="center"
          >
            <PriorityType>
              <b>Heavy Work</b>
            </PriorityType>
          </Grid>
          <Grid item xs={6} container justifyContent="space-evenly">
            <Icon src={imgBigCat} alt="Big Cat icon" />
            <Icon src={imgCarryingBoxes} alt="Carrying Boxes icon" />
          </Grid>
        </Grid>
      </PriorityWrapper>
    ),
  },
  {
    id: uuid(),
    name: 'Cost & Maintenance',
    content: (
      <PriorityWrapper>
        <Grid container justifyContent="space-between">
          <Grid
            item
            xs={6}
            container
            justifyContent="flex-start"
            alignItems="center"
          >
            <PriorityType>
              <b>Cost & Maintenance</b>
            </PriorityType>
          </Grid>
          <Grid item xs={6} container justifyContent="space-evenly">
            <Icon src={imgCostMaintenance} alt="Cost Maintenance icon" />
          </Grid>
        </Grid>
      </PriorityWrapper>
    ),
  },
  {
    id: uuid(),
    name: 'Travel',
    content: (
      <PriorityWrapper>
        <Grid container justifyContent="space-between">
          <Grid
            item
            xs={6}
            container
            justifyContent="flex-start"
            alignItems="center"
          >
            <PriorityType>
              <b>Travel</b>
            </PriorityType>
          </Grid>
          <Grid item xs={6} container justifyContent="space-evenly">
            <Icon src={imgCar} alt="Car icon" />
            <Icon src={imgPlane} alt="Plane icon" />
            <Icon src={imgTrain} alt="Train icon" />
          </Grid>
        </Grid>
      </PriorityWrapper>
    ),
  },
  {
    id: uuid(),
    name: 'Clothes & Shoes',
    content: (
      <PriorityWrapper>
        <Grid container justifyContent="space-between">
          <Grid
            item
            xs={6}
            container
            justifyContent="flex-start"
            alignItems="center"
          >
            <PriorityType>
              <b>Clothes & Shoes</b>
            </PriorityType>
          </Grid>
          <Grid item xs={6} container justifyContent="center">
            <Grid item xs={12} container justifyContent="center">
              <Icon src={imgClothes_1} alt="Clothes icon" size={50} />
              <Icon src={imgClothes_2} alt="Clothes icon" size={50} />
              <Icon src={imgClothes_3} alt="Clothes icon" size={50} />
            </Grid>
            <Grid item xs={12} container justifyContent="center">
              <Icon src={imgClothes_4} alt="Clothes icon" size={50} />
              <Icon src={imgClothes_5} alt="Clothes icon" size={50} />
              <Icon src={imgClothes_6} alt="Clothes icon" size={50} />
            </Grid>
          </Grid>
        </Grid>
      </PriorityWrapper>
    ),
  },
  {
    id: uuid(),
    name: 'Family & Caretaking',
    content: (
      <PriorityWrapper>
        <Grid container justifyContent="space-between">
          <Grid
            item
            xs={6}
            container
            justifyContent="flex-start"
            alignItems="center"
          >
            <PriorityType>
              <b>Family & Caretaking</b>
            </PriorityType>
          </Grid>
          <Grid item xs={6} container justifyContent="space-evenly">
            <Icon src={imgFamily} alt="Family icon" />
          </Grid>
        </Grid>
      </PriorityWrapper>
    ),
  },
  {
    id: uuid(),
    name: 'Sound & Appearance',
    content: (
      <PriorityWrapper>
        <Grid container justifyContent="space-between">
          <Grid
            item
            xs={6}
            container
            justifyContent="flex-start"
            alignItems="center"
          >
            <PriorityType>
              <b>Sound & Appearance</b>
            </PriorityType>
          </Grid>
          <Grid item xs={6} container justifyContent="space-evenly">
            <Icon src={imgProsthesisZebra} alt="Prosthesis icon" />
          </Grid>
        </Grid>
      </PriorityWrapper>
    ),
  },
  {
    id: uuid(),
    name: 'Sports',
    content: (
      <PriorityWrapper>
        <Grid container justifyContent="space-between">
          <Grid
            item
            xs={6}
            container
            justifyContent="flex-start"
            alignItems="center"
          >
            <PriorityType>
              <b>Sports</b>
            </PriorityType>
          </Grid>
          <Grid item xs={6} container justifyContent="space-evenly">
            <Icon src={imgSoccer} alt="Soccer icon" />
            <Icon src={imgGolf} alt="Golf icon" />
            <Icon src={imgDribbling} alt="Dribbling icon" />
          </Grid>
        </Grid>
      </PriorityWrapper>
    ),
  },
  {
    id: uuid(),
    name: 'Comfort & Health',
    content: (
      <PriorityWrapper>
        <Grid container justifyContent="space-between">
          <Grid
            item
            xs={6}
            container
            justifyContent="flex-start"
            alignItems="center"
          >
            <PriorityType>
              <b>Comfort & Health</b>
            </PriorityType>
          </Grid>
          <Grid item xs={6} container justifyContent="space-evenly">
            <Icon src={imgFootElevated} alt="Foot Elevated icon" />
            <Icon src={imgFootUp} alt="Foot Up icon" />
          </Grid>
        </Grid>
      </PriorityWrapper>
    ),
  },
  {
    id: uuid(),
    name: 'Outdoors',
    content: (
      <PriorityWrapper>
        <Grid container justifyContent="space-between">
          <Grid
            item
            xs={6}
            container
            justifyContent="flex-start"
            alignItems="center"
          >
            <PriorityType>
              <b>Outdoors</b>
            </PriorityType>
          </Grid>
          <Grid item xs={6} container justifyContent="space-evenly">
            <Icon src={imgHiking} alt="Hiking icon" />
            <Icon src={imgMountains} alt="Mountains icon" />
            <Icon src={imgWaves} alt="Waves icon" />
          </Grid>
        </Grid>
      </PriorityWrapper>
    ),
  },
  {
    id: uuid(),
    name: 'Intimacy & Relationships',
    content: (
      <PriorityWrapper>
        <Grid container justifyContent="space-between">
          <Grid
            item
            xs={6}
            container
            justifyContent="flex-start"
            alignItems="center"
          >
            <PriorityType>
              <b>Intimacy & Relationships</b>
            </PriorityType>
          </Grid>
          <Grid item xs={6} container justifyContent="space-evenly">
            <Icon src={imgBlackHeart} alt="Heart icon" />
          </Grid>
        </Grid>
      </PriorityWrapper>
    ),
  },
  {
    id: uuid(),
    name: 'Yard Work',
    content: (
      <PriorityWrapper>
        <Grid container justifyContent="space-between">
          <Grid
            item
            xs={6}
            container
            justifyContent="flex-start"
            alignItems="center"
          >
            <PriorityType>
              <b>Yard Work</b>
            </PriorityType>
          </Grid>
          <Grid item xs={6} container justifyContent="space-evenly">
            <Icon src={imgLawnMowing} alt="Lawn Mower icon" />
            <Icon src={imgGardening} alt="Gardening icon" />
          </Grid>
        </Grid>
      </PriorityWrapper>
    ),
  },
  {
    id: uuid(),
    name: 'Other',
    content: (
      <PriorityWrapper>
        <Grid container justifyContent="space-between">
          <Grid
            item
            xs={6}
            container
            justifyContent="flex-start"
            alignItems="center"
          >
            <PriorityType>
              <b>Other</b>
            </PriorityType>
          </Grid>
          <Grid item xs={6} container justifyContent="space-evenly">
            {/* <Typography sx={{ fontSize: '4em' }}>?</Typography> */}
            <Icon src={imgQuestionMark} alt="Question Mark" />
          </Grid>
        </Grid>
      </PriorityWrapper>
    ),
  },
];
