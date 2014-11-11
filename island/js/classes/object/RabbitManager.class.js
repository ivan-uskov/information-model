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

    tryEatGrass: function(size)
    {
        var grassLevel = this._grass.getLevel();
        if (grassLevel > size)
        {
            return false;
        }

        this._grass.setLevel(grassLevel - size);
        this._grass.update();
        return true;
    }
});