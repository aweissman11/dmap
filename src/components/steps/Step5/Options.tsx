import Box from '@mui/material/Box';
import { styled, Typography, Paper } from '@mui/material';
import Masonry from '@mui/lab/Masonry';

const labels = [
  { text: 'Easy to use?', height: 'auto' },
  { text: 'Durable?', height: 'auto' },
  { text: 'Going to require help for me to use?', height: 'auto' },
  { text: 'Heavy?', height: 'auto' },
  { text: 'Going to fit in my pants and shoes?', height: 'auto' },
  { text: 'Affordable?', height: 'auto' },
  { text: 'Easy to move with?', height: 'auto' },
  { text: 'Going to affect my endurance?', height: 'auto' },
  { text: 'Comfortable?', height: 'auto' },
  { text: 'Going to affect my balance?', height: 'auto' },
  { text: 'Going to make sounds?', height: 'auto' },
  {
    text: 'Able to be used with sand, water, hills, dirt or grass?',
    height: 'auto',
  },
  { text: 'Easy to clean?', height: 'auto' },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicMasonry() {
  return (
    <Box sx={{ maxWidth: 800, width: '100%' }}>
      <Masonry columns={4} spacing={2}>
        {labels.map((label, index) => (
          <Item key={index} sx={{ height: label.height }}>
            <Typography>{label.text}</Typography>
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
