angular.module('app.controllers')
.controller('PedidoCtrl', function ($scope, $stateParams, PedidosService) {
    $scope.pedido = {};

    PedidosService.getPedidoById($stateParams.pedidoId)
    .then(function (pedido) {
        $scope.pedido = pedido;
    });
});