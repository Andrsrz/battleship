module.exports = {
	publicPath: '/battleship/',
	chainWebpack: config => {
		config
		.plugin('html')
		.tap(args => {
			args[0].title = 'Battleship Game'
			return args
		})
	}
}
