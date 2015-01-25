var Mountain = LocalityElement.extend({

    type: null,

    constructor: function(elementId, modifier, name)
    {
        this.type = name;
        this.base(elementId, modifier, name);
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
        NAME: 'Mountain',
        CSS_DEFAULT_CLASS_NAME: 'mountain_cell',
        MODIFIER: 'NONE'
    }
});