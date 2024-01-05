import * as React from 'react';

import { Box, Paper } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";
import { Button } from "./";
import { Settings as SettingsIcon } from "@mui/icons-material";

export default {
  title: "Demo/Button",
  component: Button,
  argTypes: {
    color: {
      options: ["primary", "secondary", "accent", "neutral"],
      control: "select",
      description: "The color of the button.",
      table: {
        type: null,
        disable: true,
      },
    },
    sx: {
      table: {
        disable: true,
      },
    },
    variant: {
      table: {
        disable: true,
      },
    },
    type: {
      options: [
        "none",
        "primaryOrange",
        "primaryBlue",
        "secondaryBlue",
        "secondaryWhite",
        "neutral",
        "icon",
        "iconArrow",
      ],
      control: "select",
      description:
        "Button type based on design system defined buttons. This will override `color` and `variant` props. The `none` option is equivalent to leaving this prop undefined.",
      table: {
        disable: true,
      },
    },
    iconButtonVariant: {
      options: ["contained", "outlined", "empty"],
      control: "select",
      if: { arg: "type", eq: "icon" },
    },
  },
} as Meta;

export const Playground: StoryFn<typeof Button> = (args) => (
  <Box sx={{ maxWidth: "300px" }}>
    <Paper
      sx={{
        p: 2,
        display: "flex",
        justifyContent: "center",
        backgroundColor:
          args.type === "secondaryWhite" ? "rgba(61, 72, 88, 1)" : "#fff",
      }}
    >
      <Button {...args} />
    </Paper>
  </Box>
);

Playground.args = {
  text: "Default Text",
  disabled: false,
  iconButtonVariant: "contained",
  color: "primary",
  variant: "contained",
  type: "none",
};

Playground.argTypes = {
  type: {
    table: {
      disable: false,
    },
  },
  color: {
    table: {
      disable: false,
    },
  },
  variant: {
    table: {
      disable: false,
    },
  },
};

export const PrimaryOrange: StoryFn<typeof Button> = (args) => (
  <Box sx={{ maxWidth: "300px" }}>
    <Button {...args} />
  </Box>
);

PrimaryOrange.args = {
  text: "Default Text",
  type: "primaryOrange",
  disabled: false,
};

export const PrimaryBlue: StoryFn<typeof Button> = (args) => (
  <Box sx={{ maxWidth: "300px" }}>
    <Button {...args} />
  </Box>
);

PrimaryBlue.args = {
  text: "Default Text",
  type: "primaryBlue",
  disabled: false,
};

export const SecondaryBlue: StoryFn<typeof Button> = (args) => (
  <Box sx={{ maxWidth: "300px" }}>
    <Button {...args} />
  </Box>
);

SecondaryBlue.args = {
  text: "Default Text",
  type: "secondaryBlue",
  disabled: false,
};

export const SecondaryWhite: StoryFn<typeof Button> = (args) => (
  <Box sx={{ maxWidth: "300px" }}>
    <Paper
      sx={{
        p: 2,
        display: "flex",
        justifyContent: "center",
        backgroundColor:
          args.type === "secondaryWhite" ? "rgba(61, 72, 88, 1)" : "#fff",
      }}
    >
      <Button {...args} />
    </Paper>
  </Box>
);

SecondaryWhite.args = {
  text: "Default Text",
  type: "secondaryWhite",
  disabled: false,
};

export const Neutral: StoryFn<typeof Button> = (args) => (
  <Box sx={{ maxWidth: "300px" }}>
    <Button {...args} />
  </Box>
);

Neutral.args = {
  text: "Default Text",
  type: "neutral",
  disabled: false,
};

// export const IconButton:  = {
//   render: () => {
//     return (
//       <Button {...props} />
//     );
//   },
// };
