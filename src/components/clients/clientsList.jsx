import PropTypes from 'prop-types';
import classes from './clientsList.module.scss';
import axios from 'axios';

function ClientsList({ dataHomeClients }) {
    console.log(dataHomeClients);
    let clientes_municipio = [];
    let clientes_iniciativa_privada = [];
    let clientes_particular = [];
    for (let cliente of dataHomeClients) {
        if (cliente.clasificacion === 'Municipios') {
            clientes_municipio.push(cliente);
        } else if (cliente.clasificacion === 'Iniciativa Privada') {
            clientes_iniciativa_privada.push(cliente);
        } else {
            clientes_particular.push(cliente);
        }
    }
    return (
        <div className={classes['clients-list']}>
            <div>
                <h1>Clientes</h1>
                <p>
                    Nos enorgullece contar con la confianza de clientes
                    excepcionales que han experimentado el compromiso, la
                    calidad y la dedicación que caracterizan a Reichstag,
                    Edificaciones S.A. de C.V. Cada proyecto es una colaboración
                    única, y trabajamos incansablemente para superar
                    expectativas, ofreciendo soluciones a medida que reflejan
                    nuestro compromiso con la excelencia. Descubra cómo hemos
                    llevado a cabo visiones exitosas y cómo podemos ser su socio
                    preferido en la materialización de proyectos excepcionales.
                </p>
            </div>
            <div className={classes['clients-columns']}>
                <div>
                    <h2>Municipios</h2>
                    <ul>
                        {clientes_municipio.map((client) => (
                            <li key={client.id_cliente}>{client.nombre}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Iniciativa Privada</h2>
                    <ul>
                        {clientes_iniciativa_privada.map((client) => (
                            <li key={client.id_cliente}>{client.nombre}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Particulares</h2>
                    <ul>
                        {clientes_particular.map((client) => (
                            <li key={client.id_cliente}>{client.nombre}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
ClientsList.propTypes = {
    dataHomeClients: PropTypes.instanceOf(Object).isRequired,
};

export default ClientsList;
