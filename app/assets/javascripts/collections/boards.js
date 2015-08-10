Quello.Collections.Boards = Backbone.Collection.extend({
  url: "api/boards",

  model: Quello.Models.Board,

  getOrFetch: function (id) {
    var collection = this;
    var board = collection.get(id);
    if (board) {
      board.fetch();
    } else {
      board = new collection.model({ id: id });
      collection.add(board);
      board.fetch({
        error: function () { collection.remove(board); }
      });
    }

    return board;
  }

  // getOrFetch: function (id) {
  //
  //   debugger;
  //   var board = this.get(id);
  //   if (!board) {
  //     board = new Quello.Models.Board({id: id});
  //     board.fetch({
  //       success: function () {
  //         this.add(board);
  //       }.bind(this)
  //     });
  //   } else {
  //     board.fetch();
  //   }
  //
  //   return board;
  // }
});
