import { extendTheme, theme as base } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  colors: {
    whiteC: {
      100: "#FFFFFF",
      200: "#FBFBFB",
      300: "#FAFAFA",
      400: "#EBEBEB",
      500: "#F8FBFF",
    },
    blackC: {
      100: "#1A1A1A",
      200: "#181818",
      300: "#383838",
      400: "#111B29",
      500: "#191919",
      600: "#BDBDBD",
      700: "#212B36",
      800: "#171717",
      900: "#E5E5E5",
      1000: "#6E6E6E",
    },
    grayC: {
      100: "#333",
      200: "#4F4F4F",
      300: "#828282",
      400: "#E3EDFF",
      500: "#E0E0E0",
      600: "#F2F2F2",
      700: "#919EAB",
      800: "#C4CDD5",
      900: "#EBEFF6",
      1000: "#C4C4C4",
      1100: "#F5F9FF",
      1200: "#D6D6D6",
      1300: "#DFE3E8",
      1400: "#F5F5F5",
      1500: "#CFCFCF",
      1600: "#D2CECE",
      1700: "#212936",
      1800: "#404767",
      1900: "#303947",
      2000: "#2B354C",
      2100: "#D2CFCE",
      2200: "#353F4F",
      2300: "#919191",
      2400: "#59606C",
      2500: "#4F4F4F",
      2600: '#AFAFAF',
      2700: '#888888',
      2800: '#808080',
      2900: '#DFDFDF',
      3000: '#5B6D7D',
      3100: '#64778F',
      3200: '#f7f5f6',
      3300: '#d8dfe7',
    },
    blueC: {
      100: "#2F80ED",
      200: "#144E9D",
      300: "#8591C2",
      400: "#2C79E7",
      500: "#121826",
      600: "#0B132B",
      700: '#d2e8ff',
      800: '#D2E1F7',
      900: '#212936'
    },
    midnightC: {
      100: "#262B40",
    },

    orangeC: {
      100: "#F2C94C",
    },
    greenC: {
      100: "#04C473",
      200: "#7FD926",
    },
  },

  gradients: {
    blueG: "linear-gradient(180deg, #2969BF 0%, #144E9D 100%)",
  },

  // fontSizes: {
  //   xs: "12px",
  //   sm: "14px",
  //   md: "16px",
  //   lg: "18px",
  //   xl: "20px",
  //   "2xl": "24px",
  //   "3xl": "28px",
  //   "4xl": "ff36px",
  //   "5xl": "48px",
  //   "6xl": "64px",
  // },

  breakpoints: {
    base: "0px",
    xs: "350px",
    "1xs": "410px",
    sm: "480px",
    md: "768px",
    lg: "992px",
    xl: "1150px",
    ".5xl": "1250px",
    "2xl": "1536px",
  },

  styles: {
    global: (props) => ({
      body: {
        fontFamily: '"Inter", sans-serif',
        bg: mode("whiteC.200", "blueC.500")(props),
        color: mode("blackC.100", "whiteC.200")(props),
      },

      ".dark-theme body": {
        "--bg-color": "var(--chakra-colors-blueC-500)",
        color: "var(--chakra-colors-whiteC-100)",
      },
      color: "blackC.100",
      "::-webkit-scrollbar": {
        width: "8px",
        height: "8px",
      },

      "::-webkit-scrollbar-thumb": {
        background: "#b8b8b8",
        borderRadius: "8px",
      },
    }),
  },

  fonts: {
    mainFont: `'Inter', ${base.fonts?.heading}, sans-serif`,
    secondFont: `'SF Pro Display', ${base.fonts?.heading}, sans-serif`,
  },

  components: {
    Checkbox: {
      variants: {
        black: (props) => ({
          control: {
            _checked: {
              bg: "black",
              borderColor: "black",
            },
            _focus: {
              _checked: {
                bg: "black",
                borderColor: "black",
              },
            },
          },
        }),
        white: (props) => ({
          control: {
            _checked: {
              bg: "white",
              borderColor: "white",
            },
            _focus: {
              _checked: {
                bg: "white",
                borderColor: "white",
              },
            },
          },
        }),
      },
    },
  },
});
