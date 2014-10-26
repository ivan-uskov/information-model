var Plain = LocalityElement.extend({
    _grass: null,

    constructor: function(elementId)
    {
        this.base(elementId);

        this._addGrass();
    },

    _addGrass: function()
    {
        this._grass = new Grass(this.id);
        this._grass.render(this.sun.getLevel(), this.rain.getLevel());
        this.getDomObject().addClass(Grass.CSS_DEFAULT_CLASS);
    },

    _renderGrass: function()
    {
        this._grass.render(this.sun.getLevel(), this.rain.getLevel());
    },

    render: function()
    {
        this.base();

        this._renderGrass();
    }
},
{
    DESCRIPTION:
    {
        NAME: 'Plain',
        CSS_DEFAULT_CLASS_NAME: 'plain_cell'
    }
});