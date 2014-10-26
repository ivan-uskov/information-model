var Grass = ObjectElement.extend({
    /* 0 = decrease | ! = increase */
    _state: null,
    _level: null,
    _currentSizeClass: null,

    constructor: function(elementId)
    {
        this.base(elementId);

        this._state = Grass.STATE_VALUES.NONE;
    },

    updateLevelCssClass: function()
    {
        var neededSizeClass = Grass.getSizeClassBySize(this._level);
        if (this._currentSizeClass != neededSizeClass)
        {
            var domObject = this.getDomObject();
            domObject.removeClass(this._currentSizeClass);
            domObject.addClass(neededSizeClass);
            this._currentSizeClass = neededSizeClass;
        }
    },

    _increaseLevel: function()
    {
        var canIncrease = (this._level < Grass.LEVEL_SIZES.MAX_LEVEL);
        if (canIncrease)
        {
            this._level++;
            this.update();
        }
        return canIncrease;
    },

    _decreaseLevel: function()
    {
        var canDecrease = (this._level > Grass.LEVEL_SIZES.MIN_LEVEL);
        if (canDecrease)
        {
            this._level--;
            this.update();
        }
        return canDecrease;
    },

    _setMinLevel: function()
    {
        this._level = WeatherElement.LEVEL_SIZES.MIN_LEVEL;
    },

    _setMaxLevel: function()
    {
        this._level = WeatherElement.LEVEL_SIZES.MAX_LEVEL;
    },

    _changeLevelByState: function()
    {
        switch (this._state)
        {
            case Grass.STATE_VALUES.INCREASE:
                this._increaseLevel();
                break;
            case Grass.STATE_VALUES.DECREASE:
                this._decreaseLevel();
                break;
            case Grass.STATE_VALUES.NONE:
                break;
            case Grass.STATE_VALUES.DEAD:
                this._setMinLevel();
                break;
            default:
                console.log('Grass state error');
        }
    },

    _checkNeedStateIncrease: function(sunLevel, rainLevel)
    {
        return (rainLevel == 1 && sunLevel == 1) ||
               (rainLevel == 2 && sunLevel == 1) ||
               (rainLevel == 1 && sunLevel == 2) ||
               (rainLevel == 2 && sunLevel == 2) ||
               (rainLevel == 3 && sunLevel == 2) ||
               (rainLevel == 2 && sunLevel == 3) ||
               (rainLevel == 3 && sunLevel == 3);
    },

    _checkNeedStateDecrease: function(sunLevel, rainLevel)
    {
        return (rainLevel == 0 && sunLevel == 3);
    },

    _checkNeedStateNone: function(sunLevel, rainLevel)
    {
        return (rainLevel == 0 && sunLevel == 0) ||
               (rainLevel == 1 && sunLevel == 0) ||
               (rainLevel == 2 && sunLevel == 0) ||
               (rainLevel == 0 && sunLevel == 1) ||
               (rainLevel == 3 && sunLevel == 1) ||
               (rainLevel == 0 && sunLevel == 2) ||
               (rainLevel == 1 && sunLevel == 3);
    },

    _checkNeedStateDead: function(sunLevel, rainLevel)
    {
        return (rainLevel == 3 && sunLevel == 0);
    },

    _changeStateBySunRainLevel: function(sunLevel, rainLevel)
    {
        if (this._checkNeedStateIncrease(sunLevel, rainLevel))
        {
            this._state = Grass.STATE_VALUES.INCREASE;
        }
        else if (this._checkNeedStateDecrease(sunLevel, rainLevel))
        {
            this._state = Grass.STATE_VALUES.DECREASE;
        }
        else if (this._checkNeedStateDead(sunLevel, rainLevel))
        {
            this._state = Grass.STATE_VALUES.DEAD;
        }
        else if (this._checkNeedStateNone(sunLevel, rainLevel))
        {
            this._state = Grass.STATE_VALUES.NONE;
        }
    },

    update: function()
    {
        this.updateLevelCssClass();
    },

    render: function(sunLevel, rainLevel)
    {
        this._changeLevelByState();
        this._changeStateBySunRainLevel(sunLevel, rainLevel);
        this.update();
    }
},
{
    LEVEL_SIZES:
    {
        MIN_LEVEL:   0,
        MAX_LEVEL:   4
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

    getSizeClassBySize: function(size)
    {
        switch (size)
        {
            case 4:
                return this.CSS_LEVEL_CLASSES.SIZE4;
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