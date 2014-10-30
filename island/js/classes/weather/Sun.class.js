var Sun = WeatherElement.extend({

    constructor: function(elementId)
    {
        this.base(elementId);
        this._square();
    },

    _square: function()
    {
        var domObject = this.getDomObject();
        var originalWidth = domObject.width();
        var originalHeight = domObject.height();

        if (originalWidth < originalHeight)
        {
            domObject.css('height', originalWidth);
        }
        else
        {
            domObject.css('width', originalHeight);
        }
    },

    update: function()
    {
        this.base();

       // this._square();
    }
},
{
    TYPE: 'Sun',
    CSS_CLASSES: 'sun',
    ID_PREFIX: 'sun'
});