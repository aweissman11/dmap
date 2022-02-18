import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material';

const Root = styled('div')(({ theme }) => ({
  flexGrow: 1,
}));
const MenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));
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
          <MenuButton
            edge="start"
            color="inherit"
            aria-label="menu"
            size="large"
          >
            <MenuIcon />
          </MenuButton>
          <Title variant="h6">
            <Link to="/">D-Map</Link>
          </Title>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Root>
  );
}
