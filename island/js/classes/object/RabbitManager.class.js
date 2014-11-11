var RabbitManager = Base.extend({
    _plain: null,
    _rabbits: null,
    _grass: null,

    constructor: function(plain, rabbits)
    {
        this._plain = plain;
        this._rabbits = rabbits;
        this._grass = this._plain.getGrass();
    },

    eatGrass: function(size)
    {
        this._grass.setLevel(this._grass.getLevel() - size);
        this._grass.update();
    }
});