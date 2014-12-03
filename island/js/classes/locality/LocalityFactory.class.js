var LocalityFactory = Base.extend({

},
{
    newLocality: function(name, id, modifier)
    {
        switch (name)
        {
            case Mountain.DESCRIPTION.NAME:
                return new Mountain(id, modifier, name);
            case River.DESCRIPTION.NAME:
                return new River(id, modifier, name);
            default:
                return new Plain(id, modifier, name);
        }
    }
});