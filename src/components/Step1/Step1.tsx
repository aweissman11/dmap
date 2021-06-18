import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from '@material-ui/core';

import ProstheticLegs from '../../assets/prosthetic_legs.png';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    image: {
      width: '100%',
      height: 'auto',
    },
  }),
);

const LEG_COMPONENTS = [
  {
    name: 'Suspension',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'Socket',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  },
  {
    name: 'Interface',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Vel eros donec ac odio. Tempus imperdiet nulla malesuada pellentesque elit eget. Sapien pellentesque habitant morbi tristique. Egestas purus viverra accumsan in. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Sed sed risus pretium quam vulputate dignissim suspendisse in est. In nisl nisi scelerisque eu ultrices vitae. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna.',
  },
  {
    name: 'Prosthetic Knee',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla malesuada pellentesque elit eget. Vestibulum sed arcu non odio. Vel risus commodo viverra maecenas accumsan. Elementum nisi quis eleifend quam adipiscing vitae. Enim nec dui nunc mattis. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Mauris sit amet massa vitae tortor condimentum lacinia quis. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Tellus elementum sagittis vitae et leo duis ut. Mi proin sed libero enim sed. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Id donec ultrices tincidunt arcu non sodales. Dapibus ultrices in iaculis nunc sed augue lacus.',
  },
  {
    name: 'Prosthetic foot/ankle',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi tempus imperdiet nulla malesuada pellentesque. Imperdiet sed euismod nisi porta lorem mollis aliquam. Urna duis convallis convallis tellus id. Pretium fusce id velit ut tortor. Placerat vestibulum lectus mauris ultrices eros in. Sed felis eget velit aliquet sagittis id. Sit amet porttitor eget dolor. Tristique senectus et netus et malesuada fames ac turpis egestas. Et odio pellentesque diam volutpat. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit.',
  },
  {
    name: 'Prosthetic cover',
    description:
      'Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Quis risus sed vulputate odio ut enim blandit volutpat maecenas. Nibh tellus molestie nunc non blandit massa enim nec. Sed velit dignissim sodales ut. Sed pulvinar proin gravida hendrerit lectus. Magna sit amet purus gravida quis blandit turpis cursus in. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Adipiscing commodo elit at imperdiet dui. Et odio pellentesque diam volutpat commodo sed. Sed adipiscing diam donec adipiscing tristique. Faucibus in ornare quam viverra orci sagittis eu.',
  },
  {
    name: 'Accessories',
    description:
      'Adipiscing at in tellus integer feugiat scelerisque varius morbi enim. Leo a diam sollicitudin tempor id eu. Senectus et netus et malesuada fames. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Purus viverra accumsan in nisl nisi scelerisque. Congue eu consequat ac felis donec. Vitae congue eu consequat ac felis donec et odio. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Orci a scelerisque purus semper eget duis at tellus. Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus. Eu ultrices vitae auctor eu augue ut lectus.',
  },
];

export default function Step1() {
  const classes = useStyles();

  return (
    <Grid container justify="space-between">
      <Grid item xs={12} md={5} container alignItems="center">
        <img
          src={ProstheticLegs}
          alt="Prosthetic leg diagram"
          className={classes.image}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {LEG_COMPONENTS.map(cmp => (
          <Accordion key={cmp.name}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{cmp.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{cmp.description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
    </Grid>
  );
}
