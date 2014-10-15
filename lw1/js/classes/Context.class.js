var Context = Base.extend({

    _content:        null,
    _containerId:    null,
    _contextBuilder: null,
    _interval:       null,

    constructor: function(params)
    {
        this._container = $('#' + params.containerId);
        this._contextBuilder = new ContextBuilder(this._container);
        this._content = this._contextBuilder.renderContext(params.field);
        this._initInterval();
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

    _renderFrame: function()
    {
        this._iterateCells();
    },

    _iterateCells: function()
    {
        for (var i = 0; i < this._content.length; i++)
        {
            var currCell = this._content[i];
            currCell.render();
        }
    }
},
{
    FRAME_TIMEOUT: 2000
});