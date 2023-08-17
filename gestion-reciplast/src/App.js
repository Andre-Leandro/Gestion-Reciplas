import Tabla from "./components/Tabla";
import BarraLateral from "./components/BarraLateral";
import { Login, WidthFull } from "@mui/icons-material";
import Navegacion from "./components/Navegacion";
import TablaCompleta from "./components/TablaCompleta";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter, Navigate } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ListadoMP from "./pages/ListadoMP";
import ProductosFabricados from "./pages/ProductosFabricados";
import Pedidos from "./pages/Pedidos";
import Registro from "./pages/Registro";
import AgregarMateriaPrima from "./pages/AgregarMateriaPrima";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Regsitro2 from "./pages/Registro2";
import { useState, useEffect } from "react";
import Compras from "./pages/administracion/Compras";
import NuevoUsuario from "./pages/administracion/NuevoUsuario";
import Registro2 from "./pages/Registro2";
import Prueba from "./pages/Prueba";
import Modals from "./components/Modal";
import Clientes
	from "./pages/administracion/Clientes";
import Proveedores from "./pages/administracion/Proveedores";
import ClientesDeudores from "./pages/administracion/ClientesDeudores";
import DetalleCompra from "./pages/administracion/DetalleCompra";
import DetalleVenta from "./pages/administracion/DetalleVenta";
import RegisterProductPage from "./pages/administracion/RegisterProductPage";
import Hector from "./pages/administracion/RegisterProductPage";
import Ventas from "./pages/administracion/Ventas";
import ComprasRealizadas from "./pages/compras/ComprasRealizadas";
import DetallesCliente from "./pages/ventas/DetallesCliente";
import DetallesPedidos from "./pages/ventas/DetallesPedidos";
import ModificarCliente from "./pages/ventas/ModificarCliente";
import RegistrarPedido from "./pages/ventas/RegistrarPedido";
import ListadoPedidos2 from "./pages/ventas/ListadoPedidos2";
import ListadoProductosFabricados from "./pages/ListadoProductosFabricados";
import ListadoProductosFabricadosAdm from "./pages/administracion/ListadoProductosFabricadosAdm";
import DetallesPedidosProd from "./pages/DetallesPedidosProd";
import IngresosMP from "./pages/IngresosMP";
import DetallesProveedor from "./pages/ventas/DetallesProveedor";
import ModificarProveedor from "./pages/ventas/ModificarProveedor";
import RecyclingIcon from '@mui/icons-material/Recycling';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import SellIcon from '@mui/icons-material/Sell';
import ReorderIcon from '@mui/icons-material/Reorder';
import InventoryIcon from '@mui/icons-material/Inventory';
import ListadoPedidos from "./pages/ventas/ListadoPedidos2";
import AgregarCliente from "./pages/compras/AgregarCliente";
import AgregarProveedor from "./pages/compras/AgregarProveedor";
import Usuarios from "./pages/administracion/Usuarios";
import DetalleUsuario from "./pages/administracion/DetalleUsuario";
import ModificarUsuario from "./pages/administracion/ModificarUsuario";
import ModificarPedido from "./pages/ventas/ModificarPedido";


import ViewListIcon from '@mui/icons-material/ViewList';




const areasData = {
	produccion: [{ nombre: 'Home', link: "/", sub: true, icon: <HomeOutlinedIcon /> },
	{ nombre: 'Materias Primas', link: "materias-primas/agregar", sub: false, icon: <RecyclingIcon />, submenus: [{ nombre: "Ver Stock", link: "materias-primas/listado" }, { nombre: "Agregar", link: "ingreso-materia-prima" }] },
	{ nombre: 'Productos Fabricados', link: "productos-fabricados", sub: true, icon: <InventoryIcon /> },
	{ nombre: 'Pedidos', link: "listado-pedidos", sub: true, icon: <ViewListIcon /> }],

	ventas: [{ nombre: 'Home', link: "/", sub: true, icon: <HomeOutlinedIcon /> },
	{
		nombre: 'Clientes', link: "clientes", sub: true, icon: <ContactsOutlinedIcon />, submenus: [{ nombre: "Pedidos Clientes", link: "listado-pedidos" },
		{ nombre: "Ver Clientes", link: "clientes" }]
	},
	{ nombre: 'Proveedores', link: "proveedores", sub: true, icon: <TransferWithinAStationIcon /> },
	{
		nombre: 'Pedidos', link: "registrar-pedido", sub: false, icon: <ViewListIcon />, submenus: [{ nombre: "Ver pedidos", link: "listado-pedidos" },
		{ nombre: "Agregar pedido", link: "registrar-pedido" }]
	},],

	administracion: [{ nombre: 'Home', link: "/", sub: true, icon: <HomeOutlinedIcon /> },
	{ nombre: 'Materia Prima', link: "materias-primas/listado", sub: true, icon: <RecyclingIcon /> },
	{
		nombre: 'Productos fabricados', link: "productos-fabricados-adm", sub: true, icon: <InventoryIcon />, submenus: [{ nombre: "Ver Stock", link: "stock" },
		{ nombre: "Agregar", link: "registrar-producto" }]
	},
	{ nombre: 'Compras', link: "compras", sub: true, icon: <ShoppingCartIcon /> },
	{ nombre: 'Ventas', link: "ventas", sub: true, icon: <SellIcon /> },
	{
		nombre: 'Usuarios', link: "productos-fabricados", sub: false, icon: <PeopleOutlinedIcon />, submenus: [{ nombre: "Ver Usuarios", link: "listado-usuario" },
		{ nombre: "Agregar", link: "nuevo-usuario" }]
	},
	{
		nombre: 'Clientes', link: "clientes", sub: false, icon: <ContactsOutlinedIcon />, submenus: [{ nombre: "Ver Clientes", link: "clientes" },
		{ nombre: "Deudores", link: "deudores" }]
	},
	{ nombre: 'Proveedores', link: "proveedores", sub: true, icon: <TransferWithinAStationIcon /> },],




	compras: [{ nombre: 'Home', link: "/", sub: true, icon: <HomeOutlinedIcon /> },
	{ nombre: 'Stock Materias Primas', link: "materias-primas/listado", sub: true, icon: <RecyclingIcon /> },
	{ nombre: 'Compras Realizadas', link: "compras-realizadas", sub: true, icon: <ShoppingCartIcon />, submenus: [{ nombre: "Ver Stock", link: "materias-primas/listado" }, { nombre: "Agregar", link: "materias-primas/agregar" }] },]

}



const usuarios = [{ nombre: "Sixto", area: "administracion", contrasena: "sixto" }, { nombre: "Andre", area: "produccion", contrasena: "andre" },
{ nombre: "Gonzalo", area: "compras", contrasena: "gonzalo" }, { nombre: "Nilson", area: "ventas", contrasena: "nilson" }]




function App() {
	document.title = 'Gestion Reciplast';

	const [isLoggedIn, setIsLoggedIn] = useState(() => {
		const storedLoggedInStatus = localStorage.getItem('isLoggedIn');
		return storedLoggedInStatus === 'true';
	});

	useEffect(() => {
		localStorage.setItem('isLoggedIn', isLoggedIn.toString());
	}, [isLoggedIn]);

	const handleLogin = () => {
		setIsLoggedIn(true);
	};

	const [areaEmpresa, setAreaEmpresa] = useState(() => {
		const storedArea = localStorage.getItem('areaEmpresa');
		return storedArea || '';
	});


	useEffect(() => {
		localStorage.setItem('areaEmpresa', areaEmpresa);
	}, [areaEmpresa]);


	const handleArea = (usuarioArea) => {
		setAreaEmpresa(usuarioArea);
	};


	const datosArea = areasData[areaEmpresa] || [];



	const [usuario1, setUsuario1] = useState(() => {
		const storedUsuario1 = localStorage.getItem('usuario1');
		return storedUsuario1 || '';
	});


	useEffect(() => {
		localStorage.setItem('usuario1', usuario1);
	}, [usuario1]);

	return (
		<div>
			<Routes>
				{!isLoggedIn && <Route path="/" element={<Navigate to="/login" replace />} />}

				<Route path="login" element={<Registro2  accion={handleLogin} usuarios={usuarios} handleArea={handleArea} setUsuario1={setUsuario1} />} />

				<Route path="/" element={<Layout area={areaEmpresa} data={datosArea} accion={setIsLoggedIn} />}>
					{/* Rutas protegidas */}
					<Route path="materias-primas/listado" element={<ListadoMP />} />
					<Route path="materias-primas/agregar" element={<ProductosFabricados />} />
					<Route path="productos-fabricados" element={<ListadoProductosFabricados />} />
					<Route path="productos-fabricados-adm" element={<ListadoProductosFabricadosAdm />} />
					<Route path="pedidos" element={<Pedidos />} />
					<Route path="/" element={<Home usuario1={usuario1} />} />
					<Route path="modificar-stock-producto" element={<ProductosFabricados />} />
					<Route path="registrar-producto" element={<RegisterProductPage />} />
					<Route path="compras" element={<Compras />} />
					<Route path="nuevo-usuario" element={<NuevoUsuario />} />
					<Route path="ventas" element={<Ventas />} />
					<Route path="clientes" element={<Clientes />} />
					<Route path="proveedores" element={<Proveedores />} />
					<Route path="deudores" element={<ClientesDeudores />} />
					<Route path="detalle-compra" element={<DetalleCompra />} />
					<Route path="detalle-venta" element={<DetalleVenta />} />
					<Route path="compras-realizadas" element={<ComprasRealizadas />} />
					<Route path="registrar-pedido" element={<RegistrarPedido />} />
					<Route path="modificar-cliente" element={<ModificarCliente />} />
					<Route path="listado-pedidos" element={<ListadoPedidos />} />
					<Route path="detalles-pedidos" element={<DetallesPedidos />} />
					<Route path="detalles-pedidos-prod" element={<DetallesPedidosProd />} />
					<Route path="detalles-cliente" element={<DetallesCliente />} />
					<Route path="ingreso-materia-prima" element={<IngresosMP />} />
					<Route path="detalles-proveedor" element={<DetallesProveedor />} />
					<Route path="modificar-proveedor" element={<ModificarProveedor />} />
					<Route path="agregar-proveedor" element={<AgregarProveedor />} />
					<Route path="agregar-cliente" element={<AgregarCliente />} />
					<Route path="listado-usuario" element={<Usuarios />} />
					<Route path="detalle-usuario" element={<DetalleUsuario />} />
					<Route path="modificar-usuario" element={<ModificarUsuario />} />
					<Route path="modificar-pedido" element={<ModificarPedido />} />




				</Route>
			</Routes>
		</div>
	);
}

export default App;