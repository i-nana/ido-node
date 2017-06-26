exports.index = function(req, res) {
	res.status(200).send('ヾ(◍°∇°◍)ﾉﾞ Hello World.')
}

exports.banners = function(req, res) {
	let banners = [{
		imgUrl: 'http://img.t.sinajs.cn/t5/skin/public/profile_cover/004.jpg',
		url: '/'
	}, {
		imgUrl: 'http://img.t.sinajs.cn/t5/skin/public/profile_cover/011.jpg',
		url: '/'
	}, {
		imgUrl: 'http://img.t.sinajs.cn/t5/skin/public/profile_cover/010.jpg',
		url: '/'
	}, {
		imgUrl: 'http://img.t.sinajs.cn/t5/skin/public/profile_cover/048.jpg',
		url: '/'
	}, {
		imgUrl: 'http://img.t.sinajs.cn/t5/skin/public/profile_cover/017.jpg',
		url: '/'
	}]
	res.status(200).send(banners)
}