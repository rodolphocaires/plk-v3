angular.module('app.services', [])
.factory('PedidosService', function ($q) {
    var pedidos = [
        {
            id: 1,
            valor: 10
        } ,
        {
            id: 2,
            valor: 92.12
        },
        {
            id: 3,
            valor: 291362.19319
        }
    ];

    var _getPedidos = function () {
        var deferred = $q.defer();
        deferred.resolve(pedidos);
        return deferred.promise;
    };

    var _getPedidoById = function (pedidoId) {
        var deferred = $q.defer();
        var pedido = pedidos.filter(function (item) {
            return item.id == parseInt(pedidoId);
        })[0];
        deferred.resolve(pedido);
        return deferred.promise;
    };

    var _addPedido = function (pedido) {
        var deferred = $q.defer();
        pedido.id = pedidos.length + 1;
        pedidos.push(pedido);
        deferred.resolve();
        return deferred.promise;
    };

    var _deletePedido = function (pedidoId) {
        var deferred = $q.defer();
        var filtered = pedidos.filter(function (item) {
            return item.id !== pedidoId;
        });
        pedidos = filtered;
        deferred.resolve();
        return deferred.promise;
    };

    return {
        getPedidos: _getPedidos,
        getPedidoById: _getPedidoById,
        addPedido: _addPedido,
        deletePedido: _deletePedido
    };
});