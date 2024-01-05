import * as React from 'react'
import { Label } from "./"
import { Box } from "@mui/material";
import { theme } from "../../theme";
import { StoryFn, Meta } from "@storybook/react";

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const labelPalette = [...Object.keys(theme())].filter((color) => {
  return color !== 'background' && color !== 'glass' && color !== 'error'
})

export default {
  title: 'Demo/Label',
  component: Label,
  argTypes: {
    label: {
      control: 'text'
    },
    color: {
      options: ['primary', 'secondary', 'accent', 'neutral', 'error', 'warning', 'success', 'info'],
      control: 'select',
      description:
        'The color of the component. It supports both default MUI colors and custom colors defined in our Theme',
      table: {
        type: null,
      },
    },
    type: {
      options: ['none', 'filled', 'outlined', 'status'],
      control: 'select',
      description: "Label type based on design system defined labels. This will override `color` and `variant` props. The `none` option is equivalent to leaving this prop undefined.",
      table: {
        disable: true
      }
    },
    status: {
      options: ['error', 'success', 'warning', 'info'],
      control: 'select',
      description: "Sets the label color based on status type.",
      table: {
        type: null,
      },
      if: {arg: 'type', eq: 'status'}
    },
    sx: {
      table: {
        disable: true
      }
    },
    icon: {
      table: {
        disable: true
      }
    },
  },
} as Meta

export const Playground: StoryFn<typeof Label> = (args) => {
  return (
    <Box sx={{p: 4}}>
      <Label {...args}/>
    </Box>
  )
}

Playground.args = {
  label: 'Label',
  color: 'primary',
  variant: "filled",
  type: 'none',
  status: 'success',
  icon: undefined
}

Playground.argTypes = {
  type: {
    table: {
      disable: false,
    }
  }
}

export const Filled: StoryFn<typeof Label> = (args) => {
  return (
    <Box sx={{p: 4}}>
      <Label {...args}/>
    </Box>
  )
}

Filled.args = {
  label: "Label",
  type: 'filled'
}

Filled.argTypes = {
  color: {
    table: {
      disable: true
    }
  },
  variant: {
    table: {
      disable: true,
    }
  }
}

export const Outlined: StoryFn<typeof Label> = (args) => {
  return (
    <Box sx={{p: 4}}>
      <Label {...args}/>
    </Box>
  )
}

Outlined.args = {
  label: "Label",
  type: 'outlined'
}

Outlined.argTypes = {
  color: {
    table: {
      disable: true
    }
  },
  variant: {
    table: {
      disable: true,
    }
  }
}

export const IconLabel: StoryFn<typeof Label> = (args) => {
  return (
    <Box sx={{p: 4}}>
      <Label {...args}/>
    </Box>
  )
}

IconLabel.args = {
  label: "Label",
  type: 'outlined',
  icon: <FavoriteBorderOutlinedIcon />
}

IconLabel.argTypes = {
  color: {
    table: {
      disable: true
    }
  },
  variant: {
    table: {
      disable: true,
    }
  },
  type: {
    options: ['filled', 'outlined'],
    table: {
      disable: false,
    }
  }
}

export const Status: StoryFn<typeof Label> = (args) => {
  return (
    <Box sx={{p: 4}}>
      <Label {...args}/>
    </Box>
  )
}

Status.args = {
  label: "Label",
  type: 'status',
  status: 'success'
}

Status.argTypes = {
  color: {
    table: {
      disable: true
    }
  },
  variant: {
    table: {
      disable: true,
    }
  },
  status: {
    table: {
      disable: false
    }
  }
}