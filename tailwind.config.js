module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: '#3A63DE',
        primary: '#FD726A',
        'borderColor': '#E1E3E6',
        heading: '#333333',
        bodyLight: '#818386',
        greenOnline: '#44CB7F',
        'chatAnswerColor': '#F2F5FA',
        'bodyDark': '#595F69',
      },
      fontFamily: {
        body: ['Poppins']
      },
      fontSize: {
        '0': '0rem',
        'service': '0.8125rem',
        'tiny': '0.875rem',
        'chat': '0.9375rem',
      },
      screens: {
        '2xl': '1440px',
      },
      padding: {
        'nav': '1.9375rem',
        'navIB': '1.625rem',
        'scrollP': '9px',
        '13': '3.25rem',
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '7.5': '1.875rem',
      },
      opacity: {
        '15': '0.15',
      },
      boxShadow: {
        'innerNav': 'inset 0px -4px 8px rgba(0, 0, 0, 0.08), inset 0px 4px 8px rgba(0, 0, 0, 0.08)'
      },
      width: {
        'roster': '380px',
        'navItem': '150px',
      },
      height: {
        'scroll': '106px',
        '25': '6.25rem',
        'rosterHeader': '46px',
        'rosterPeople': '41px',
      },
      borderWidth: {
        '3': '3px',
      },
      flex: {
        'full': '1 0 auto'
      },
      gridTemplateColumns: {
        '2auto': 'auto auto',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
