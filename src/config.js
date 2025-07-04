module.exports = {
  email: 'darshanvkalola@gmail.com',

  socialMedia: [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/kalolad1',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/kalolad1',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Education',
      url: '/#education',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    // {
    //   name: 'Research',
    //   url: '/#research',
    // },
    // {
    //   name: 'Projects',
    //   url: '/#projects',
    // },
    {
      name: 'Blog',
      url: 'https://darshankalola.substack.com/',
    },
  ],

  colors: {
    green: '#FFBF69',
    navy: '#f8f9fa',
    darkNavy: '#ffffff',
  },

  srConfig: (delay = 75, viewFactor = 0.20) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
