# Express Boilerplate

A Boilerplate for creating web application using:

**Nodejs**
**Express**
**Bootstrap**
**HTML5**

# Folder Structure

**bin**

	| www [This is the entry point of our application]

**config** [Configuration folder]

	| default.json
	| development.json
	| production.json

**public** [Files accessible publicly are here]

	| css
	| fonts
	| images
	| js
		| vendor
		| main.js [Main javascript file]

**routes** [Express routing]

	| index.js [Routes are here]
	| zoho.js [zoho utility]

**views** [pages and jade files are here]

	| includes [Should you decide to modularize your page, put your components here]
	| index.jade [Page Index]

**app.js** [Express instance]
**package.json** [Application configuration]


# Run Scripts

**npm start** 
	
	Run application on default configuration

**npm run dev** 
	
	Run application on development configuration

**npm run prod** 
	
	Run application on production configuration

**npm run pm2_prod** 
	
	Add application to pm2 process using production configuration

**npm run pm2_dev** 
	
	Add application to pm2 process using development configuration


# Notes
*When running in pm2 script make sure to change the name of your application on configuration files. This is to avoid confusion on pm2 process list.*