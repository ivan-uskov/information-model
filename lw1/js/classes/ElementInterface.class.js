var ElementInterface = Base.extend({
    _domObject: null,

    constructor: function(elementId)
    {
        this._setDomObject($( '#' + elementId ));
    },

    _setDomObject: function(domObject)
    {
        this._domObject = domObject;
    },

    getDomObject: function()
    {
        return this._domObject;
    },

    update: function()
    {

    },

    render: function()
    {

    }
});