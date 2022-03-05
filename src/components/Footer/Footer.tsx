import { Container, styled, Typography } from '@mui/material';

const FooterWrap = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  padding: theme.spacing(6, 3),
}));

export default function Footer() {
  return (
    <FooterWrap>
      <Container>
        <Typography sx={{ fontSize: '1.2em', pb: 2 }} align="center">
          This project is funded by The Orthotics and Prosthetics Research
          Foundation
        </Typography>
        <Typography align="center">
          <b>Copyright © 2022</b>, The Regents of the University of Colorado.
          Some rights reserved. The creation of derivative works and the use of
          this publication for commercial uses are not permitted. If a
          commercial use or the development of a derivative work is of interest,
          please contact 303-724-6035 or{' '}
          <a
            href="mailto:emily.hager@cuanschutz.edu"
            target="_blank"
            rel="noreferrer"
          >
            emily.hager@cuanschutz.edu
          </a>{' '}
          to establish a license agreement. University of Colorado hereby
          disclaims all liability associated with the use or adoption of the
          information provided herein. User shall remain liable for any damages
          resulting from their reliance on this information. The content is
          solely the responsibility of the authors and does not necessarily
          represent the official views of medical centers. The material provided
          on this infographic is intended for informational purposes only and is
          not provided as medical advice. Any individual should consult with
          their own physician before determining if a prosthesis and what
          prosthesis design is right for them.{' '}
        </Typography>
      </Container>
    </FooterWrap>
  );
}
