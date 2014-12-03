var Rabbit = ObjectElement.extend({

    _manager: null,

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
        var changes = {};
        var level = this.getLevel();
        if ((level - grassLevel > 0))
        {
            this.setLevel(--level);
            changes.rabbit = Math.abs(level - grassLevel);
        }
        else
        {
            this._manager.eatGrass(level);

            if (level == Rabbit.REPRODUCT_LEVEL)
            {
                this.setLevel(++level);
            }
        }
        return changes;
    },

    addManager: function(manager)
    {
        this._manager = manager;
    },

    render: function(grassLevel)
    {
        var changes = this._processLevel(grassLevel);
        this.update();
        return changes;
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