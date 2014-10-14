var WeatherElement = ElementInterface.extend({
    _level:     null,

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

    update: function()
    {
        this.base();
    },

    render: function()
    {
        this.base();
    }
},
{
    LEVEL_SIZES:
    {
        MIN_LEVEL:   1,
        MAX_LEVEL:   3
    }
});