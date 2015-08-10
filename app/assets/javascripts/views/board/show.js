Quello.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['board/show'],

  events: {
    "click .board-delete-button": "delete",
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.lists(), "add", this.addListSubview);
    this.listenTo(this.model.lists(), "add", this.render);
    this.model.lists().each(function (list) {
      this.addListSubview(list);
    }.bind(this));
  },

  addListSubview: function (list) {
    var listIndexItem = new Quello.Views.ListsIndexItem({
      model: list
    });
    this.addSubview("div.lists-index.row", listIndexItem);
  },

  delete: function (event) {
    event.preventDefault();
    this.model.destroy({
      success: function () {
        Backbone.history.navigate(
          "",
          { trigger: true }
        );
      }
    });
  },

  renderListForm: function () {
    var listForm = new Quello.Views.ListForm({
      board: this.model,
      model: new Quello.Models.List()
    });

    return listForm.render();
  },

  render: function () {
    this.$el.html(this.template({
      board: this.model
    }));
    this.$el.append(this.renderListForm().$el);
    this.attachSubviews();

    return this;
  }
});
