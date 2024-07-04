import PropTypes from 'prop-types';
import classes from './clientsList.module.scss';
import axios from 'axios';
import icon from '../../../public/images/brand/1.png';
import Image from 'next/image';
import { red } from '@mui/material/colors';

function ClientsList({dataHomeClients}) { 
    let clientes_municipio=[];
    let clientes_iniciativa_privada=[];
    let clientes_particular=[];
    const [data_desc] = dataHomeClients[1];
    for(let cliente of dataHomeClients[0]){
        if(cliente.clasificacion_cliente=='municipios'){
            clientes_municipio.push(cliente);
        }
        else if(cliente.clasificacion_cliente=='iniciativa privada'){
            clientes_iniciativa_privada.push(cliente);
        }
        else{
            clientes_particular.push(cliente);
        }
    }
    return (
        <div className={classes['clients-list']}>
            <div>
                <h1>Clientes</h1>
                <p>{data_desc.desc_principal}</p>
            </div>
            <div className={classes['clients-columns']}>
                <div>
                    <h2>Municipios</h2>
                    <ul>
                        {clientes_municipio.map((client) => (
                            <li key={client.id_cliente}>
                                {/* <div>
                                    <Image src={icon.src} alt='logo cliente' fill={true}></Image>
                                </div> */}
                                {client.nombre_cliente}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Iniciativa Privada</h2>
                    <ul>
                        {clientes_iniciativa_privada.map((client) => (
                            <li key={client.id_cliente}>{client.nombre_cliente}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Particulares</h2>
                    <ul>
                        {clientes_particular.map((client) => (
                            <li key={client.id_cliente}>{client.nombre_cliente}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

ClientsList.propTypes = {
    dataHomeClients: PropTypes.instanceOf(Object).isRequired
};

export default ClientsList;
