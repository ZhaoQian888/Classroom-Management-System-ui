module.exports = {
  devServer: {
    proxy: {
      '^/gin': {
        target: 'http://localhost:8008',
        ws: true,
        changeOrigin: true,
      },
    },
    
  },
};
