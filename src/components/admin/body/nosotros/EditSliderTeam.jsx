'use client';

//  Imports de react.
import { useState, useRef, useMemo, useEffect} from "react";

//  Imports de componentes de Material UI.
import { Box, Button, CircularProgress, Alert, IconButton, TextField, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, TablePagination, Checkbox, Toolbar, Typography, Tooltip, TableSortLabel } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { visuallyHidden } from '@mui/utils';
import { alpha } from '@mui/material/styles';

// Imports de iconos de mui.
import DeleteIcon from '@mui/icons-material/Delete';

//  Imports de estilos.
import classes from "./EditService.module.scss";

//  Imports de librerias externas.
import axios from "axios";

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);

    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    
    return stabilizedThis.map((el) => el[0]);
  }
  
  const headCells = [
    {
      id: 'ruta_imagen',
      numeric: false,
      disablePadding: true,
      label: 'Imagen',
    },
    {
      id: 'nombre_empleado',
      numeric: false,
      disablePadding: true,
      label: 'Nombre',
    },
    {
      id: 'apellido_empleado',
      numeric: false,
      disablePadding: false,
      label: 'Apellido',
    },
    {
      id: 'puesto',
      numeric: false,
      disablePadding: false,
      label: 'Puesto',
    },
    {
      id: 'grado',
      numeric: false,
      disablePadding: false,
      label: 'Grado',
    },
    {
      id: 'genero',
      numeric: false,
      disablePadding: false,
      label: 'Genero',
    },
  ];
  
  function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
      props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all desserts',
              }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  function EnhancedTableToolbar(props) {
    const { numSelected, eventDelete } = props;

    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} Seleccionado
          </Typography>
        ) : (
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Empleados
          </Typography>
        )}
  
        {numSelected > 0 && (
          <Tooltip title="Delete">
            <IconButton onClick={() => eventDelete()}>
              <DeleteIcon/>
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  }

const EditSliderTeam = ({teamItems}) => {
    const theme = useTheme();

    const [dataTeam , setDataTeam] = useState(teamItems);
    const [newDataTeam , setNewDataTeam] = useState([])
    const [message, setMessage] = useState(["", ""]);
    const [confirmationUpdateDelete, setConfirmationUpdateDelete] = useState([false, false]);
    const refForm = useRef(null);
    const paginationElementsRef = useRef(null);

    // Variables de la tabla
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('nombre');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
      };
    
      const handleSelectAllClick = (event) => {
        if (event.target.checked) {
          const newSelected = dataTeam.map((n) => n.id_empleado);
          setSelected(newSelected);
          return;
        }
        setSelected([]);
      };
    
      const handleClick = (id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];
    
        if (selectedIndex === -1) {
          newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
          newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
          );
        }
        setSelected(newSelected);
      };
    
      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
    
      const isSelected = (id) => selected.indexOf(id) !== -1;
    
      const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dataTeam.length) : 0;
    
      const visibleRows = useMemo(
        () =>
          stableSort(dataTeam, getComparator(order, orderBy)).slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage,
          ),
        [order, orderBy, page, rowsPerPage, dataTeam],
      );

    const addNewData = () => {
        const newData = {
            id_empleado: dataTeam[dataTeam.length - 1].id_empleado + 1,
            grado: '',
            genero: '',
            nombre_empleado: '',
            apellido_empleado: '',
            puesto: '',
            ruta_imagen: '',
        }
        setDataTeam([...dataTeam, newData]);
        setNewDataTeam([...newDataTeam, newData]);
    }

    const handleShowDeleteConfirmation = () => {
      setConfirmationUpdateDelete([false, true]);
    }

    const handleDelete = async(e) => {
        e.preventDefault();

        let clientData = null;
        let data = [...dataTeam];

        data = data.filter((item) => selected.indexOf(item.id_empleado) === -1);
        setDataTeam(data);

        let newData = [...newDataTeam];
        newData = newData.filter((item) => selected.indexOf(item.id_empleado) === -1);
        setNewDataTeam(newData);

        const compareElement = (item, item2) => item.id_empleado === item2.id_empleado;
        clientData = data.filter(item => !newData.some(item2 => compareElement(item, item2)));

        const compareObjects = (obj1, obj2) => {
            if(obj1.length !== obj2.length) return false;
            if(obj1 === null || obj2 === null) return false;
            for(let key in obj1){
                if(obj1[key] !== obj2[key]){
                    return false;
                }
            }
            return true;
        }

        if(!compareObjects(clientData, teamItems) && compareObjects([...newDataTeam], newData)){
            setConfirmationUpdateDelete([false, false]);
            const response = await axios.post(`/api/team`, selected);
            if (response.status === 200) {
                setSelected([]);
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }else {
                setConfirmationUpdateDelete([false, false]);
                setMessage(['Error al elmiminar el elemento', 'error']);
                setInterval(() => {
                    setMessage(["", ""]);
                }, 5000);
            }
        }else{ 
            setSelected([]);
            setConfirmationUpdateDelete([false, false]);
            setMessage(['Elemento eliminado correctamente', 'info']);
            setInterval(() => {
                setMessage(["", ""]);
            }, 10000);
        }
    }

    const reportIncompleteForm = (e) =>{
        e.preventDefault();
        if(refForm.current.reportValidity()){
            refForm.current.requestSubmit();
        }else{
            setConfirmationUpdateDelete([false, false]);
            setMessage(['Por favor, llene todos los campos', 'error']);
            setInterval(() => {
                setMessage(["", ""]);
            }, 5000);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        dataTeam.map((item, index) => {
            formData.append(`file${item.id_empleado}` , item.bg);
        })

        const responseImageUrl = await axios.post("/api/upload", formData);

        const oldImageFilter = responseImageUrl.data.url.filter(item => dataTeam.some((url) => url.id_empleado === item.id_empleado));

        const tempDataSlider = dataTeam.map(item => {
            const newImage = oldImageFilter.find(v => v.id === item.id);
            return newImage ? { ...item, ruta_imagen: newImage.file } : item;
        });

        const newImageFilter = responseImageUrl.data.url.filter(item => newDataTeam.some((url) => url.id_empleado === item.id_empleado));
        const tempNewDataSlider = newDataTeam.map(item => {
            const newImage = newImageFilter.find(m => m.id_empleado === item.id_empleado);
            return newImage ? { ...item, ruta_imagen: newImage.file } : item;
        });

        setDataTeam(tempDataSlider);
        setNewDataTeam(tempNewDataSlider);

        if(responseImageUrl.status === 200){
            const response = await axios.put("/api/sliderTeam", [tempDataSlider, tempNewDataSlider]);

            if (response.status === 200) {
                setConfirmationUpdateDelete([false, false]);
                setMessage(['Carrusel actualizado correctamente', 'success']);
                setInterval(() => {
                    setMessage(["", ""]);
                }, 10000);
            } else {
                setConfirmationUpdateDelete([false, false]);
                setMessage(['Error al actualizar el carrusel', 'error']);
                setInterval(() => {
                    setMessage(["", ""]);
                }, 5000);
            }
        }
    };

    useEffect(() => {
        const paragraphs = paginationElementsRef.current.querySelectorAll('p');
  
        paragraphs.forEach(paragraph => {
          paragraph.style.margin = "0";
        });
    }, [paginationElementsRef])

    return (
        <div className={classes.homeEdit}>
            {confirmationUpdateDelete[0] && (
                <Box sx={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: '1000',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }} component="form" onSubmit={(e)=> reportIncompleteForm(e)}>
                    <Box sx={{
                        bgcolor: theme.palette.mode === 'dark' ? "#242424" : "#E3E3E3",
                        color: theme.palette.mode === 'dark' ? "white" : "#014655",
                        transition: `background-color ${theme.transitions.duration.standard}ms`,
                        borderRadius: '10px',
                        padding: '20px',
                    }}>
                        <h2>¿Estás seguro de actualizar el carrusel?</h2>
                        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                            <Button variant="contained" color="primary" type="submit">Confirmar</Button>
                            <Button variant="contained" color="primary" onClick={() => setConfirmationUpdateDelete([false, false])}>Cancelar</Button>
                        </div>
                    </Box>
                </Box>
            )}
            {confirmationUpdateDelete[1] && (
                <Box sx={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: '1000',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }} component="form" onSubmit={(e) => handleDelete(e)}>
                    <Box sx={{
                        bgcolor: theme.palette.mode === 'dark' ? "#242424" : "#E3E3E3",
                        color: theme.palette.mode === 'dark' ? "white" : "#014655",
                        transition: `background-color ${theme.transitions.duration.standard}ms`,
                        borderRadius: '10px',
                        padding: '20px',
                    }}>
                        <h2 style={{textAlign: "center"}}>¿Estás seguro de eliminar este elemento?</h2>
                        <p style={{textAlign: "center"}}>Esta acción no se puede deshacer<br/><span></span></p>
                        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                            <Button variant="contained" color="primary" type="submit">Eliminar</Button>
                            <Button variant="contained" color="primary" onClick={() => setConfirmationUpdateDelete([false, false])}>Cancelar</Button>
                        </div>
                    </Box>
                </Box>   
            )}
            <Box sx={{
                    bgcolor: theme.palette.mode === 'dark' ? "#242424" : "white",
                    color: theme.palette.mode === 'dark' ? "white" : "#014655",
                    transition: `background-color ${theme.transitions.duration.standard}ms`,
                    // maxWidth: '70%',
                }}>
                    {message[0] !== "" && (
                        <Alert severity={`${message[1]}`} sx={{
                            position: 'fixed',
                            width: 'auto',
                            height: 'auto',
                            zIndex: '1000',
                        }} >
                            {message[0]}
                        </Alert>
                    )}
                    <div className={classes.homeEdit_sliderTeamSection_formSubservicio}>
                        <form ref={refForm} onSubmit={(e) => handleSubmit(e)}>
                            <EnhancedTableToolbar numSelected={selected.length} eventDelete={handleShowDeleteConfirmation}/>
                                <TableContainer>
                                    <Table
                                        sx={{ minWidth: 750 }}
                                        aria-labelledby="tableTitle"
                                        size={'medium'}
                                    >
                                        <EnhancedTableHead
                                        numSelected={selected.length}
                                        order={order}
                                        orderBy={orderBy}
                                        onSelectAllClick={handleSelectAllClick}
                                        onRequestSort={handleRequestSort}
                                        rowCount={dataTeam.length}
                                        />
                                        <TableBody>
                                            {visibleRows.map((row, index) => {
                                                const isItemSelected = isSelected(row.id_empleado);
                                                const labelId = `enhanced-table-checkbox-${index}`;

                                                return (
                                                <TableRow
                                                    hover
                                                    role="checkbox"
                                                    aria-checked={isItemSelected}
                                                    tabIndex={-1}
                                                    key={row.id_empleado}
                                                    selected={isItemSelected}
                                                >
                                                    <TableCell padding="checkbox">
                                                        <Checkbox
                                                            color="primary"
                                                            onClick={() => handleClick(row.id_empleado)}
                                                            checked={isItemSelected}
                                                            inputProps={{
                                                            'aria-labelledby': labelId,
                                                            }}
                                                        />
                                                    </TableCell>

                                                    <TableCell>
                                                      <input
                                                          type="file"
                                                          accept="image/*"
                                                          name="imagen"
                                                          onChange={(e) => {
                                                              const updatedData = [...dataTeam];
                                                              updatedData[index].bg = e.target.files[0];
                                                              setDataTeam(updatedData);
                                                          }}
                                                          className={theme.palette.mode === 'dark' ? classes.formControlDark : classes.formControl}
                                                          />
                                                    </TableCell>
                                                    
                                                    <TableCell
                                                    component="th"
                                                    id={labelId}
                                                    scope="row"
                                                    padding="none"
                                                    >
                                                      <div style={{height: "0", opacity: "0"}}>
                                                        {row.nombre_empleado}
                                                      </div>
                                                      <TextField
                                                        id={`title_slider_${row.nombre_empleado}_${index}`}
                                                        defaultValue={row.nombre_empleado}
                                                        onChange={(e) => {
                                                            const updatedData = [...dataTeam];
                                                            updatedData[index].nombre_empleado = e.target.value;
                                                            setDataTeam(updatedData);
                                                        }}/>
                                                    </TableCell>

                                                    <TableCell align="right">
                                                        <div style={{height: "0", opacity: "0"}}>
                                                          {row.apellido_empleado}
                                                        </div>
                                                        <TextField
                                                        id={`title_slider_${row.apellido_empleado}_${index}`}
                                                        defaultValue={row.apellido_empleado}
                                                        onChange={(e) => {
                                                            const updatedData = [...dataTeam];
                                                            updatedData[index].apellido_empleado = e.target.value;
                                                            setDataTeam(updatedData);
                                                        }}/>
                                                    </TableCell>

                                                    <TableCell align="right">
                                                      <div style={{height: "0", opacity: "0"}}>
                                                        {row.puesto}
                                                      </div>
                                                      <TextField
                                                        id={`puesto_${row.puesto}_${index}`}
                                                        defaultValue={row.puesto}
                                                        onChange={(e) => {
                                                            const updatedData = [...dataTeam];
                                                            updatedData[index].puesto = e.target.value;
                                                            setDataTeam(updatedData);
                                                        }}/>
                                                    </TableCell>

                                                    <TableCell align="right">
                                                      <div style={{height: "0", opacity: "0"}}>
                                                        {row.grado}
                                                      </div>
                                                      <Select
                                                          id="demo-simple-select"
                                                          defaultValue={row.grado === "Licenciado" ? 10 : row.grado === "Maestria" ? 20 : row.grado === "Doctorado" ? 30 : 40}
                                                          onChange={(e)=>{
                                                              const updatedData = [...dataTeam];
                                                              if(e.target.value === 10) updatedData[index].grado = "Licenciado";
                                                              if(e.target.value === 20) updatedData[index].grado = "Maestria";
                                                              if(e.target.value === 30) updatedData[index].grado = "Doctorado";
                                                              if(e.target.value === 40) updatedData[index].grado = "Ingeniero";
                                                              setDataTeam(updatedData);
                                                          }}
                                                      >
                                                          <MenuItem value={10}>Licenciatura</MenuItem>
                                                          <MenuItem value={20}>Maestría</MenuItem>
                                                          <MenuItem value={30}>Doctorado</MenuItem>
                                                          <MenuItem value={40}>Ingenieria</MenuItem>
                                                      </Select>
                                                    </TableCell>

                                                    <TableCell align="right">
                                                      <div style={{height: "0", opacity: "0"}}>
                                                        {row.genero}
                                                      </div>
                                                      <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        defaultValue={row.genero === "Femenino" ? 10 : 20}
                                                        label="Genero"
                                                        onChange={(e)=>{
                                                            const updatedData = [...dataTeam];
                                                            if(e.target.value === 10) updatedData[index].genero = "Femenino";
                                                            if(e.target.value === 20) updatedData[index].genero = "Masculino";
                                                            setDataTeam(updatedData);
                                                        }}
                                                        >
                                                          <MenuItem value={10}>Femenino</MenuItem>
                                                          <MenuItem value={20}>Masculino</MenuItem>
                                                      </Select>
                                                    </TableCell>
                                                </TableRow>
                                                );
                                                })}
                                                {emptyRows > 0 && (
                                                    <TableRow
                                                    style={{
                                                        height: 53 * emptyRows,
                                                    }}
                                                    >
                                                      <TableCell colSpan={6} />
                                                    </TableRow>
                                                )}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <TablePagination
                                    ref={paginationElementsRef}
                                    rowsPerPageOptions={[5, 10, 25]}
                                    component="div"
                                    count={dataTeam.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    sx={{
                                      display: 'flex',
                                      justifyContent: 'center',
                                    }}
                                    />
                        </form>
                        <div className={classes.homeEdit_sliderTeamSection_formSubservicio_updateAlert}>
                            <Button variant="contained" color="primary" onClick={() => setConfirmationUpdateDelete([true, false])}
                                sx={{
                                    width: "200px",
                                    height: "50px",
                                    bgcolor: "#014655",
                                    color: "white",
                                    ":hover": {
                                        bgcolor: "#0d5c6c",
                                    }
                                }}> 
                                Guardar cambios
                            </Button>
                            <Button variant="contained" color="primary" onClick={addNewData}
                                sx={{
                                    width: "200px",
                                    height: "50px",
                                }}> 
                                Agregar un elemento </Button>
                        </div>
                    </div>
                </Box>
        </div>
    );
};

export default EditSliderTeam;