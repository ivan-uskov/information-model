$(function() {

    var M = Mountain.DESCRIPTION; //Mountain
    var P = Plain.DESCRIPTION; //Plain
    var R = River.DESCRIPTION; //River
    var params =
    {
        containerId: 'islandContainer',
        field:
        [
            [M, M, P, P, P],
            [M, M, P, P, P],
            [P, P, P, P, R],
            [P, P, P, P, R],
            [P, P, R, R, R]
        ]
    };

    var context = new Context(params);
});