module.exports = {
  stories: [],
  addons: ['@storybook/addon-essentials'],
  staticDirs: [{ from: '../apps/website/public', to: '/assets' }],
  previewHead: (head) => `
    ${head}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
      @font-face {
        font-family: 'GT-Super-Display-Super';
        src: url('/assets/fonts/GT-Super-Display-Super.woff2') format('woff2'),
          url('/assets/fonts/GT-Super-Display-Super.woff') format('woff');
      }
    </style>
  `,
  // uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
};
