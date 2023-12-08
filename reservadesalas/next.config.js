// next.config.js
module.exports = {
  reactStrictMode: true,
  // Outras configurações...
  devIndicators: {
    autoPrerender: false,
  },
  port: process.env.PORT || 3001, // Escolha a porta que deseja usar
};

