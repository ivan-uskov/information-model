var Context = Base.extend({

    _content:        null,
    _containerId:    null,
    _contextBuilder: null,
    _interval:       null,
    _length:         null,

    constructor: function(params)
    {
        this._container = $('#' + params.containerId);
        this._contextBuilder = new ContextBuilder(this._container);
        this._content = this._contextBuilder.renderContext(params.field);
        this._length = params.field.length;
      //  this._initInterval();
        this._initHandlers();
    },

    _initInterval: function()
    {
        var thisPtr = this;
        this._interval = setInterval(function(){ thisPtr._renderFrame() }, Context.FRAME_TIMEOUT);
    },

    _clearInterval: function()
    {
        clearInterval(this._interval);
    },

    _initHandlers: function()
    {
        var thisPtr = this;

        $(document).keydown(function(e)
        {
            switch (e.which)
            {
                case 39: // ->
                {
                    thisPtr._renderFrame();
                    break;
                }
                case 82: //R
                {
                    thisPtr.addRabbits();
                    break;
                }
                case 87: //W
                {
                    thisPtr.addWolfs();
                    break;
                }
                case 72: //H
                {
                    thisPtr.addHunters();
                    break;
                }
            }
        });
    },

    _renderFrame: function()
    {
        this._iterateCells();
    },

    _iterateCells: function()
    {
        for (var i = 0; i < this._content.length; i++)
        {
            var currCell = this._content[i];
            var changes = currCell.render();
            if (Object.keys(changes).length !== 0 && currCell.type == Plain.DESCRIPTION.NAME)
            {
                this._applyChanges(i, changes);
            }
        }
    },

    _applyChanges: function(id, changes)
    {
        var ids = this._getNeighborPlainId(id);
        if (ids.length > 0 && changes.rabbit > 0)
        {
            var newId = this._findPlainForRabbitIncrease(ids);
            var plain = this._content[newId];
            plain.accumulateRabbit(changes.rabbit);
        }
    },

    _getNeighborPlainId: function(id)
    {
        var neighbors = [];
        if (id + 1 < this._content.length && this._checkPlain(this._content[id + 1].type))
        {
            neighbors.push(id + 1);
        }
        if (id - 1 >= 0 && this._checkPlain(this._content[id - 1].type))
        {
            neighbors.push(id - 1);
        }
        if (id - this._length >= 0 && this._checkPlain(this._content[id - this._length].type))
        {
            neighbors.push(id - this._length);
        }
        if (id + this._length < this._content.length && this._checkPlain(this._content[id + this._length].type))
        {
            neighbors.push(id + this._length);
        }
        return neighbors;
    },

    _findPlainForRabbitIncrease: function(ids)
    {
        var minRabbitSquare = ids[0];
        for (var i = 0; i < ids.length; ++i)
        {
            if (this._content[minRabbitSquare]._rabbits.getLevel() > this._content[ids[i]]._rabbits.getLevel())
            {
                minRabbitSquare = ids[i];
            }
        }
        return minRabbitSquare;
    },

    addRabbits: function()
    {
        for (var i = 0; i < this._content.length; i++)
        {
            try
            {
                this._content[i].increaseRabbits();
            }
            catch(e)
            {

            }

        }
    },

    addWolfs: function()
    {
        for (var i = 0; i < this._content.length; i++)
        {
            try
            {
                this._content[i].increaseWolfs();
            }
            catch(e)
            {

            }

        }
    },

    addHunters: function()
    {
        for (var i = 0; i < this._content.length; i++)
        {
            try
            {
               this._content[i].increaseHunters();
            }
            catch(e) {}
        }
    },

    _checkPlain: function(name)
    {
        return name == Plain.DESCRIPTION.NAME || name  == Plain.COAST_DESCRIPTION.NAME;
    }

},
{
    FRAME_TIMEOUT: 4000
});