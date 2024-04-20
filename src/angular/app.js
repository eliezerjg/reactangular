import angular from "angular";
import ReactDOM from "react-dom";
import ReactComponent from "../react/components/ReactComponent";

angular.module('myapp', [])
        .controller('MainController', function($scope) {
            $scope.dataFromAngular = "Dados do AngularJS";
            $scope.helloTo = {};
            $scope.helloTo.title = "World, AngularJS";

            $scope.renderReactComponent = function() {
                ReactDOM.render(
                    <ReactComponent dataFromAngular={ $scope.dataFromAngular } />,
                    document.getElementById('app')
                );
            };
        });


