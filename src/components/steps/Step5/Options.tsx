import Box from '@mui/material/Box';
import {
  styled,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import Masonry from '@mui/lab/Masonry';

const labels = [
  'Easy to use?',
  'Durable?',
  'Going to require help for me to use?',
  'Heavy?',
  'Going to fit in my pants and shoes?',
  'Affordable?',
  'Easy to move with?',
  'Going to affect my endurance?',
  'Comfortable?',
  'Going to affect my balance?',
  'Going to make sounds?',
  'Able to be used with sand, water, hills, dirt or grass?',
  'Easy to clean?',
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicMasonry() {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ maxWidth: 800, width: '100%' }}>
      <Masonry columns={smScreen ? 2 : 4} spacing={2}>
        {labels.map((label, index) => (
          <Item key={index} sx={{ height: 'auto' }}>
            <Typography>{label}</Typography>
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
