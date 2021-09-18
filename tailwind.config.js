const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.js",
    "./src/components/**/*.js",
    "./src/layouts/**/*.js",
    "./src/utils/**/*.js",
  ],
  darkMode: "class", // or 'media' or 'class',
  important: true,
  theme: {
    extend: {
      zIndex: {
        "-1": "-1",
        "-10": "-10",
      },
      fontFamily: {
        sans: ["Merriweather", ...defaultTheme.fontFamily.sans],
        mono: ["Fira Code", ...defaultTheme.fontFamily.mono],
      },
      outline: {
        primary: ['2px dotted var(--color-outline-primary)', '2px'],
      },
      padding: {
        "1/2": "50%",
        "1/4": "25%",
        full: "100%",
      },
      animation: {
        "blob-spin": "blobbing 25s linear infinite",
      },
      keyframes: {
        blobbing: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
      margin: {
        "1/2": "50%",
        "-1/2": "-50%",
        "-3/4": "-75%",
        "3/4": "75%",
        "1/4": "25%",
        "-1/4": "-25%",
        "1/5": "20%",
        "-1/5": "-20%",
        full: "100%",
      },
      colors: {
        primary: colors.lime,
        "primary-light": "#fefffc",
        "primary-grayish":"#fcfcf7",
        gray: colors.trueGray,
        violet: colors.violet,
        pink: colors.pink,
        green: colors.teal,
        orange: colors.orange,
        turq: {
          light: "#00F5C4",
          DEFAULT: "#003334",
          dark: "#009eeb",
        },
        code: {
          green: "#4ec9b0",
          yellow: "#ffe484",
          purple: "#569CD6",
          red: "#ff8383",
          blue: "#569CD6",
          white: "#fff",
        },
        avatarback: {
          blue: {
            200: colors.blue[100],
            300: colors.blue[200],
          },
          purple: {
            300: colors.purple[300],
          },
        },
      },
      letterSpacing: {
        title: "0.2em",
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            a: {
              color: theme("colors.primary.500"),
              "&:hover": {
                color: theme("colors.primary.600"),
              },
              code: { color: theme("colors.primary.400") },
            },
            h1: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.900"),
            },
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.900"),
            },
            h3: {
              fontWeight: "600",
              color: theme("colors.gray.900"),
            },
            "h4,h5,h6": {
              color: theme("colors.gray.900"),
            },
            code: {
              color: theme("colors.pink.500"),
              backgroundColor: theme("colors.gray.100"),
              paddingLeft: "4px",
              paddingRight: "4px",
              paddingTop: "2px",
              paddingBottom: "2px",
              borderRadius: "0.25rem",
            },
            "code:before": {
              content: "none",
            },
            "code:after": {
              content: "none",
            },
            details: {
              backgroundColor: theme("colors.gray.100"),
              paddingLeft: "4px",
              paddingRight: "4px",
              paddingTop: "2px",
              paddingBottom: "2px",
              borderRadius: "0.25rem",
            },
            hr: { borderColor: theme("colors.gray.200") },
            "ol li:before": {
              fontWeight: "600",
              color: theme("colors.gray.500"),
            },
            "ul li:before": {
              backgroundColor: theme("colors.gray.500"),
            },
            strong: { color: theme("colors.gray.600") },
            blockquote: {
              color: theme("colors.gray.900"),
              borderLeftColor: theme("colors.gray.200"),
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.primary.500"),
              "&:hover": {
                color: theme("colors.primary.400"),
              },
              code: { color: theme("colors.primary.400") },
            },
            h1: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.100"),
            },
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.100"),
            },
            h3: {
              fontWeight: "600",
              color: theme("colors.gray.100"),
            },
            "h4,h5,h6": {
              color: theme("colors.gray.100"),
            },
            code: {
              backgroundColor: theme("colors.gray.800"),
            },
            details: {
              backgroundColor: theme("colors.gray.800"),
            },
            hr: { borderColor: theme("colors.gray.700") },
            "ol li:before": {
              fontWeight: "600",
              color: theme("colors.gray.400"),
            },
            "ul li:before": {
              backgroundColor: theme("colors.gray.400"),
            },
            strong: { color: theme("colors.gray.100") },
            thead: {
              color: theme("colors.gray.100"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700"),
              },
            },
            blockquote: {
              color: theme("colors.gray.100"),
              borderLeftColor: theme("colors.gray.700"),
            },
          },
        },
      }),
    },
  },

  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
