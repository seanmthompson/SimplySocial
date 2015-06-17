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
		attachment: 'img/photos/meg',
		comments: []
	},
	{
		userName: 'Kerem Suer',
		userAvatar: 'img/users/kerum.jpg',
		status: '8 Apps to Turn Your Pipe Dreams Into Prototypes <a href="on.mash.to/1oubyu8">on.mash.to/1oubyu8</a>',
		timeCreated:  generateRandomTime(),
		type: "status",
		comments: []
	}	
];

exports.getAllPosts = function(){
    return allPosts;
};

exports.getPhotoFeed = function(){
    return appIdeasArr;
};

exports.getUserFeed = function(){
    return appIdeasArr;
};

exports.getUserFollowers = function(){
    return appIdeasArr;
};

exports.getUserFollowing = function(){
    return appIdeasArr;
};

exports.getUserSettings = function(){
    return appIdeasArr;
};

function generateRandomTime() {
	var now = new Date();
	var copiedDate = now.getMinutes();
	var date = new Date(now.setMinutes(copiedDate - Math.floor(Math.random() * 160) + 1));
	return date;
}

