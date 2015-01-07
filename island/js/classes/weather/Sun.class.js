var Sun = WeatherElement.extend({

    constructor: function(elementId)
    {
        this.base(elementId);
    },

    update: function()
    {
        this.base();
    }
},
{
    TYPE: 'Sun',
    CSS_CLASSES: 'sun',
    ID_PREFIX: 'sun'
});