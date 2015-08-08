Quello.Collections.Lists = Backbone.Collection.extend({
  url: "api/lists",

  model: Quello.Models.List,

  getOrFetch: function (id) {
    var list = this.get(id);
    if (!board) {
      list = new Quello.Models.List({id: id});
      list.fetch({
        success: function () {
          this.add(list);
        }.bind(this)
      });
    } else {
      list.fetch();
    }

    return list;
  }
});
