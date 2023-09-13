import { styled } from '@mui/material/styles';
import { CircularProgress, CircularProgressProps, Box } from '@mui/material';
import React from 'react';
import theme from '../../../theme/theme';
import TypographyComponent from '../Typography/index';
import { message } from '../../../utils/constants';

export interface StyledCircularProgressProps extends CircularProgressProps {
  value: number;
  children?: React.ReactNode;
}

const StyledCircularProgress = styled(CircularProgress)<StyledCircularProgressProps>(
  ({ value  }) => ({
    height:`${theme.spacing(20)}!important`,
    width:`${theme.spacing(20)}!important`,
}));

export default function CircularProgressBar({ value }: StyledCircularProgressProps) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <StyledCircularProgress
        data-testid="myProgress"
        variant="determinate"
        value={value}
        thickness={5} 
        sx={{
          '& .MuiCircularProgress-root': {
            height: theme.spacing(15),
            width: theme.spacing(15),
          },
          '& .MuiCircularProgress-svg': {
            transform: 'rotate(100deg)',
          },
          '& .MuiCircularProgress-circle': {
            strokeLinecap: 'butt',
            strokeWidth: 4.1,
            stroke: message.aquablue,
          },
          backgroundColor: `${theme.palette.background.elevation1}`,
          boxShadow: `inset 0 0 1px 10px ${message.complementary_color}`,
          borderRadius: '50%',
        }}

      >
      </StyledCircularProgress>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TypographyComponent
          variant="body2"
          color={message.aquablue}
        >{`${Math.round(value)}%`}
        </TypographyComponent>
      </Box>
    </Box>
  );
}
