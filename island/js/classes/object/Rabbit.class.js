var Rabbit = ObjectElement.extend({

    constructor: function(elementId)
    {
        this.base(elementId);
        this.setLevel(Rabbit.LEVEL_SIZES.MAX_LEVEL);
    },

    update: function()
    {
        this.updateLevelCssClass();
    },

    _processLevel: function(grassLevel)
    {
        var level = this.getLevel();

        if ((level > grassLevel) || (grassLevel == Grass.LEVEL_SIZES.MAX_LEVEL))
        {
            this.setLevel(--level);
        }
        else if (level == Rabbit.REPRODUCT_LEVEL)
        {
            this.setLevel(++level);
        }
    },

    render: function(grassLevel)
    {
        this._processLevel(grassLevel);
        this.update();
    }

}, {

    LEVEL_SIZES:
    {
        MIN_LEVEL: 0,
        MAX_LEVEL: 3
    },

    REPRODUCT_LEVEL: 2,

    CSS_DEFAULT_CLASS: 'rabbit',

    TYPE: 'Rabbit',
    CSS_CLASSES: 'rabbit',
    ID_PREFIX: 'Rabbit'
});