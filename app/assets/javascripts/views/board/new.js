Quello.Views.BoardsNew = Backbone.View.extend({
  template: JST['board/new'],

  events: {
    "click button": "create"
  },

  create: function (event) {
    event.preventDefault();

    var formData = $(event.currentTarget).parent().serializeJSON();
    var newBoard = new Quello.Models.Board(formData.board);

    newBoard.save({}, {
      success: function () {
        Backbone.history.navigate(
          "boards/" + newBoard.id,
          { trigger: true }
        );
      }
    });
  },

  render: function () {
    this.$el.html(this.template());

    return this;
  }
});
