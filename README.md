# ProyectoSoftware
Proyecto de ingeniería de software

## Tema: TodoTech Shop

TodoTech Shop es una tienda de productos de tecnología (computadores, componentes para
computadores, dispositivos externos, complementos e insumos). Su negocio se centra en la venta en
tienda de los productos a través de un mesón. Como los productos son delicados, la venta se hace a
través de un catálogo en papel que tienen los vendedores y quienes son especialistas en el tema, ya
que conocen todos los productos y pueden explicar y recomendar al cliente de acuerdo a lo que
busca.

Se necesita desarrollar un sistema que agilice las ventas en las tiendas, ya que al ser un proceso
totalmente manual, la venta se torna tediosa e incurren en muchos errores (por ejemplo con los
precios de los productos).

### Para el proceso de compra ideal, se busca algo como:

• El vendedor inicia una orden de venta en el sistema añadiendo la información del cliente a la
orden y una clave secreta que el mismo cliente ingresa. Luego ingresará los productos a
partir de un catálogo electrónico que se encuentra en línea con la bodega, de manera tal de
asegurar que el producto seleccionado realmente esté en stock.

• Una vez que se completa la orden de venta, el sistema entregará un número de orden con la
cual el cliente será llamado en la caja para que esta sea pagada.

• El cajero solicitará el pago al cliente por medios de efectivo, tarjeta bancaria, redcompra o
cheque. En el caso de las tarjetas bancarias y redcompra, éstas deberán ser validadas contra
los sistemas de Transbank. En el caso de pago con cheque, se debe ingresar el número de
cheque en el sistema y éste validar con los sistemas de Orsan.

• Luego de realizado el pago, el cajero le entrega el comprobante al cliente quien debe ir a
despacho a retirar sus productos, los cuales están siendo preparados para la entrega.

• El despachador se preocupará de validar el número de orden de venta en el sistema para
indicarle las ubicaciones de los productos en la bodega. Luego preparará el pedido para ser
entregado al cliente quien, con la clave ingresada al principio, deberá corroborar su
aceptación del despacho para luego retirarse con sus productos. Ahí se cierra la orden de
venta.

• El sistema además debe estar en línea con el sistema de inventario que lleva bodega,
permitiendo consultar el stock a cada momento y también actualizarlo cuando los productos
son entregados al clientes y se cierra la orden de venta.

• Todas las ordenes que sean cerradas deben ser almacenadas en el sistema de finanzas para su
contabilidad, en un proceso batch que se realice después del cierre de la tienda (para llevar el
control diario de las ventas). No se requiere información en línea con finanzas.
