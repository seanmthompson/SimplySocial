var _ = require('underscore');

var allPosts = [
	{
		userName: 'Sam Soffes',
		userAvatar: 'img/users/sam.jpg',
		status: 'How to Get Inspired: the Right Way - Designmodo <a href="bit.ly/1lE4uJc">bit.ly/1lE4uJc"</a> Good stuff from <a href="@designmodo">@designmodo!</a>',
		timeCreated:  generateRandomTime(),
		type: "status",
		comments: [
			{
				username: 'Jed Bridges',
				userAvatar: 'img/users/jed.jpg',
				comment: 'Great way to start the week. Thanks for sharing!',
				timeCreated: generateRandomTime()
			},
			{
				username: 'Ren Walker',
				userAvatar: 'img/users/ren.jpg',
				comment: 'Feeling inspired now... thanks for the great articlce <a href="@designmodo">@designmodo!</a>',
				timeCreated: generateRandomTime()
			}
		]
	},
	{
		userName: 'Meg Robichaud',
		userAvatar: 'img/users/meg.jpg',
		status: 'My view this morning is simply beatiful... <a href="instagram.com/p/mV0PUrHRwQ/">instagram.com/p/mV0PUrHRwQ/</a>',
		timeCreated:  generateRandomTime(),
		type: "photo",
		attachment: 'img/photos/meg.jpg',
		comments: []
	},
	{
		userName: 'Kerem Suer',
		userAvatar: 'img/users/kerum.jpg',
		status: '8 Apps to Turn Your Pipe Dreams Into Prototypes <a href="on.mash.to/1oubyu8">on.mash.to/1oubyu8</a>',
		timeCreated:  generateRandomTime(),
		type: "status",
		comments: []
	},
	{
		userName: 'Liang Shi',
		userAvatar: 'img/users/liang.jpg',
		status: 'How to get animations out of your head. <a href="http://bit.ly/1q7BngO">http://bit.ly/1q7BngO</a>  Funny and useful.',
		timeCreated:  generateRandomTime(),
		type: "status",
		comments: []
	},
	{
		userName: 'Vitor Leal',
		userAvatar: 'img/users/vitor.jpg',
		status: 'You have to see this bike. It will make your daily commute a absolute joy ride! <a href="vimeo.com/p/mV0PUrHRwQ/">vimeo.com/p/mV0PUrHRwQ/</a>',
		attachment: "img/photos/vitor.jpg",
		timeCreated:  generateRandomTime(),
		type: "video",
		comments: []
	}		
];

exports.getAllPosts = function(){
    return allPosts;
};

exports.getPhotoFeed = function(){
	var photosArr = _.filter(allPosts, function(num){ 
		return num.type == 'photo'; 
	});
    return photosArr;
};

exports.getUserFeed = function(){
    return allPosts;
};

exports.getUserFollowers = function(){
    return allPosts;
};

exports.getUserFollowing = function(){
    return allPosts;
};

exports.getUserSettings = function(){
    return allPosts;
};

function generateRandomTime() {
	var now = new Date();
	var copiedDate = now.getMinutes();
	var date = new Date(now.setMinutes(copiedDate - Math.floor(Math.random() * 160) + 1));
	return date;
}

