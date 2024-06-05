import PropTypes from 'prop-types';
import classes from './clientsList.module.scss';

function ClientsList({ municipios, iniciativaPrivada, particulares }) {
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
                        {municipios?.map((client) => (
                            <li key={client.id}>{client.name}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Iniciativa Privada</h2>
                    <ul>
                        {iniciativaPrivada?.map((client) => (
                            <li key={client.id}>{client.name}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Particulares</h2>
                    <ul>
                        {particulares?.map((client) => (
                            <li key={client.id}>{client.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

ClientsList.propTypes = {
    municipios: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ),
    iniciativaPrivada: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ),
    particulares: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ),
};

export default ClientsList;
