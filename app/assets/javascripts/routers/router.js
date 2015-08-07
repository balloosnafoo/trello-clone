Quello.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "boardsIndex",
    "boards/:id": "boardsShow"
  },

  initialize: function (boards, $rootEl) {
    this.boards = boards,
    this.$rootEl = $rootEl
  },

  boardsIndex: function () {
    var indexView = new Quello.Views.BoardsIndex({
      collection: this.boards,
      $el: this.$rootEl
    });

    indexView.render();
  },

  swap: function (view) {
    this._view && this._view.remove();
    this._view = view;
    this.$rootEl.html(this._view.render().$el);
  }
});
