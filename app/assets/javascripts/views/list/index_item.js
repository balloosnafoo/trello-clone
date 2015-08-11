Quello.Views.ListsIndexItem = Backbone.CompositeView.extend({
  template: JST['list/index_item'],

  tagName: "div",

  className: "list-item",
  // className: "col-md-3 list-item",

  events: {
    "click .list-delete": "destroyList",
    "submit .new-card-form": "createCard"
  },

  initialize: function () {
    this.listenTo(this.model.cards(), 'add', this.addCardSubview);

    this.model.cards().each( function (card) {
      this.addCardSubview(card);
    }.bind(this));

  },

  addCardSubview: function (card) {
    var cardIndexItem = new Quello.Views.CardIndexItem({
      model: card
    });
    this.addSubview("ul.cards-list", cardIndexItem);
  },

  render: function () {
    var renderedContent = this.template({
      list: this.model
    });

    this.attachSubviews();
    this.$el.html(renderedContent);
    return this;
  },

  destroyList: function (event) {
    event.preventDefault();
    this.model.destroy();
  },

  createCard: function (event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON();
    var card = new Quello.Models.Card(formData.card);
    card.set("list_id", this.model.id)
    card.save({}, {
      success: function () {
        this.model.cards().add(card);
      }.bind(this)
    });

    $(event.currentTarget).find("#card-title").val("")
  }
});
