import * as React from 'react';

import {
  Box as MuiBox,
  Card as MuiCard,
  CardActions as MuiCardActions,
  CardContent as MuiCardContent,
  Button as MuiButton,
  Typography as MuiTypography,
  CardProps as MuiCardProps,
} from '@mui/material'

type CardBaseProps = Pick<MuiCardProps, "sx">;

export interface CardProps extends CardBaseProps {}

const bullet = (
  <MuiBox
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </MuiBox>
);

export const Card = () => {
  return (
    <MuiCard sx={{ width: 275 }}>
      <MuiCardContent>
        <MuiTypography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </MuiTypography>
        <MuiTypography variant="h5" component="div">
          be{bullet}nev{bullet}o{bullet}lent
        </MuiTypography>
        <MuiTypography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </MuiTypography>
        <MuiTypography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </MuiTypography>
      </MuiCardContent>
      <MuiCardActions>
        <MuiButton size="small">Learn More</MuiButton>
      </MuiCardActions>
    </MuiCard>
  );
}

export default Card