var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config.js');

// 创建服务对象
var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    historyApiFallback: true,
    stats: { colors: true },
});
server.app.get('*', function(req, res) {
    res.sendFile(__dirname + '/src/index.html');
});

server.listen(8888, function() {
    console.log('启动服务成功：8888端口');
})
