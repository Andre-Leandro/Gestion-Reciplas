import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

export default function CustomModal({
  isOpen,
  onClose,
  guardar = false,
  title,
  content,
  onSave,
  cancelar = false,
  aceptar = false,
}) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white", // Fondo blanco
    borderRadius: 2, // Bordes redondeados
    boxShadow: 5,
    p: 4,
    textAlign: "center", // Alineación del contenido al centro
  };

  const buttonStyle = {
    // backgroundColor: 'black',
    // color: 'white',
    color: 'red',
    border: '1px solid black',
    borderColor: 'red',
    marginTop: 8,
  };


  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          variant="h6"
          component="h2"
          mb={2}
          style={{ fontWeight: "bold" }}
        >
          {title}
        </Typography>

        <Typography mb={2}>{content}</Typography>
        <Button
          onClick={onClose}
          style={buttonStyle}
          // variant="contained"
        >
          Cerrar
        </Button>
        {guardar && (
          <Button
            onClick={() => {
              onSave();
              onClose();
            }}
            style={{ marginLeft: 15, marginTop: 8, }}
            color="primary"
            variant="contained"
          >
            Guardar
          </Button>
        )}
        {aceptar && (
          <Button
            onClick={() => {
              onSave();
              onClose();
            }}
            style={{ marginLeft: 15, marginTop: 8, }}
            color="primary"
            variant="contained"
          >
            Aceptar
          </Button>
        )}
        {cancelar && (
          <Button
            onClick={() => {
              onSave();
              onClose();
            }}
            style={{ ...buttonStyle, marginLeft: 15 }}
            color="error"
            // variant="outlined"
          >
            Cancelar
          </Button>
        )}
      </Box>
    </Modal>
  );
}
