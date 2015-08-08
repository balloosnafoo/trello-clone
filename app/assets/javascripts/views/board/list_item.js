Quello.Views.BoardListItem = Backbone.View.extend({
  template: JST['board/list_item'],

  tagName: 'div',

  className: "col-md-4 board-list-item",

  render: function () {
    this.$el.html(this.template({
      board: this.model
    }))
    return this;
  }
})
