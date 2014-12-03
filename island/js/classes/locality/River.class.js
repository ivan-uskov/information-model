var River = LocalityElement.extend({

     type: null,

    constructor: function(elementId, modifier, name)
    {
        this.type = name;
        this.base(elementId, modifier);
    },

    render: function()
    {
        this.base();
        return {};
    }

},
{
    DESCRIPTION:
    {
        NAME: 'River',
        CSS_DEFAULT_CLASS_NAME: 'river_cell',
        MODIFIER: 'NONE'
    }
});