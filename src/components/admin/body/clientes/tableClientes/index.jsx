import React, { useEffect, useState } from "react";
import classes from "./tableClientsStyle.module.css";
import editarBTN from "@/../../public/icons/boton-editar.png"
import borrarBTN from "@/../../public/icons/borrar.png"
import EditClient from "./editClient/index";
import Alert from '@mui/material/Alert';
import axios from "axios";

export default function TableClientes({ data }) {
  const [values, setValues] = useState(data);
  const [inDataEdit, setInDataEdit] = useState({});
  const [showEdit, setShowEdit] = useState(false);
  const [alertValue, setAlertValue] = useState('');
  useEffect(() => {
    const copyValues = values.map((cliente) => {
      if (cliente.visualizarLista && cliente.visualizarSlider) {
        return { ...cliente, visualizarEn: 'Lista/Slider' };
      } else if (cliente.visualizarLista) {
        return { ...cliente, visualizarEn: 'Lista' };
      } else {
        return { ...cliente, visualizarEn: 'Slider' };
      }
    });
    setValues(copyValues);
  }, [data]);

  const HandlerOnClickEditClient = (id, event) => {
    const cliente = data.find(cliente => cliente.id_cliente === id);
    if (cliente) {
      setInDataEdit({
        id: cliente.id_cliente,
        nombre: cliente.nombre,
        clasificacion: cliente.clasificacion,
        ruta_logo: cliente.ruta_logo,
        correo: cliente.correo,
        telefono: cliente.telefono,
        alt: cliente.alt,
        visualizarLista: cliente.visualizarLista,
        visualizarSlider: cliente.visualizarSlider,
      });
      setShowEdit(true);
    }
  };

  const HandlerOnClickDelete =  async (id) =>{
    // await axios.post('/api/deleteClient', {id: id});
    setAlertValue('Cliente Eliminado con éxito');
      setInterval(() => {
        window.location.reload();
      },3000);
  }


  const CallBackEditClient = (showComponent) => {
    setShowEdit(showComponent);
  };

  return (
    <>
      {showEdit ? (
        <div className={classes.table2}>
          <EditClient inData={CallBackEditClient} dataEditClient={inDataEdit} />
        </div>
      ) : (
        <div className={classes.table}>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Clasificación</th>
                <th>Ruta Imagen</th>
                <th>Correo</th>
                <th>Teléfono</th>
                <th>Alt Imagen</th>
                <th>Lugar de visualización</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {values.map((cliente) => (
                <tr key={cliente.id_cliente}>
                  <td className={classes.td}>
                    {cliente.nombre}
                  </td>
                  <td>
                    {cliente.clasificacion}
                  </td>
                  <td className={classes.tdH}>
                    {cliente.ruta_logo ? (
                      <div className={classes.tdHT}>{cliente.ruta_logo}</div>
                    ) : 'Sin logo'}
                    {cliente.ruta_logo && (
                      <div className={classes.tdHI}>
                        <img src={cliente.ruta_logo} alt='No se encontró la imagen' />
                      </div>
                    )}
                  </td>
                  <td>
                    {cliente.correo}
                  </td>
                  <td>
                    {cliente.telefono}
                  </td>
                  <td>
                    {cliente.alt}
                  </td>
                  <td>
                    {cliente.visualizarEn}
                  </td>
                  <td>
                    <div className={classes.divIcon}>
                      <img
                        id={cliente.id_cliente}
                        src={editarBTN.src}
                        alt="icono editar"
                        width='20'
                        onClick={(event) => HandlerOnClickEditClient(cliente.id_cliente, event)}
                      />
                      <img
                        id={cliente.id_cliente}
                        src={borrarBTN.src}
                        alt="icono editar"
                        width='20'
                        onClick={(event) => HandlerOnClickDelete(cliente.id_cliente, event)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {alertValue && <Alert severity="success" sx={{
                position: 'absolute',
                top: '50px',
                left: '100px'
            }
            }>{alertValue}</Alert>}
        </div>
      )}
    </>
  );
}