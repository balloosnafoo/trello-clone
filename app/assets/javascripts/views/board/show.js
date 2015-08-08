Quello.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['board/show'],

  events: {
    "click .board-delete-button": "delete",
    "submit form": "createList"
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

  createList: function (event) {
    var formData = $(event.currentTarget).serializeJSON().list;
    formData.board_id = this.model.id;

    var newList = new Quello.Models.List(formData);
    newList.save();
  },

  render: function () {
    this.$el.html(this.template({
      board: this.model
    }));

    return this;
  }
});
