var controller_rank = function ($scope) {

    var _ctl = {};

    var _log_file = "controller_rank.js";

    // ------------------------------

    var _var = {};

    _var.user_set_target = {
        "target":0,
        "done":0
    };

    _var.user_done = {
        "learn_flashcard":0,
        "take_note":0,
        "test_select":0
    };
    _var.yesterday_target_data = {
        "learn_flashcard":{
            "target":0,
            "done":0
        },
        "take_note":{
            "target":0,
            "done":0
        },
        "test_select":{
            "target":0,
            "done":0
        }
    }

    _ctl.var = _var;

    // ----------------------------------------

    var _init_status = function () {

        return this;
    };
    _init_status();

    // --------------------

    _ctl.enter = function (_callback) {
        $scope.ctl_target.get_yesterday_target_data(function (_target_data) {
            console.log(_target_data);
            _var.yesterday_target_data = _target_data;
            app.navi.replacePage("rank.html", {
                "animation": "none",
                "onTransitionEnd": _callback
                    });
        });
    };

    //-----------------

    $scope.ctl_rank = _ctl;
};