const path=require('path')
module.exports = {
  transpileDependencies: ["vuetify"],
  outputDir: path.resolve(__dirname,'../backvasyTn-1/public'),
  devServer: {
    proxy: {
      "/reservation": {
        target: "http://localhost:5000/",
      },
      "/user": {
        target: "http://localhost:5000/",
      },
      "/covoiturage": {
        target: "http://localhost:5000/",
      },
    },
    
  },
};
