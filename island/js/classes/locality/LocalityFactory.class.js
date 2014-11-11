var LocalityFactory = Base.extend({

},
{
    newLocality: function(name, id, modifier)
    {
        switch (name)
        {
            case Mountain.DESCRIPTION.NAME:
                return new Mountain(id, modifier);
            case River.DESCRIPTION.NAME:
                return new River(id, modifier);
            default:
                return new Plain(id, modifier);
        }
    }
});