var LocalityElement = ElementInterface.extend({

    id:   null,
    sun:  null,
    rain: null,

    constructor: function(elementId)
    {
        this.id = elementId;

        this.base(elementId);

        this._addSun();
        this._addRain();
    },

    _addSun: function()
    {
        var id = Sun.ID_PREFIX + parseInt(this.id);
        var sunHtmlString = ContextBuilder.getElementHtmlString(id, Sun.CSS_CLASSES);
        this.getDomObject().append(sunHtmlString);
        this.sun = new Sun(id);
    },

    _addRain: function()
    {
        var id = Rain.ID_PREFIX + parseInt(this.id);
        var rainHtmlString = ContextBuilder.getElementHtmlString(id, Rain.CSS_CLASSES);
        this.getDomObject().append(rainHtmlString);
        this.rain = new Rain(id);
    },

    update: function()
    {
        this.base();
    },

    render: function()
    {
        this.base();
    }
});