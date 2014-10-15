var WeatherRandom = Base.extend({
},
{
    EVENTS:
    {
        SUN_INCREASE:  0,
        SUN_DECREASE:  1,
        RAIN_INCREASE: 2,
        RAIN_DECREASE: 3
    },

    EVENTS_TOP_BORDER: 3, //length of EVENTS

    getRandomEvent: function()
    {
        return parseInt(Math.random() * (WeatherRandom.EVENTS_TOP_BORDER));
    }
});