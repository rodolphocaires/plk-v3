angular.module('app.controllers')
.controller('NovoPedidoCtrl', function ($scope, PedidosService) {
    $scope.cancel = function () {
        $scope.closeModal();
    };

    $scope.pedido = {};

    $scope.save = function () {
        PedidosService.addPedido($scope.pedido)
        .then(function () {
            $scope.pedido = {};
            $scope.closeModal();
        });
    };
});