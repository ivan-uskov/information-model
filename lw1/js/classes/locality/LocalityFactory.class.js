var LocalityFactory = Base.extend({

},
{
    newLocality: function(name, id)
    {
        switch (name)
        {
            case Mountain.DESCRIPTION.NAME:
                return new Mountain(id);
            case River.DESCRIPTION.NAME:
                return new River(id);
            default:
                return new Plain(id);
        }
    }
});