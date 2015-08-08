Quello.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['board/show'],

  events: {
    "click .board-delete-button": "delete"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  delete: function (event) {
    event.preventDefault();
    this.model.destroy({
      success: function () {
        Backbone.history.navigate(
          "",
          { trigger: true }
        );
      }
    });
  },

  render: function () {
    this.$el.html(this.template({
      board: this.model
    }));

    return this;
  }
});
