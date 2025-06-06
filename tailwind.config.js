module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          green: "var(--primary-green)",
          "green-light": "var(--primary-green-light)",
          "green-dark": "var(--primary-green-dark)",
        },
        secondary: {
          gray: "var(--secondary-gray)",
          "gray-light": "var(--secondary-gray-light)",
          "gray-dark": "var(--secondary-gray-dark)",
        },
        background: {
          white: "var(--bg-white)",
          "gray-light": "var(--bg-gray-light)",
          "gray-medium": "var(--bg-gray-medium)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          light: "var(--text-light)",
        },
        border: {
          light: "var(--border-light)",
          medium: "var(--border-medium)",
          dark: "var(--border-dark)",
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '40px',
      },
      lineHeight: {
        'tight': '16px',
        'snug': '18px',
        'normal': '20px',
        'relaxed': '22px',
        'loose': '24px',
        'extra-loose': '28px',
        'super-loose': '37px',
        'mega-loose': '44px',
        'ultra-loose': '60px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '20px',
        '4xl': '30px',
      },
      
      boxShadow: {
        'card': '0px 2px 5px rgba(0, 0, 0, 0.1)',
        'elevated': '0px 4px 12px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};