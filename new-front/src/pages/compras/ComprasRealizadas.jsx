import * as React from "react";
import { Grid, Typography, Button } from "@mui/material";
import TablaCompras from "../../components/TablaCompras";
import { useState } from "react";
import Navegacion from "../../components/Navegacion";
import CssBaseline from "@mui/material/CssBaseline";
import Modal from "react-overlays/Modal";
import "../../componentsStyles.css";

function Buscador({ searchTerm, onSearchTermChange }) {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => onSearchTermChange(e.target.value)}
      placeholder="Buscar proveedor"
    />
  );
}

export default function ComprasRealizadas() {
  const [searchTerm, setSearchTerm] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [showModal1, setShowModal1] = useState(false);

  // Backdrop JSX code
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  var handleClose = () => setShowModal(false);

  var handleClose1 = () => setShowModal1(false);

  const handlePrint = () => {
    setShowModal(true);
  };

  return (
    <div className="Page">
      <div className="ParteSuperior">
        <div style={{ padding: "0px 0px 20px 20px" }}>
          <Navegacion />
        </div>
        <h1 style={{ margin: "0" }}>COMPRAS PENDIENTES DE PAGO</h1>
      </div>
      <div className="Caja">
        <CssBaseline />
        <TablaCompras />
        <div
          style={{
            textAlign: "right",
            width: "100%",
            padding: "20px 0 20px 0",
          }}
        >
          <Modal
            className="modal"
            show={showModal}
            onHide={handleClose}
            renderBackdrop={renderBackdrop}
          >
            <div>
              <div className="modal-header">
                <div>
                  <span className="close-button" onClick={handleClose}>
                    x
                  </span>
                </div>
              </div>
              <div className="modal-desc">
                <p>¿Seguro desea registrar el pago?</p>
              </div>
              <div className="modal-footer">
                <button className="secondary-button" onClick={handleClose}>
                  Cancelar
                </button>
                <button
                  className="primary-button"
                  onClick={() => setShowModal1(true)}
                >
                  Aceptar
                </button>
                <Modal
                  className="modal"
                  show={showModal1}
                  onHide={handleClose}
                  renderBackdrop={renderBackdrop}
                >
                  <div>
                    <div className="modal-header">
                      <div>
                        <span
                          className="close-button"
                          onClick={() => {
                            setShowModal1(false);
                            setShowModal(false);
                          }}
                        >
                          x
                        </span>
                      </div>
                    </div>
                    <div className="modal-desc">
                      <p>Pago registrado con éxito</p>
                    </div>
                    <div className="modal-footer">
                      <button
                        className="primary-button"
                        onClick={() => {
                          setShowModal1(false);
                          setShowModal(false);
                        }}
                      >
                        Aceptar
                      </button>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </Modal>

          <button
            className="Button"
            onClick={() => {
              setShowModal(true);
            }}
          >
            REGISTRAR PAGO
          </button>
        </div>
      </div>
    </div>
  );
}