//=======================================VIEWS

var halfCardView = Backbone.View.extend({

  tagName: "article",
  className: "block-half shadow",
  template: _.template("<h3 id=' <%= id %> '><%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
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
  template: _.template("<h3 id=' <%= id %> '><%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
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
    template: _.template("<h3 id=' <%= id %> '><%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
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
