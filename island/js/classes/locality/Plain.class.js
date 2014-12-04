var Plain = LocalityElement.extend({
    _grass: null,
    _rabbits: null,
    _wolfs: null,
    type: null,

    constructor: function(elementId, modifier, name)
    {
        this.type = name;
        this.base(elementId, modifier);

        this._addGrass();
        this._addRabbits();
        this._addHunters();
        this._addWolfs();

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

    _addWolfs: function()
    {
        var id = Wolf.ID_PREFIX + this.id.replace(/\D/g, '');
        var wolfHtmlString = ContextBuilder.getElementHtmlString(id, Wolf.CSS_CLASSES);
        this.getDomObject().append(wolfHtmlString);
        this._wolfs = new Wolf(id);
        this._wolfs.update();
    },

    accumulateRabbit: function(size)
    {
        var newSize = this._rabbits.getLevel() + Math.abs(size);

        if (!newSize) return false;

        if (newSize > Rabbit.LEVEL_SIZES.MAX_LEVEL)
        {
            this._rabbits.setLevel(Rabbit.LEVEL_SIZES.MAX_LEVEL);
        }
        else
        {
            this._rabbits.setLevel(newSize);
        }
        return true;
    },

    _renderGrass: function()
    {
        this._grass.render(this.sun.getLevel(), this.rain.getLevel());
    },

    _renderRabbits: function()
    {
        return this._rabbits.render(this._grass.getLevel());
    },

    getGrass: function()
    {
        return this._grass;
    },

    render: function()
    {
        this._renderGrass();
        var changes = this._renderRabbits();

        var hunters = this._hunters.getLevel();
        var wolfs = this._wolfs.getLevel();
        if (hunters > wolfs)
        {
            this._wolfs.setLevel(--wolfs);
            this._wolfs.updateLevelCssClass();
        }
        else
        {
            this._hunters.setLevel(--hunters);
            this._hunters.updateLevelCssClass();
        }

        if (wolfs > 0)
        {
            var rabbits = this._rabbits.getLevel();
            this._rabbits.setLevel(rabbits - wolfs > 0 ? rabbits - wolfs : 0);
        }

        this.base();
        return changes;
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