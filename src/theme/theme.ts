import { createTheme as CreateMuiTheme } from "@mui/material";
import { ColorPartial } from "@mui/material/styles/createPalette";
import { colors } from "./colors";
import { typography } from "./typography";

export const theme = () =>
  CreateMuiTheme({
    palette: {
      mode: "light",
      neutral: {
        main: colors.neutral[800],
        light: colors.neutral[200],
        dark: colors.neutral[900],
        ripple: colors.neutral[900],
        contrastText: colors.common.white,
        ...colors.neutral,
      },
      primary: {
        main: colors.primary[700],
        light: colors.primary[200],
        dark: colors.primary[900],
        ripple: colors.primary[900],
        contrastText: colors.common.white,
        ...colors.primary,
      },
      secondary: {
        main: colors.secondary[900],
        light: colors.secondary[200],
        dark: colors.secondary[900],
        ripple: colors.secondary[900],
        contrastText: colors.neutral[900],
        ...colors.secondary,
      },
      accent: {
        main: colors.accent[700],
        light: colors.accent[200],
        dark: colors.accent[900],
        ripple: colors.accent[900],
        contrastText: colors.common.white,
        ...colors.accent,
      },
      glass: {
        main: colors.glass.dark,
        ...colors.glass,
      },
      error: {
        main: colors.error.main,
        light: colors.error.light,
        dark: colors.error.dark,
        ripple: colors.error.light,
        contrastText: colors.common.white
      },
      success: {
        main: colors.success.main,
        light: colors.success.light,
        dark: colors.success.dark,
        ripple: colors.success.light,
        contrastText: colors.common.white
      },
      warning: {
        main: colors.warning.main,
        light: colors.warning.light,
        dark: colors.warning.dark,
        ripple: colors.warning.dark,
        contrastText: colors.common.white
      },
      common: {
        ...colors.common
      }
    },
    typography,
  });

declare module "@mui/material/styles" {
  interface Palette {
    accent: Palette["primary"];
    neutral: Palette["primary"];
    glass: Palette["primary"];
  }

  interface PaletteOptions {
    accent?: PaletteOptions["primary"];
    neutral?: PaletteOptions["primary"];
    glass?: PaletteOptions["primary"];
  }

  interface TypographyVariants {
    body3: React.CSSProperties;
    body4: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
    body4?: React.CSSProperties;
  }
}

declare module "@mui/material" {
  interface ButtonPropsColorOverrides {
    accent: true;
    neutral: true;
    glass: true;
  }

  interface IconButtonPropsColorOverrides {
    accent: true;
    neutral: true;
    glass: true;
  }

  interface ChipPropsColorOverrides {
    accent: true;
    neutral: true;
    glass: true;
  }

  interface CheckboxPropsColorOverrides {
    accent: true;
    neutral: true;
    glass: true;
  }

  interface TabPropsColorOverrides {
    accent: true;
    neutral: true;
    glass: true;
  }
}

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor extends ColorPartial {
    ripple?: string;
  }

  interface SimplePaletteColorOptions {
    ripple?: string;
  }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
      body3: true;
      body4: true;
    }
  }