//=======================================VIEWS

var halfCardView = Backbone.View.extend({

  tagName: "article",
  className: "block-half shadow",
  template: _.template("<h3><%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
  initialize: function(data, el) {
    this.el = el;
    this.render(data, this.$el);
  },
  render: function(data) {
    this.$el.html(this.template(data));
    $('body').append(this.$el);
    // this.$el.append(this.$el);
  }
});

var thirdCardView = Backbone.View.extend({

  tagName: "article",
  className: "block-third shadow", //changed this class based on the CSS file
  template: _.template("<h3><%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
  initialize: function(data, el) {
    this.el = el;
    this.render(data, this.$el);
  },
  render: function(data) {
    this.$el.html(this.template(data));
    $('body').append(this.$el);
    // this.$el.append(this.$el);
  }
});

  var quarterCardView = Backbone.View.extend({

    tagName: "article",
    className: "block-quarter shadow", //changed this class based on the CSS file
    template: _.template("<h3 id= <%= id %>> <%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
    initialize: function(data, el) {
      this.el = el;
      this.render(data, this.$el);
    },
    render: function(data) {
      this.$el.html(this.template(data));
      $('body').append(this.$el);
      // this.$el.append(this.$el);
    }
  });


  // var logoView = Backbone.View.extend({
  //
  //   tagName: "article",
  //   className: "block-quarter shadow", //changed this class based on the CSS file
  //   template: _.template("<h3 id= <%= id %>> <%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
  //   initialize: function(data, el) {
  //     this.el = el;
  //     this.render(data, this.$el);
  //   },
  //   render: function(data) {
  //     this.$el.html(this.template(data));
  //     $('body').append(this.$el);
  //     // this.$el.append(this.$el);
  //   }
  // });


//=======================================INSTANTIATE VIEWS

  var row1 = $('.row')[0];
  var row2 = $('.row')[1];

$(document).ready(function(event) {

  var newsData = { id: "news-card", title: "Headlines", content: "Very important news updates from the day"};
  var News = new halfCardView(newsData, row1);

  var timeData = { id: "time-card", title: "Time", content: "Happy o-clock!"};
  var time = new quarterCardView(timeData, row1);

  var weatherData = { id: "weather-card", title: "Weather", content: "Chilly willy!"};
  var weather = new quarterCardView(weatherData, row1);

  var appointmentsData = { id: "appointments-card", title: "somethin somethin", content: "this is silly!"};
  var appointments = new quarterCardView(appointmentsData, row2);

  var birthdaysData = { id: "birthday-card", title: "somethin somethin", content: "this is silly!"};
  var birthdays = new quarterCardView(birthdaysData, row2);

});
