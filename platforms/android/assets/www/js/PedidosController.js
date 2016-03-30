angular.module('app.controllers', [])
.controller('PedidosCtrl', function ($scope, PedidosService, $ionicModal) {
    $scope.pedidos = {};

    var loadPedidos = function () {
        PedidosService.getPedidos()
        .then(function (pedidos) {
            $scope.pedidos = pedidos;
        });
    };
    loadPedidos();


    $scope.delete = function (pedidoId) {
        PedidosService.deletePedido(pedidoId)
        .then(function () {
            loadPedidos();
        });
    };

    $ionicModal.fromTemplateUrl('templates/novo-pedido.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function() {
        $scope.modal.show();
    };
    $scope.closeModal = function() {
        $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
});