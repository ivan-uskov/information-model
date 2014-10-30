var ObjectElement = ElementInterface.extend({

    _currentSizeClass: null,
    _level: null,

    setLevel: function(newLevel)
    {
        this._level = newLevel;
    },

    getLevel: function()
    {
        return this._level;
    },

    updateLevelCssClass: function()
    {
        var neededSizeClass = ObjectElement.getSizeClassByLevel(this._level);
        if (this._currentSizeClass != neededSizeClass)
        {
            var domObject = this.getDomObject();
            domObject.removeClass(this._currentSizeClass);
            domObject.addClass(neededSizeClass);
            this._currentSizeClass = neededSizeClass;
        }
    }
},
{
    LEVEL_SIZES:
    {
        MIN_LEVEL:   null,
        MAX_LEVEL:   null
    },

    STATE_VALUES:
    {
        DECREASE: 0,
        INCREASE: 1,
        NONE:     2,
        DEAD:     3
    },


    CSS_DEFAULT_CLASS: 'grass',
    CSS_LEVEL_CLASSES:
    {
        SIZE0: 'size0',
        SIZE1: 'size1',
        SIZE2: 'size2',
        SIZE3: 'size3',
        SIZE4: 'size4'
    },

    getSizeClassByLevel: function (size)
    {
        switch (size)
        {
            case 3:
                return this.CSS_LEVEL_CLASSES.SIZE3;
            case 2:
                return this.CSS_LEVEL_CLASSES.SIZE2;
            case 1:
                return this.CSS_LEVEL_CLASSES.SIZE1;
            default:
                return this.CSS_LEVEL_CLASSES.SIZE0;
        }
    }
});
