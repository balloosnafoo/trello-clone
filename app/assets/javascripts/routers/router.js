Quello.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "boardsIndex",
    "boards": "boardsIndex",
    "boards/new": "boardsNew",
    "boards/:id": "boardsShow"
  },

  initialize: function (boards, $rootEl) {
    this.boards = boards;
    this.$rootEl = $rootEl;
  },

  boardsIndex: function () {
    var indexView = new Quello.Views.BoardsIndex({
      collection: this.boards,
      $el: this.$rootEl
    });

    this.swap(indexView);
  },

  boardsNew: function () {
    var newView = new Quello.Views.BoardsNew({
      $el: this.$rootEl
    });

    this.swap(newView);
  },

  boardsShow: function (id) {
    var board = this.boards.getOrFetch(id);
    var showView = new Quello.Views.BoardShow({
      model: board
    });

    this.swap(showView);
  },

  swap: function (view) {
    this._view && this._view.remove();
    this._view = view;
    this.$rootEl.html(this._view.render().$el);
  }
});
