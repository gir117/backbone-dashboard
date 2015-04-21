$(document).ready(function(event) {


//=======================================MODELS
var cardModel = Backbone.Model.extend({
  initialize: function(){
    console.log('hey, a file is here!')
  },

});

//=======================================COLLECTIONS

var cardList = Backbone.Collection({
  model: cardModel,
  url: '/api/cards',
  initialize: function() {
    console.log("Collection is a go!");
  }
});


//=======================================APIs

var weather = Backbone.Model.extend({
  intialize: function() {
    this.fetch()
    console.log(this.attributes);
  },
  url: "http://api.openweathermap.org/data/2.5/find?q=Chicago&units=imperial"
})

var chicago = new weather();


//=======================================INSTANTIATE


  var cardz = new cardList();
  cardz.fetch();
  cardz.models.legnth

  cardz.create({
    title: "Quote of the Day",
    message: "One day at a time...."
  });


  var row1 = $('.row')[0];
  var row2 = $('.row')[1];

  var newsData = { id: "news-card", title: "Headlines", content: "Very important news updates from the day"};
  var News = new halfCardView(newsData, row1);

  var timeData = { id: "time-card", title: "Time", content: "Happy o-clock!"};
  var time = new quarterCardView(timeData, row1);

  // var sticker = <span style="display: block !important; width: 320px; text-align: center; font-family: sans-serif; font-size: 12px;"><a href="http://www.wunderground.com/cgi-bin/findweather/getForecast?query=zmw:60290.1.99999&bannertypeclick=wu_clean2day" title="Chicago, Illinois Weather Forecast" target="_blank"><img src="http://weathersticker.wunderground.com/weathersticker/cgi-bin/banner/ban/wxBanner?bannertype=wu_clean2day_cond&airportcode=KMDW&ForcedCity=Chicago&ForcedState=IL&zip=60290&language=EN" alt="Find more about Weather in Chicago, IL" width="300" /></a><br><a href="http://www.wunderground.com/cgi-bin/findweather/getForecast?query=zmw:60290.1.99999&bannertypeclick=wu_clean2day" title="Get latest Weather Forecast updates" style="font-family: sans-serif; font-size: 12px" target="_blank">Click for weather forecast</a></span>;
  var weatherData = { id: "weather-card", title: "Weather", content: "chilly willy"};
  var weather = new quarterCardView(weatherData, row1);

  var appointmentsData = { id: "appointments-card", title: "Meetings & Appointments", content: "this is silly!"};
  var appointments = new quarterCardView(appointmentsData, row2);

  var birthdaysData = { id: "birthday-card", title: "Birthdays", content: "Dad - Jan 27 / Mom - Jan 28"};
  var birthdays = new quarterCardView(birthdaysData, row2);

});
