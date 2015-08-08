Quello.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['board/show'],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template({
      board: this.model
    }));

    return this;
  }
});
