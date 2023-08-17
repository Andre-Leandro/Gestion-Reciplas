import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useState } from "react";

const handleDetails = (row) => {
  console.log("Detalles:", row);
};

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "nombre",
    headerName: "Nombre",
    width: 250,
    editable: false,
  },
  {
    field: "fecha",
    headerName: "Fecha",
    width: 150,
    editable: false,
    type: "date",
  },
  {
    field: "estado",
    headerName: "Estado",
    type: "boolean",
    width: 110,
    editable: false,
  },
  {
    field: "detalles",
    headerName: "Detalles",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    renderCell: (params) => (
      <Button
        variant="outlined"
        color="primary"
        onClick={() => handleDetails(params.row)}
      >
        Detalles
      </Button>
    ),
  },
];

const rows = [
  { id: 1, nombre: "John", fecha: new Date("1990-01-15"), estado: true },
  { id: 2, nombre: "Alice", fecha: new Date("1985-03-27"), estado: false },
  { id: 3, nombre: "David", fecha: new Date("1978-09-04"), estado: true },
  { id: 4, nombre: "Sophia", fecha: new Date("2001-11-12"), estado: false },
  { id: 5, nombre: "Oliver", fecha: new Date("1999-07-08"), estado: true },
  { id: 6, nombre: "Emily", fecha: new Date("1982-05-22"), estado: false },
  { id: 7, nombre: "Daniel", fecha: new Date("1972-12-31"), estado: true },
  { id: 8, nombre: "Grace", fecha: new Date("1995-04-17"), estado: false },
  { id: 9, nombre: "Jacob", fecha: new Date("1988-06-25"), estado: true },
  { id: 10, nombre: "Ava", fecha: new Date("2005-02-09"), estado: false },
  { id: 11, nombre: "Michael", fecha: new Date("1976-10-19"), estado: true },
  { id: 12, nombre: "Emma", fecha: new Date("1992-08-03"), estado: false },
  { id: 13, nombre: "William", fecha: new Date("1981-07-07"), estado: true },
  { id: 14, nombre: "Mia", fecha: new Date("2003-12-28"), estado: false },
  { id: 15, nombre: "Alexander", fecha: new Date("1997-09-14"), estado: true },
  { id: 16, nombre: "Sofia", fecha: new Date("1994-05-06"), estado: false },
  { id: 17, nombre: "James", fecha: new Date("1979-03-23"), estado: true },
  { id: 18, nombre: "Charlotte", fecha: new Date("2007-11-30"), estado: false },
  { id: 19, nombre: "Benjamin", fecha: new Date("1989-02-18"), estado: true },
  { id: 20, nombre: "Avery", fecha: new Date("1996-01-02"), estado: false },
  { id: 21, nombre: "Henry", fecha: new Date("1974-08-11"), estado: true },
  { id: 22, nombre: "Scarlett", fecha: new Date("1993-06-29"), estado: false },
  { id: 23, nombre: "Joseph", fecha: new Date("1986-04-20"), estado: true },
  { id: 24, nombre: "Chloe", fecha: new Date("2000-10-08"), estado: false },
  { id: 25, nombre: "Daniel", fecha: new Date("1973-09-16"), estado: true },
];

function TablaMP() {
  const [searchId, setSearchId] = useState("");

  // Resto del código...

  const filteredRows = rows.filter((row) =>
    row.id.toString().includes(searchId)
  );

  return (
    <div style={{ height: "85%", width: "100%" }}>
      <div style={{ display: "flex", padding:"20px"}}>
        <p style={{paddingRight:"5px"}}>Buscar por ID:</p>
        <input
          type="text"
          id="search"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
      </div>
      <div>
        {" "}
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={5}
          disableSelectionOnClick
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10},
            },
          }}
          pageSizeOptions={[10, 20, 100]}
        />
      </div>
    </div>
  );
}

export default TablaMP;