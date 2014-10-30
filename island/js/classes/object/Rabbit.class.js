var Rabbit = ObjectElement.extend({
    _level: null,

    update: function()
    {
        this.updateLevelCssClass();
    },

    render: function(grassLevel)
    {
        this.setLevel(grassLevel);
        this.update();
    }

}, {

    LEVEL_SIZES:
    {
        MIN_LEVEL: 0,
        MAX_LEVEL: 3
    },

    CSS_DEFAULT_CLASS: 'rabbit',

    TYPE: 'Rabbit',
    CSS_CLASSES: 'rabbit',
    ID_PREFIX: 'Rabbit'
});