window.Quello = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $("#content");
    var boards = new Quello.Collections.Boards();
    boards.fetch();

    boardsIndexView = new Quello.Views.BoardsIndex({
      collection: boards
    });

    new Quello.Routers.Router(boards, $rootEl);
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Quello.initialize();
});
