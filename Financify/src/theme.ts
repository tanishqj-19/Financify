export const tokens = {
    grey: {
      100: "#E6E6E6", // Very Dark Gray
      200: "#CCCCCC", // Dark Gray
      300: "#B3B3B3", // Medium Dark Gray
      400: "#999999", // Medium Gray
      500: "#808080", // True Gray
      600: "#666666", // Medium Black
      700: "#4D4D4D", // Dark Black
      800: "#333333", // Very Dark Black
      900: "#1A1A1A"
    },
    primary: {
      // blue
      100: "#CCE5FF",
      200: "#99C2FF",
      300: "#66A0FF",
      400: "#3380FF",
      500: "#0066FF",
      600: "#0052CC",
      700: "#003D99",
      800: "#002966",
      900: "#001433"
    },
    secondary: {
      // yellow
      100: "#E6D4FF",
      200: "#CCAAFF",
      300: "#B380FF",
      400: "#9955FF",
      500: "#7F29FF",
      600: "#6624CC",
      700: "#4C1E99",
      800: "#331966",
      900: "#190F33"
    },
    tertiary: {
      100: "#E6D4FF",
      200: "#CCAAFF",
      300: "#B380FF",
      400: "#9955FF",
      500: "#7F29FF",
      600: "#6624CC",
      700: "#4C1E99",
      800: "#331966",
      900: "#190F33"
      
    },
    background: {
      light: "#E4E4E4", // Light white
      main: "#CCCCCC",  // Main white

    },
  };
  
  // mui theme settings
  export const themeSettings = {
    palette: {
      primary: {
        ...tokens.primary,
        main: tokens.primary[500],
        light: tokens.primary[400],
      },
      secondary: {
        ...tokens.secondary,
        main: tokens.secondary[500],
      },
      tertiary: {
        ...tokens.tertiary,
      },
      grey: {
        ...tokens.grey,
        main: tokens.grey[500],
      },
      background: {
        default: tokens.background.main,
        light: tokens.background.light,
      },
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: 800,
        color: tokens.grey[200],
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
        fontWeight: 600,
        color: tokens.grey[700],
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 12,
        fontWeight: 400,
        color: tokens.grey[800],
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 10,
        color: tokens.grey[700],
      },
    },
  };