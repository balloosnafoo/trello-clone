Quello.Views.ListForm = Backbone.View.extend({
  template: JST['list/form'],

  tagName: "form",

  events: {
    "submit": "createList"
  },

  initialize: function (options) {
    this.board = options.board;
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },

  createList: function (event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON().list;
    formData.board_id = this.board.id;
    var list = new Quello.Models.List(formData);
    list.save({});

    $(event.currentTarget).find("#list-title").val("")
  }

});
