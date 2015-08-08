Quello.Views.BoardsIndex = Backbone.CompositeView.extend({
  template: JST['board/index'],

  initialize: function ($el) {
    this.listenTo(this.collection, 'add', this.addBoardSubview);
    this.listenTo(this.collection, 'sync add', this.render);

    this.collection.each( function (board) {
      this.addBoardSubview(board);
    }.bind(this));
  },

  addBoardSubview: function (board) {
    var boardListItem = new Quello.Views.BoardListItem({
      model: board
    });
    this.addSubview("div.boards-list", boardListItem);
  },

  events: {

  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();

    return this;
  }
})
