$(function() {

    var M = Mountain.DESCRIPTION; //Mountain
    var P = Plain.DESCRIPTION; //Plain
    var R = River.DESCRIPTION; //River
    var params =
    {
        containerId: 'islandContainer',
        field:
        [
            [R, R, R, R, R, R, R, R, R, R],
            [R, P, P, P, P, P, P, P, P, R],
            [R, P, P, P, P, P, P, P, P, R],
            [R, P, P, P, M, M, P, P, P, R],
            [R, P, P, M, M, M, M, P, P, R],
            [R, P, P, M, M, M, M, P, P, R],
            [R, P, P, M, M, M, R, R, P, R],
            [R, P, P, P, P, P, P, R, P, R],
            [R, P, P, P, P, P, P, R, R, R],
            [R, R, R, R, R, R, R, R, R, R]

        ]
    };

    new Context(params);
});