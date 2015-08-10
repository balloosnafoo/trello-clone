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
    this.model.set(formData);
    this.model.save({}, {
      success: function () {
        this.board.lists().add(this.model);
      }.bind(this)
    });

    $(event.currentTarget).find("#list-title").val("")
  }

});
