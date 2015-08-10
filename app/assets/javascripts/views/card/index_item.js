Quello.Views.CardIndexItem = Backbone.View.extend({
  template: JST['card/index_item'],

  tagName: "li",

  className: "card-list-item",

  render: function () {
    var renderedContent = this.template({
      card: this.model
    });

    this.$el.html(renderedContent);
    return this;
  }
});
