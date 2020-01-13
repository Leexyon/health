
module.exports = {
  module: {
    rules: [
      {
         test: /\.(htm|html)$/,
         use: [
           'raw-loader'
         ]
      }
    ]
  }
}