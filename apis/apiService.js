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
				userName: 'Jed Bridges',
				userAvatar: 'img/users/jed.jpg',
				comment: 'Great way to start the week. Thanks for sharing!',
				timeCreated: generateRandomTime()
			},
			{
				userName: 'Ren Walker',
				userAvatar: 'img/users/ren.jpg',
				comment: 'Feeling inspired now... thanks for the great articlce <a href="@designmodo">@designmodo!</a>',
				timeCreated: generateRandomTime()
			}
		]
	},
	{
		userName: 'Meg Robichaud',
		userAvatar: 'img/users/meg.jpg',
		status: 'My view this morning is simply beatiful... <a href="http://instagram.com/p/mV0PUrHRwQ/">instagram.com/p/mV0PUrHRwQ/</a>',
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
	},
	{
		userName: 'Jenny Shen',
		userAvatar: 'img/users/jenny.jpg',
		status: 'Perfect day to be taking pictures  <a href="http://instagram.com/p/mV0PNrHRwQ/">instagram.com/p/mV0PUrHRwQ/</a>',
		timeCreated:  generateRandomTime(),
		type: "photo",
		attachment: 'img/photos/jenny.jpg',
		comments: []
	},	
	{
		userName: 'Buzz Usborne',
		userAvatar: 'img/users/buzz.jpg',
		status: 'Road trip!  <a href="http://bit.ly/1hkXFdK">bit.ly/1hkXFdK</a>',
		timeCreated:  generateRandomTime(),
		type: "photo",
		attachment: 'img/photos/buzz.jpg',
		comments: []
	},
	{
		userName: 'Ryan O. Hicks',
		userAvatar: 'img/users/ryan.jpg',
		status: '<a href="http://bit.ly/1hkXFdK">bit.ly/1hkXFdK</a>',
		timeCreated:  generateRandomTime(),
		type: "photo",
		attachment: 'img/photos/ryan.jpg',
		comments: []
	},	
	{
		userName: 'Chloe Park',
		userAvatar: 'img/users/chloe.jpg',
		status: 'Time to take a break!  <a href="http://instagram.com/p/mlL0B3Mi78/">instagram.com/p/mlL0B3Mi78/</a>',
		timeCreated:  generateRandomTime(),
		type: "photo",
		attachment: 'img/photos/chloe.jpg',
		comments: []
	},	
	{
		userName: 'Jonathan Moreira',
		userAvatar: 'img/users/jonathan.jpg',
		status: 'Work  <a href="http://bit.ly/3geWBiU">bit.ly/3geWBiU</a>',
		timeCreated:  generateRandomTime(),
		type: "photo",
		attachment: 'img/photos/jonathan.jpg',
		comments: []
	},	
	{
		userName: 'Lindsey Smith',
		userAvatar: 'img/users/lindsey.jpg',
		status: 'Met this little guy on my morning commute  <a href="http://instagram.com/p/1jdt42s">instagram.com/p/1jdt42s</a>',
		timeCreated:  generateRandomTime(),
		type: "photo",
		attachment: 'img/photos/lindsey.jpg',
		comments: []
	},	
	{
		userName: 'Marco Sousa',
		userAvatar: 'img/users/marco.jpg',
		status: '<a href="http://instagram.com/p/j5dkr61d/">instagram.com/p/j5dkr61d/</a>',
		timeCreated:  generateRandomTime(),
		type: "photo",
		attachment: 'img/photos/marco.jpg',
		comments: []
	},	
	{
		userName: 'Lauren Gray',
		userAvatar: 'img/users/lauren.jpg',
		status: 'The best way to get to the office... I love my new board!   <a href="http://instagram.com/p/mlLjgmw3dc/">instagram.com/p/mlLjgmw3dc/</a>',
		timeCreated:  generateRandomTime(),
		type: "photo",
		attachment: 'img/photos/lauren.jpg',
		comments: []
	},	
		
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

