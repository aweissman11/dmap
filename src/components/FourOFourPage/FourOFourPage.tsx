import { Home } from '@mui/icons-material';
import { Box, Typography, styled, Button, Grid } from '@mui/material';
import { useHistory } from 'react-router';
import { imgSignYieldTriangle } from '../../assets';

const YieldSign = styled('div')(({ theme }) => ({
  backgroundImage: `url(${imgSignYieldTriangle})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  height: '95vw',
  width: '95vw',
  maxWidth: '100%',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const BigText = styled(Typography)(({ theme }) => ({
  fontSize: '6em',
  [theme.breakpoints.down('sm')]: {
    fontSize: '4em',
  },
}));

export default function FourOFourPage() {
  const history = useHistory();

  return (
    <Box sx={{ minHeight: '60vh', mb: 6, mt: 6 }}>
      <BigText align="center" sx={{ mb: '-60px' }}>
        Page Not Found
      </BigText>
      <YieldSign>
        <BigText>
          <b>404</b>
        </BigText>
      </YieldSign>

      <Grid container justifyContent="center">
        <Button
          variant="contained"
          onClick={() => history.push('/')}
          sx={{ m: 'auto' }}
          endIcon={<Home sx={{ fontSize: '6em !important', ml: 2 }} />}
          data-testid="home-btn"
        >
          <BigText>Go Home</BigText>
        </Button>
      </Grid>
    </Box>
  );
}
