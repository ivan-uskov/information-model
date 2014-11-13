var Wolf= ObjectElement.extend({

    constructor: function(elementId)
    {
        this.base(elementId);
        this.setLevel(Wolf.LEVEL_SIZES.MAX_LEVEL);
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
        else
        {
            if (level == Wolf.REPRODUCT_LEVEL)
            {
                this.setLevel(++level);
            }
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

    REPRODUCT_LEVEL: 2,

    CSS_DEFAULT_CLASS: 'wolf',

    TYPE: 'Wolf',
    CSS_CLASSES: 'wolf',
    ID_PREFIX: 'Wolf'
});