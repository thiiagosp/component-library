import * as React from 'react'

import {
  Chip as MuiChip,
  ChipProps as MuiChipProps,
} from '@mui/material'

import { styled } from '@mui/material/styles';

type LabelBaseProps = Pick<MuiChipProps, "sx" | "label" | "variant" | "color" | "icon">;

export interface LabelProps extends LabelBaseProps {
  type?: string,
  status?: LabelBaseProps['color']
}


export const Label = ({type, status, color, ...rest}: LabelProps) => {

  let typeStyles: object
  let statusColor = type === 'status' ? status : undefined

  const StyledChip = styled(MuiChip)<LabelBaseProps>(({ theme }) => {
    switch (type) {
      case 'filled':
        typeStyles = {
          backgroundColor: theme.palette.secondary['50'],
          color: '#000',
          borderColor: 'transparent',
          '& .MuiSvgIcon-root': {
            marginRight: '8px',
            marginLeft: '0px',
            color: theme.palette.neutral.main
          }
        }
        break;
      case 'outlined':
        typeStyles = {
          borderColor: theme.palette.neutral.main,
          borderWidth: '1px',
          borderStyle: 'solid',
          backgroundColor: '#fff',
          color: theme.palette.neutral.main,
          '& .MuiSvgIcon-root': {
            marginRight: '8px',
            marginLeft: '0px',
            color: theme.palette.neutral.main
          }
        }
        break;
      case 'status': 
        typeStyles = {
          padding: '4px 8px',
          height: '28px',
          '& .MuiChip-label': {
            padding: '0px',
            fontSize: '16px'
          }
        }

        break;
      default:
        break;
    }

    return {
      borderRadius: '4px',
      fontSize: '24px',
      padding: '12px 32px',
      height: 'auto',
      lineHeight: '1.25',
      '& .MuiChip-label': {
        padding: '0px',
      },
      ...typeStyles
    }
  })

  return (
    <StyledChip color={statusColor || color} {...rest} />
  )
}