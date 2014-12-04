$(function() {

    var M = Mountain.DESCRIPTION; //Mountain
    var P = Plain.DESCRIPTION; //Plain
    var C = Plain.COAST_DESCRIPTION; //Coast
    var R = River.DESCRIPTION; //River
    var params =
    {
        containerId: 'islandContainer',
        field:
        [
            [R, R, R, R, R, R, R, R, R, R],
            [R, C, C, C, C, C, C, C, C, R],
            [R, P, P, P, P, P, P, P, C, R],
            [R, P, P, P, M, M, P, P, C, R],
            [R, P, P, M, M, M, M, P, C, R],
            [R, P, P, M, M, M, M, C, C, R],
            [R, P, P, M, M, M, R, R, C, R],
            [R, P, P, P, P, P, C, R, C, R],
            [R, P, C, C, C, C, C, R, R, R],
            [R, R, R, R, R, R, R, R, R, R]

        ]
    };

    new Context(params);
});