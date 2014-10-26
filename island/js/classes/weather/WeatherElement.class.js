var WeatherElement = ElementInterface.extend({
    _level:     null,
    _currentSizeClass: null,

    constructor: function(elementId)
    {
        this.base(elementId);
        this._level = WeatherElement.LEVEL_SIZES.MIN_LEVEL;
    },

    increaseLevel: function()
    {
        var canIncrease = (this._level < WeatherElement.LEVEL_SIZES.MAX_LEVEL);
        if (canIncrease)
        {
            this._level++;
            this.update();
        }
        return canIncrease;
    },

    decreaseLevel: function()
    {
        var canDecrease = (this._level > WeatherElement.LEVEL_SIZES.MIN_LEVEL);
        if (canDecrease)
        {
            this._level--;
            this.update();
        }
        return canDecrease;
    },

    setMinLevel: function()
    {
        this._level = WeatherElement.LEVEL_SIZES.MIN_LEVEL;
    },

    setMaxLevel: function()
    {
        this._level = WeatherElement.LEVEL_SIZES.MAX_LEVEL;
    },

    getLevel: function()
    {
        return this._level;
    },

    update: function()
    {
        this.base();
        this.updateLevelCssClass();
    },

    updateLevelCssClass: function()
    {
        var neededSizeClass = WeatherElement.getSizeClassBySize(this._level);
        if (this._currentSizeClass != neededSizeClass)
        {
            var domObject = this.getDomObject();
            domObject.removeClass(this._currentSizeClass);
            domObject.addClass(neededSizeClass);
            this._currentSizeClass = neededSizeClass;
        }
    },

    render: function()
    {
        this.base();
    },

    renderFrame: function()
    {

    }
},
{
    LEVEL_SIZES:
    {
        MIN_LEVEL:   0,
        MAX_LEVEL:   3
    },

    CSS_LEVEL_CLASSES:
    {
        SIZE0: 'size0',
        SIZE1: 'size1',
        SIZE2: 'size2',
        SIZE3: 'size3'
    },

    getSizeClassBySize: function(size)
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