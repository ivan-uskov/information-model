var Hunter = ObjectElement.extend({

    constructor: function(elementId)
    {
        this.base(elementId);
        this.setLevel(Hunter.LEVEL_SIZES.MAX_LEVEL);
    },

    update: function()
    {
        this.updateLevelCssClass();
    },

    _processLevel: function(rabbitLevel)
    {
        var level = this.getLevel();

        if ((level > rabbitLevel))
        {
            this.setLevel(--level);
        }
    },

    render: function(rabbitLevel)
    {
        this._processLevel(rabbitLevel);
        this.update();
    }

}, {

    LEVEL_SIZES:
    {
        MIN_LEVEL: 0,
        MAX_LEVEL: 3
    },

    CSS_DEFAULT_CLASS: 'hunter',

    TYPE: 'Hunter',
    CSS_CLASSES: 'hunter',
    ID_PREFIX: 'Hunter'
});