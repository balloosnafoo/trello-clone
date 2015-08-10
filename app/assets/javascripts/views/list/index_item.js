Quello.Views.ListsIndexItem = Backbone.CompositeView.extend({
  template: JST['list/index_item'],

  tagName: "div",

  className: "col-md-3 list-item",

  addCardSubview: function (card) {
    var cardIndexItem = new Quello.Views.CardIndexItem({
      model: card
    });
    this.addSubview("ul.cards-list", cardListItem);
  },

  render: function () {
    var renderedContent = this.template({
      list: this.model
    });

    this.$el.html(renderedContent);
    return this;
  }
});
