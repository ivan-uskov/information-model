var LocalityElement = ElementInterface.extend({

    id:   null,
    sun:  null,
    rain: null,
    _modifier: null,

    constructor: function(elementId, modifier)
    {
        this.id = elementId;
        this._modifier = modifier;

        this.base(elementId);

        this._addSun();
        this._addRain();
    },

    _addSun: function()
    {
        var id = Sun.ID_PREFIX + this.id.replace(/\D/g, '');
        var sunHtmlString = ContextBuilder.getElementHtmlString(id, Sun.CSS_CLASSES);
        this.getDomObject().append(sunHtmlString);
        this.sun = new Sun(id);
    },

    _addRain: function()
    {
        var id = Rain.ID_PREFIX + this.id.replace(/\D/g, '');
        var rainHtmlString = ContextBuilder.getElementHtmlString(id, Rain.CSS_CLASSES);
        this.getDomObject().append(rainHtmlString);
        this.rain = new Rain(id);
    },

    _update: function()
    {
        this.base();
        this.sun.update();
        this.rain.update();
    },

    _processWeatherEventByCode: function(code)
    {
        switch (code)
        {
            case WeatherRandom.EVENTS.SUN_INCREASE:
                this.sun.increaseLevel();
                break;
            case WeatherRandom.EVENTS.SUN_DECREASE:
                this.sun.decreaseLevel();
                break;
            case WeatherRandom.EVENTS.RAIN_INCREASE:
                this.rain.increaseLevel();
                break;
            case WeatherRandom.EVENTS.RAIN_DECREASE:
                this.rain.decreaseLevel();
                break;
            default:
                console.log('WeatherRandom Error');
        }
    },

    _renderWeatherElement: function()
    {
        var weatherChangeId = WeatherRandom.getRandomEvent();
        this._processWeatherEventByCode(weatherChangeId);
    },

    setModifier: function(modifier)
    {
        this._modifier = modifier;
    },

    getModifier: function()
    {
        return this._modifier;
    },

    render: function()
    {
        this.base();
        this._renderWeatherElement();
        this._update();
    }
});