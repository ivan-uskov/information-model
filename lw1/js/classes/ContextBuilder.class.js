var ContextBuilder = Base.extend({
    //TODO: CodeReview and Refactor
    _container: null,
    _xLength:   null,
    _yLength:   null,

    constructor: function(container)
    {
        this._container = container;
    },

    renderContext: function(islandMapArray)
    {
        this._yLength = islandMapArray.length;
        this._xLength = islandMapArray[0].length;
        var content = [];
        for (var lineId = 0; lineId < islandMapArray.length; lineId++)
        {
            var elements = [];
            for (var eltId = 0; eltId < islandMapArray[lineId].length; eltId++)
            {
                var element = this._collectElementsInfo(islandMapArray[lineId][eltId], lineId, eltId);
                elements.push(element);
            }
            this._appendLine(elements);
            var newElements = this._initElements(elements);
            content = content.concat(newElements);
        }
        return content;
    },

    _collectElementsInfo: function(eltDescription, lineId, eltId)
    {
        var name = eltDescription.NAME;
        var id = name + this._getIdPostfixByPosition(lineId, eltId);
        var cssClassName = eltDescription.CSS_DEFAULT_CLASS_NAME;
        return {
            id: id,
            name: name,
            stringValue: this._getElementStringById(id, cssClassName)
        };
    },

    _appendLine: function(elements)
    {
        var elementsString = '';
        for (var i = 0; i < elements.length; i++)
        {
            elementsString += elements[i].stringValue;
        }
        var line = '<div class="island_line">' + elementsString + '<div class="clear"></div></div>';
        this._container.append(line);
    },

    _getElementStringById: function(id, cssClassName)
    {
        return '<div class="island_cell ' + cssClassName + '" id="' + id + '"></div>';
    },

    _getIdPostfixByPosition: function(lineId, eltId)
    {
        return lineId * this._xLength + eltId;
    },

    _initElements: function(elements)
    {
        var newObjects = [];
        for (var i = 0; i < elements.length; i++)
        {
            var newObj = LocalityFactory.newLocality(elements[i].name, elements[i].id);
            newObjects.push(newObj);
        }
        return newObjects;
    }
},
{
    getElementHtmlString: function(id, clases)
    {
        return '<div class="' + clases + '" id="' + id + '"></div>';
    }
});