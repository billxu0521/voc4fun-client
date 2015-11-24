/*global ons:false */
/*global app:false */
var _app_ready = function ($scope) {

    ons.ready(function () {
        
        $scope.setup_menu_swipeable();
        $scope.setup_back_hotkey(document.backbutton);
        
        var _name_has_set = false;
        var _navi_html = "target_view.html";
        if (_name_has_set === false) {
            $scope.setSwipeable(false);
            _navi_html = "name.html";
        }
        else {
            var _target_has_set = false;
            if (_target_has_set === false) {
                _navi_html = "target_set.html";
            }
        }
        app.navi.replacePage(_navi_html, {animation: 'none'});
        
    });

};