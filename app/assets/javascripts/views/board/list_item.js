Quello.Views.BoardListItem = Backbone.View.extend({
  template: JST['board/list_item'],

  tagName: 'li',

  render: function () {
    this.$el.html(this.template({
      board: this.model
    }))

    return this;
  }
})
