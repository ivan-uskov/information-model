var Context = Base.extend({

    _content:        null,
    _containerId:    null,
    _contextBuilder: null,

    constructor: function(params)
    {
        this._container = $('#' + params.containerId);
        this._contextBuilder = new ContextBuilder(this._container);
        this._content = this._contextBuilder.renderContext(params.field);
    }

});