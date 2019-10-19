		/* Magic Mirror Config Sample
		 *
		 * By Michael Teeuw http://michaelteeuw.nl
		 * MIT Licensed.
		 *
		 * For more information how you can configurate this file
		 * See https://github.com/MichMich/MagicMirror#configuration
		 *
		 */
		
		var config = {
			address: "localhost", // Address to listen on, can be:
			                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
			                      // - another specific IPv4/6 to listen on a specific interface
			                      // - "", "0.0.0.0", "::" to listen on any interface
			                      // Default, when address config is left out, is "localhost"
			port: 8080,
			ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
			                                                       // or add a specific IPv4 of 192.168.1.5 :
			                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
			                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
			                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],
		
			language: "en",
			timeFormat: 24,
			units: "metric",
		
			modules: [
				{
					module: "alert",
				},
				//{
				//	module: "updatenotification",
				//	position: "top_bar"
				//},
				{
					module: "clock",
					position: "top_right",
					config: {
					timeFormat: "12"
				
							}
				},
/*




				{
					module: "calendar",
					header: "US Holidays",
					position: "top_left",
					config: {
						calendars: [
							{
								symbol: "calendar-check-o ",
								
								url: "https://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
							}
						]
					}
				},
				*/
				
				
	
				{
					module: "compliments",
					position: "lower_third",
					config: { 
						compliments: {
							//anytime: [ "Happy alentines Day Kate"
						//]
							day_sunny: [
									 "Today is a sunny day",
									 "It's a beautiful day"
						 ],
								 snow: [	
									 "Snowball battle!",
									 "Dress warm"
						 ],
								 rain: [
									 "Don't forget your umbrella"
						 ],
								morning: [
							// "Good morning, Kate",
							"Colin misses you!", 
							"Make today great!",
							"You are a sexy mf",
							"Colin wishes he was kissing you on that bridge!"
						],
								afternoon: [	
									 "Good afternoon, Kate"
									 
						 ],
								evening: [
								 "Good  evening, Kate"
						 ]
							
					}
				}
				},
				{
					module: "currentweather",
					position: "top_right",
					config: {
						location: "Milwaukee, Wisconsin",
						locationID: "",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
						appid: "583e53e5fdcbcb4ac2d4a0d1dac9279d",
						units: "imperial"
					}
				},
				{
					module: "weatherforecast",
					position: "top_left",
					header: "Weather Forecast",
					config: {
						location: "Milwaukee, Wisconsin",
						locationID: "",  //ID from http://www.openweathermap.org/help/city_list.txt
						appid: "583e53e5fdcbcb4ac2d4a0d1dac9279d",
						units: "imperial"
					}
				},
								{
				    module: "MMM-EasyPix",
					position: "top_right",
					config: {
						picName: "p2.JPG", // Enter the picture file name.
						maxWidth: "35%",        // Size picture precisely. Retains aspect ratio.
						sounds: ["1.mp3", "me2.mp3"],  // mp3 sound file names in quotes seperated by commas for Hello-Lucy
						updateInterval: 30 * 60 * 1000,     // updates display
					        animationSpeed: 3000,
					}
				},
				{
					module: "newsfeed",
					position: "bottom_bar",
					config: {
						feeds: [
							{
								title: "New York Times",
								url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
							}
						],
						showSourceTitle: true,
						showPublishDate: true
					}
				},
			]
		
		};
		
		/*************** DO NOT EDIT THE LINE BELOW ***************/
		if (typeof module !== "undefined") {module.exports = config;}
		
	
