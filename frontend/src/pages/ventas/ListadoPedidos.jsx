
import TablaPedidos from "../../components/TablaPedidos";
import Navegacion from "../../components/Navegacion";

function ListadoPedidos() {
  return (
    <>
      <div className="Page">
        <div style={{ width: "100%", paddingBottom: "30px" }}>
          <h1 style={{ margin: "0" }}>LISTADO DE PEDIDOS</h1>
          <Navegacion />
        </div>
        <div className="Caja" style={{position:"sticky"}}>
          <TablaPedidos/>
        </div>
      </div>
    </>
  );
}

export default ListadoPedidos;