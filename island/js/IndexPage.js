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
            [R, C, P, P, P, P, P, P, C, R],
            [R, C, P, P, P, P, P, P, C, R],
            [R, C, P, M, M, M, P, P, C, R],
            [R, C, M, M, P, P, C, C, C, R],
            [R, C, M, M, M, M, R, R, C, R],
            [R, C, P, P, P, C, R, C, C, R],
            [R, C, C, C, C, C, C, C, R, R],
            [R, R, R, R, R, R, R, R, R, R]

        ]
    };

    new Context(params);

    console.log(function(){
        /*
         S     Start iterate island life
         E     End iterate island life
         W     Add wolfs
         H     Add Hunters
         R     Add Rabbits
         ->    Do One iterate
         */}.toString());
});