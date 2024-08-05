export default function SliderClients() {
    return (
        <div className={`${classes.bg} ${classes.space__yaxis}`}>
            {/* Container municipios */}
            <div className={classes.title}>
                <h1>Municipios</h1>
            </div>
            <Container className={classes.aux}>
                <SwiperComps settings={settings} className={classes.aux3}>
                    {clientes_municipio.map((brandItem) => (
                        <Slide
                            key={brandItem.id_cliente}
                            className={classes.aux2}
                        >
                            <Link href="/" className={classes.item}>
                                <div>
                                    <img
                                        src={icon.src}
                                        alt="logo cliente"
                                        // src={brandItem?.ruta_logo_cliente}
                                        // alt={brandItem?.alt}
                                    />
                                </div>
                                <div>{brandItem.nombre_cliente}</div>
                            </Link>
                        </Slide>
                    ))}
                </SwiperComps>
            </Container>
        </div>
    );
}
