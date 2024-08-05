import axios from 'axios';

export const handleFilter = async (estado, precioI, precioF) => {
    try {
        const data = {
            estado: estado,
            precioInicial: precioI,
            precioFinal: precioF,
        };
        const getData = (await axios.get('/api/filtro', { params: data }))
            .data[0][0];

        return getData;
    } catch (error) {
        console.log(error);
    }
};
