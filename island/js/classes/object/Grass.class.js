var Grass = ObjectElement.extend({
    /* 0 = decrease | ! = increase */
    _state: null,
    _currentSizeClass: null,
    changeStateFunc: null,

    constructor: function(elementId)
    {
        this.base(elementId);

        this._state = Grass.STATE_VALUES.INCREASE;
        this.setLevel(this._getStartLevel());
        this.changeStateFunc = this._changeStateBySunRainLevel;
    },

    _increaseLevel: function()
    {
        var level = this.getLevel();
        var canIncrease = (level < Grass.LEVEL_SIZES.MAX_LEVEL);
        if (canIncrease)
        {
            this.setLevel(level + 1);
        }
        return canIncrease;
    },

    _decreaseLevel: function()
    {
        var level = this.getLevel();
        var canDecrease = (level > Grass.LEVEL_SIZES.MIN_LEVEL);
        if (canDecrease)
        {
            this.setLevel(--level);
        }
        return canDecrease;
    },

    _setMinLevel: function()
    {
        this.setLevel(WeatherElement.LEVEL_SIZES.MIN_LEVEL);
    },

    _setMaxLevel: function()
    {
        this.setLevel(WeatherElement.LEVEL_SIZES.MAX_LEVEL);
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
        return (rainLevel > 0) ||
               (sunLevel > 0) ||
               (!(rainLevel == 3 && sunLevel == 1));
    },

    _checkNeedStateDecrease: function(sunLevel, rainLevel)
    {
        return (rainLevel == 0 && sunLevel == 3);
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
        else
        {
            this._state = Grass.STATE_VALUES.NONE;
        }
    },

    setCoastSpecifies: function()
    {
        this.changeStateFunc = this._changeStateBySunRainLevelAroundCoast;
    },

    _changeStateBySunRainLevelAroundCoast: function(sunLevel, rainLevel)
    {
        if (sunLevel > WeatherElement.LEVEL_SIZES.MIN_LEVEL)
        {
            this._state = Grass.STATE_VALUES.INCREASE;
        }
        else if (rainLevel == WeatherElement.LEVEL_SIZES.MAX_LEVEL)
        {
            this._state = Grass.STATE_VALUES.DECREASE;
        }
        else
        {
            this._state = Grass.STATE_VALUES.NONE;
        }
    },

    _getStartLevel: function()
    {
          return parseInt(Math.random() * (Grass.LEVEL_SIZES.MAX_LEVEL + 1));
    },

    update: function()
    {
        this.updateLevelCssClass();
    },

    render: function(sunLevel, rainLevel)
    {
        this._changeLevelByState();
        this.changeStateFunc(sunLevel, rainLevel);
        this.update();
    }
},
{
    LEVEL_SIZES:
    {
        MIN_LEVEL: 0,
        MAX_LEVEL: 4
    },

    STATE_VALUES:
    {
        DECREASE: 0,
        INCREASE: 1,
        NONE:     2,
        DEAD:     3
    },

    CSS_DEFAULT_CLASS: 'grass'
});