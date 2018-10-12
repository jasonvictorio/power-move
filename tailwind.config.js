const rem = x => `${x/10}rem`;

const verticalBase = 8;
const bodyPadding = 16;
const gridGutter = 16;
const gridWidth = 96;
const gridCount = 12;
const bodyWidth = (gridWidth * gridCount) + (gridGutter * (gridCount - 1)) + (bodyPadding * 2);
const verticalScale = {
  'px': '1px',
  '0': '0',
  '1': rem(verticalBase),
}
const horizonalScale = {
  'px': '1px',
  '0': '0',
  '25p': '25%',
  '33p': '33.33%',
  '50p': '50%',
  '66p': '66.67%',
  '75p': '75%',
  '100p': '100%',
}

for (let i = 1; i < 10; i++) {
  verticalScale[i+1] = rem(i*2 * verticalBase)
}

for (let i = 1; i <= gridCount; i++) {
  horizonalScale[i] = rem((i*gridWidth) + ((i-1)*gridGutter))
}


let colors = {
  'transparent': 'transparent',

  'black': '#22292f',
  'grey-darkest': '#3d4852',
  'grey-darker': '#606f7b',
  'grey-dark': '#8795a1',
  'grey': '#b8c2cc',
  'grey-light': '#dae1e7',
  'grey-lighter': '#f1f5f8',
  'grey-lightest': '#f8fafc',
  'white': '#ffffff',

  'red-darkest': '#3b0d0c',
  'red-darker': '#621b18',
  'red-dark': '#cc1f1a',
  'red': '#e3342f',
  'red-light': '#ef5753',
  'red-lighter': '#f9acaa',
  'red-lightest': '#fcebea',

  'orange-darkest': '#462a16',
  'orange-darker': '#613b1f',
  'orange-dark': '#de751f',
  'orange': '#f6993f',
  'orange-light': '#faad63',
  'orange-lighter': '#fcd9b6',
  'orange-lightest': '#fff5eb',

  'yellow-darkest': '#453411',
  'yellow-darker': '#684f1d',
  'yellow-dark': '#f2d024',
  'yellow': '#ffed4a',
  'yellow-light': '#fff382',
  'yellow-lighter': '#fff9c2',
  'yellow-lightest': '#fcfbeb',

  'green-darkest': '#0f2f21',
  'green-darker': '#1a4731',
  'green-dark': '#1f9d55',
  'green': '#38c172',
  'green-light': '#51d88a',
  'green-lighter': '#a2f5bf',
  'green-lightest': '#e3fcec',

  'teal-darkest': '#0d3331',
  'teal-darker': '#20504f',
  'teal-dark': '#38a89d',
  'teal': '#4dc0b5',
  'teal-light': '#64d5ca',
  'teal-lighter': '#a0f0ed',
  'teal-lightest': '#e8fffe',

  'blue-darkest': '#12283a',
  'blue-darker': '#1c3d5a',
  'blue-dark': '#2779bd',
  'blue': '#3490dc',
  'blue-light': '#6cb2eb',
  'blue-lighter': '#bcdefa',
  'blue-lightest': '#eff8ff',

  'indigo-darkest': '#191e38',
  'indigo-darker': '#2f365f',
  'indigo-dark': '#5661b3',
  'indigo': '#6574cd',
  'indigo-light': '#7886d7',
  'indigo-lighter': '#b2b7ff',
  'indigo-lightest': '#e6e8ff',

  'purple-darkest': '#21183c',
  'purple-darker': '#382b5f',
  'purple-dark': '#794acf',
  'purple': '#9561e2',
  'purple-light': '#a779e9',
  'purple-lighter': '#d6bbfc',
  'purple-lightest': '#f3ebff',

  'pink-darkest': '#451225',
  'pink-darker': '#6f213f',
  'pink-dark': '#eb5286',
  'pink': '#f66d9b',
  'pink-light': '#fa7ea8',
  'pink-lighter': '#ffbbca',
  'pink-lightest': '#ffebef',
}

module.exports = {
  colors: colors,
  screens: {
    'sm': '576px',
    'md': '768px',
    'lg': '992px',
    'xl': '1200px',
  },

  // Class name: .font-{name}
  fonts: {
    'sans': [
      '"Open Sans"',
      'system-ui',
      'BlinkMacSystemFont',
      '-apple-system',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ],
    'serif': [
      '"Playfair Display"',
      'Constantia',
      'Lucida Bright',
      'Lucidabright',
      'Lucida Serif',
      'Lucida',
      'DejaVu Serif',
      'Bitstream Vera Serif',
      'Liberation Serif',
      'Georgia',
      'serif',
    ],
    'mono': [
      'Menlo',
      'Monaco',
      'Consolas',
      'Liberation Mono',
      'Courier New',
      'monospace',
    ]
  },

  // Class name: .text-{size}
  textSizes: {
    'base': '1.6rem',

    '1': '1.6rem',
    '2': '2.4rem',
    '3': '3.2rem',
    '4': '4.0rem',
    '5': '4.8rem',
    '6': '5.6rem',
    '7': '6.4rem',
    '8': '7.2rem',
    '9': '8.0rem',
  },

  // Class name: .font-{weight}
  fontWeights: {
    'hairline': 100,
    'thin': 200,
    'light': 300,
    'normal': 400,
    'medium': 500,
    'semibold': 600,
    'bold': 700,
    'extrabold': 800,
    'black': 900,
  },

  // Class name: .leading-{size}
  leading: {
    'solid': 1,
    'tight': 1.25,
    'normal': 1.5,
    'double': 2,
  },

  // Class name: .tracking-{size}
  tracking: {
    'tight': '-0.05em',
    'normal': '0',
    'wide': '0.05em',
  },

  // Class name: .text-{color}
  textColors: colors,

  // Class name: .bg-{color}
  backgroundColors: colors,

  // Class name: .bg-{size}
  backgroundSize: {
    'auto': 'auto',
    'cover': 'cover',
    'contain': 'contain',
  },

  // Class name: .border{-side?}{-width?}
  borderWidths: {
    default: '0.1rem',
    '0': '0',
    '2': '0.2rem',
    '4': '0.4rem',
    '8': '0.8rem',
  },

  // Class name: .border-{color}
  borderColors: global.Object.assign({ default: 'inherit' }, colors),

  // Class name: .rounded{-side?}{-size?}
  borderRadius: {
    'none': '0',
    'sm': '.125rem',
    default: '.25rem',
    'lg': '.5rem',
    'full': '9999px',
  },

  // Class name: .w-{size}
  width: Object.assign(horizonalScale, {
    'auto': 'auto',
  }),

  // Class name: .h-{size}
  height: Object.assign(horizonalScale, {
    'auto': 'auto',
  }),

  // Class name: .min-w-{size}
  minWidth: {
    '0': '0',
    'full': '100%',
  },

  // Class name: .min-h-{size}
  minHeight: {
    '0': '0',
    'full': '100%',
    'screen': '100vh'
  },

  // Class name: .max-w-{size}
  maxWidth: Object.assign(horizonalScale, {
    'auto': 'auto',
    'body': rem(bodyWidth),
  }),

  // Class name: .max-h-{size}
  maxHeight: {
    'full': '100%',
    'screen': '100vh',
  },

  // Class name: .p{side?}-{size}
  padding: Object.assign(verticalScale, {
    '100p': '100%',
    'body': rem(bodyPadding),
  }),

  // Class name: .m{side?}-{size}
  margin: Object.assign(verticalScale, {
    'auto': 'auto',
    '100p': '100%',
  }),

  // Class name: .-m{side?}-{size}
  negativeMargin: Object.assign(verticalScale, {
  }),

  // Class name: .shadow-{size?}
  shadows: {
    default: '0 2px 4px 0 rgba(0,0,0,0.10)',
    'md': '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
    'lg': '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
    'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    'outline': '0 0 0 3px rgba(52,144,220,0.5)',
    'none': 'none',
  },

  // Class name: .z-{index}
  zIndex: {
    'auto': 'auto',
    '0': 0,
    '10': 10,
    '20': 20,
    '30': 30,
    '40': 40,
    '50': 50,
  },

  // Class name: .opacity-{name}
  opacity: {
    '0': '0',
    '25': '.25',
    '50': '.5',
    '75': '.75',
    '100': '1',
  },

  // Class name: .fill-{name}
  svgFill: {
    'current': 'currentColor',
  },

  // Class name: .stroke-{name}
  svgStroke: {
    'current': 'currentColor',
  },


  // Modules https://tailwindcss.com/docs/configuration#modules
  modules: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColors: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: [],
    borderColors: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidths: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    flexbox: ['responsive'],
    float: ['responsive'],
    fonts: ['responsive'],
    fontWeights: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    leading: ['responsive'],
    lists: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    opacity: ['responsive'],
    outline: ['focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    shadows: ['responsive', 'hover', 'focus'],
    svgFill: [],
    svgStroke: [],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColors: ['responsive', 'hover', 'focus'],
    textSizes: ['responsive'],
    textStyle: ['responsive', 'hover', 'focus'],
    tracking: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive'],
  },


  // Advanced Options https://tailwindcss.com/docs/configuration#options
  options: {
    prefix: '',
    important: false,
    separator: ':',
  },
}
