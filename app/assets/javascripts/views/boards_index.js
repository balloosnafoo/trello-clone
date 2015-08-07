Quello.Views.BoardsIndex = Backbone.CompositeView.extend({
  template: JST['boards_index'],

  tagName: "li",

  initialize: function ($el) {
    this.collection.each( function (board) {
      this.addBoardSubview(board);
    }.bind(this));
  },

  addBoardSubview: function (board) {
    var boardListItem = new Quello.Views.BoardListItem({
      model: board
    });
    this.addSubview("ul.boards-list", boardListItem);
  },

  events: {

  },

  render: function () {
    debugger;
    this.$el.html(this.template());
    this.attachSubviews();

    return this;
  }
})
