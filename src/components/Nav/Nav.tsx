import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { IconButton, styled } from '@mui/material';
import { PictureAsPdf } from '@mui/icons-material';

const Root = styled('div')(({ theme }) => ({
  flexGrow: 1,
}));

// const MenuButton = styled(IconButton)(({ theme }) => ({
//   marginRight: theme.spacing(2),
// }));

const Title = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  '& > a': {
    color: theme.palette.common.white,
    textDecoration: 'none',
  },
}));

export default function ButtonAppBar() {
  return (
    <Root>
      <AppBar position="static">
        <Toolbar>
          {/* <MenuButton
            edge="start"
            color="inherit"
            aria-label="menu"
            size="large"
          >
            <MenuIcon />
          </MenuButton> */}
          <Title variant="h6">
            <Link to="/">D-Map</Link>
          </Title>
          <a
            href="https://dmap-files.s3.us-west-2.amazonaws.com/2022_09_28_DMAP+Prototype+Copyright.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton sx={{ color: 'white' }} title="PDF Version">
              <PictureAsPdf />
            </IconButton>
          </a>
        </Toolbar>
      </AppBar>
    </Root>
  );
}
