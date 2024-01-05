import * as React from 'react';

import {
  Button as MuiButton,
  IconButton as MuiIconButton,
  ButtonProps as MuiButtonProps,
  IconProps as MuiIconProps
} from '@mui/material';

import { styled } from '@mui/material/styles';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

type ButtonBaseProps = Pick<MuiButtonProps, "sx" | "variant" | "color" | "disabled">;

export interface ButtonProps extends ButtonBaseProps {
  text?: string,
  type?: string,
  iconButtonVariant?: "contained" | "outlined" | "empty"
}

export const Button = ({text, type, iconButtonVariant, ...rest}: ButtonProps) => {
  let { sx, color, disabled } = rest

  let typeStyles: object

  const StyledButton = styled(MuiButton)<ButtonBaseProps>(({ theme }) => {
    switch (type) {
      case 'primaryOrange':
        typeStyles = {
          backgroundColor: disabled ? 'transparent' : theme.palette.accent.main,
          color: '#fff',
          '&:hover': {
            backgroundColor: theme.palette.accent['800'],
          },
          '&:focus': {
            backgroundColor: theme.palette.accent['900'],
          }
        }
        break;
    
      case 'primaryBlue':
        typeStyles = {
          backgroundColor: disabled ? 'transparent' : theme.palette.primary.main,
          color: '#fff',
          '&:hover': {
            backgroundColor: theme.palette.neutral['800'],
          },
          '&:focus': {
            backgroundColor: theme.palette.neutral['900'],
          }
        }
        
        break;
    
      case 'secondaryBlue':
        typeStyles = {
          backgroundColor: 'transparent',
          color: theme.palette.primary.main,
          border: '1px solid',
          borderColor: disabled ? 'rgba(0, 0, 0, 0.26)' : theme.palette.primary.main,
          '&:hover': {
            borderColor: theme.palette.neutral['800'],
            color: theme.palette.neutral['800'],
            backgroundColor: 'transparent',
          },
          '&:focus': {
            borderColor: theme.palette.neutral['900'],
            color: theme.palette.neutral['900'],
            backgroundColor: 'transparent',
          },
        }
        
        break;
    
      case 'secondaryWhite':
        typeStyles = {
          backgroundColor: 'transparent',
          color: "#fff",
          border: '1px solid',
          borderColor: disabled ? 'rgba(0, 0, 0, 0.26)' : '#fff',
          '&:hover': {
            color: '#fff',
            borderColor: 'transparent',
            backgroundColor: 'rgba(72, 113, 137, 0.4)',
            blur: '8px',
          },
          '&:focus': {
            color: '#fff',
            borderColor: 'transparent',
            backgroundColor: theme.palette.glass.dark,
            blur: '8px',
          },
          '&:active': {
            borderColor: 'transparent',
            backgroundColor: 'transparent',
            color: theme.palette.neutral['900'],
            '& .MuiTouchRipple-child': {
              backgroundColor: theme.palette.neutral.ripple,
            }
          }
        }
        
        break;
    
      case 'neutral':
        typeStyles = {
          backgroundColor: 'transparent',
          color: theme.palette.primary.main,
          '&:hover': {
            color: theme.palette.neutral['800'],
            backgroundColor: 'transparent',
          },
          '&:focus': {
            color: theme.palette.neutral['900'],
            backgroundColor: 'transparent',
          }
        }
        
        break;
    
      default:
        break;
    }

    return {
      borderRadius: 100,
      paddingBlock: 18,
      paddingInline: 42,
      fontSize: 16,
      lineHeight: 1.25,
      ...typeStyles,
    }
  })

  const StyledIconButton = styled(MuiIconButton)<ButtonBaseProps>(({ theme }) => {
    switch (iconButtonVariant) {
      case 'contained': 
        typeStyles = {
          backgroundColor: disabled ? 'transparent' : theme.palette.primary.main,
          color: '#fff',
          '&:hover': {
            backgroundColor: theme.palette.neutral['800'],
          },
          '&:focus': {
            backgroundColor: theme.palette.neutral['900'],
          }
        }
        break;

      case 'outlined': 

        break;

      case 'empty': 

        break;

      default: 
        break;
    }
    return {
      ...typeStyles
    }
  })

  return !(type?.includes('icon')) ? (
    <StyledButton {...rest}>
      {text}
    </StyledButton>
  ) : (
    <StyledIconButton
      color={color}
    >
      {type.includes('arrow') ? <ArrowForwardIcon /> : <SettingsOutlinedIcon />}
    </StyledIconButton>
  )
}