var Plain = LocalityElement.extend({
    _grass: null,
    _rabbits: null,

    constructor: function(elementId, modifier)
    {
        this.base(elementId, modifier);

        this._addGrass();
        this._addRabbits();
        this._addHunters();

        if (this.getModifier() == Plain.COAST_DESCRIPTION.MODIFIER)
        {
            this._grass.setCoastSpecifies();
        }
    },

    _addRabbits: function()
    {
        var id = Rabbit.ID_PREFIX + this.id.replace(/\D/g, '');
        var rabbitHtmlString = ContextBuilder.getElementHtmlString(id, Rabbit.CSS_CLASSES);
        this.getDomObject().append(rabbitHtmlString);
        this._rabbits = new Rabbit(id);
        this._rabbits.update();

        this._rabbitManager = new RabbitManager(this, this._rabbits);
        this._rabbits.addManager(this._rabbitManager);
    },

    _addGrass: function()
    {
        this._grass = new Grass(this.id);
        this._grass.render(this.sun.getLevel(), this.rain.getLevel());
        this.getDomObject().addClass(Grass.CSS_DEFAULT_CLASS);
    },

    _addHunters: function()
    {
        var id = Hunter.ID_PREFIX + this.id.replace(/\D/g, '');
        var rabbitHtmlString = ContextBuilder.getElementHtmlString(id, Hunter.CSS_CLASSES);
        this.getDomObject().append(rabbitHtmlString);
        this._hunters = new Hunter(id);
        this._hunters.update();
    },

    _renderGrass: function()
    {
        this._grass.render(this.sun.getLevel(), this.rain.getLevel());
    },

    _renderRabbits: function()
    {
        this._rabbits.render(this._grass.getLevel());
    },

    getGrass: function()
    {
        return this._grass;
    },

    render: function()
    {
        this._renderGrass();
        this._renderRabbits();

        this.base();
    }
},
{
    DESCRIPTION:
    {
        NAME: 'Plain',
        CSS_DEFAULT_CLASS_NAME: 'plain_cell',
        MODIFIER: 'NONE'
    },

    COAST_DESCRIPTION:
    {
        NAME: 'Plain',
        CSS_DEFAULT_CLASS_NAME: 'plain_cell',
        MODIFIER: 'COAST'
    }
});