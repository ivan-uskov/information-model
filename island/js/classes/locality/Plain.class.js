var Plain = LocalityElement.extend({
    _grass: null,
    _rabbits: null,

    constructor: function(elementId)
    {
        this.base(elementId);

        this._addGrass();
        this._addRabbits();
    },

    _addRabbits: function()
    {
        var id = Rabbit.ID_PREFIX + this.id.replace(/\D/g, '');
        var rabbitHtmlString = ContextBuilder.getElementHtmlString(id, Rabbit.CSS_CLASSES);
        this.getDomObject().append(rabbitHtmlString);
        this._rabbits = new Rabbit(id);
        this._rabbits.update();
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

    _renderRabbits: function()
    {
        this._rabbits.render(this._grass.getLevel());
    },

    render: function()
    {
        this.base();

        this._renderGrass();
        this._renderRabbits();
    }
},
{
    DESCRIPTION:
    {
        NAME: 'Plain',
        CSS_DEFAULT_CLASS_NAME: 'plain_cell'
    }
});