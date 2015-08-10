Quello.Views.ListsIndexItem = Backbone.View.extend({
  template: JST['list/index_item'],

  tagName: "div",

  className: "col-md-3 list-item",

  render: function () {
    var renderedContent = this.template({
      list: this.model
    });

    this.$el.html(renderedContent);
    return this;
  }
});
