import React from 'react';
import { styled, Typography } from '@mui/material';

type TWrapProps = {
  top: number;
  left: number;
};

const Wrap = styled('div')(({ top, left }: TWrapProps) => ({
  height: 'min-content',
  width: 'min-content',
  position: 'absolute',
  top: `${top}%`,
  left: `${left}%`,
}));

const SignPost = styled('div')(({ theme }) => ({
  position: 'relative',
  left: 'calc(50% - 4px)',
  width: 8,
  height: 8,
  backgroundColor: '#a6a6a6',
}));

const GreenSign = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#0b845a',
  borderRadius: 4,
  padding: 4,
  position: 'relative',
}));

const SignType = styled(Typography)(({ theme }) => ({
  color: 'white',
  border: 'solid 1px white',
  padding: 4,
  borderRadius: 4,
  minWidth: 90,
  wordSpacing: 90,
}));

const Num = styled(Typography)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: '100%',
  height: 18,
  width: 18,
  position: 'absolute',
  top: 10,
  left: 10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& > span': {
    position: 'relative',
    left: 0.5,
    top: 0.5,
  },
}));

type TRoadSignProps = {
  text: string;
  top: number;
  left: number;
  num: number;
  isBottom?: boolean;
};

export default function RoadSign({
  text,
  top,
  left,
  num,
  isBottom,
}: TRoadSignProps) {
  return (
    <Wrap top={top} left={left}>
      {isBottom && <SignPost />}
      <GreenSign>
        <SignType align="center">{text}</SignType>
        <Num>
          <span>{num}</span>
        </Num>
      </GreenSign>
      {!isBottom && <SignPost />}
    </Wrap>
  );
}
