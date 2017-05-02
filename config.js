// database
exports.knex = {
	client: 'mysql',
	connection: {
		host: 'localhost',
		user: 'root',
		password: 'spboss2003',
		database: 'campaign_stores'
	}
}


exports.listeners = [
	{event: 'scrap-data', listener: 'OnScrapData'},
	{event: 'scrap-error', listener: 'OnScrapError'},
]


exports.image = {
	dir: '/tmp'
};

// exports.stores = [
// 	{

// 		id: 1,

// 		name: 'asos',

// 		root: 'li',

// 		at: {
// 			title: 'h2'
// 		},

// 		paginate: 'a@href'		
// 	},

// 	{
// 		id: 2,

// 		name: 'argos',

// 		root: 'li',

// 		at: {
// 			title: 'h2',
// 			sku: 'p'
// 		},

// 		paginate: 'a@href'		
// 	}
// ];

exports.urls = {
	Asos: ["http://localhost:3000/index.php?cat=shirt", "http://localhost:3000/index.php?cat=jeans"],

	Argos: ["http://localhost:3000/index.php?cat=dress", "http://localhost:3000/index.php?cat=skirts"],
};