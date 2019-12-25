module.exports = {
  devServer: {
    proxy: {
      '^/gin': {
        target: 'http://www.monks.top:80',
        ws: true,
        changeOrigin: true,
      },
    },
    
  },
};
