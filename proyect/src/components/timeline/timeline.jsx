import styles from './timeline.module.scss';

function TimeLine() {
    return (
        <div className={styles.timeline}>
            <div className={`${styles.container} ${styles['left-container']}`}>
                <img src="/images/timeline/1.jpg" />
                <div className={styles['text-box']}>
                    <h2>Our History</h2>
                    <small>2018 - 2021</small>
                    <p>
                        Culpa culpa excepteur anim dolore consectetur nisi
                        reprehenderit ea ut. Amet mollit quis sit laboris
                        nostrud sit nisi duis. Dolore eiusmod culpa exercitation
                        ullamco magna occaecat nulla occaecat Lorem eu cillum
                        labore laboris sit. Eiusmod consequat do ea eiusmod
                        reprehenderit esse esse cupidatat do est Lorem.
                    </p>
                    <span className={styles['left-container-arrow']} />
                </div>
            </div>
            <div className={`${styles.container} ${styles['right-container']}`}>
                <img src="/images/timeline/1.jpg" />
                <div className={styles['text-box']}>
                    <h2>AMAZON</h2>
                    <small>2018 - 2021</small>
                    <p>
                        Culpa culpa excepteur anim dolore consectetur nisi
                        reprehenderit ea ut. Amet mollit quis sit laboris
                        nostrud sit nisi duis. Dolore eiusmod culpa exercitation
                        ullamco magna occaecat nulla occaecat Lorem eu cillum
                        labore laboris sit. Eiusmod consequat do ea eiusmod
                        reprehenderit esse esse cupidatat do est Lorem.
                    </p>
                    <span className={styles['right-container-arrow']} />
                </div>
            </div>
            <div className={`${styles.container} ${styles['left-container']}`}>
                <img src="/images/timeline/1.jpg" />
                <div className={styles['text-box']}>
                    <h2>MERCADO</h2>
                    <small>2018 - 2021</small>
                    <p>
                        Culpa culpa excepteur anim dolore consectetur nisi
                        reprehenderit ea ut. Amet mollit quis sit laboris
                        nostrud sit nisi duis. Dolore eiusmod culpa exercitation
                        ullamco magna occaecat nulla occaecat Lorem eu cillum
                        labore laboris sit. Eiusmod consequat do ea eiusmod
                        reprehenderit esse esse cupidatat do est Lorem.
                    </p>
                    <span className={styles['left-container-arrow']} />
                </div>
            </div>
            <div className={`${styles.container} ${styles['right-container']}`}>
                <img src="/images/timeline/1.jpg" />
                <div className={styles['text-box']}>
                    <h2>PILIA</h2>
                    <small>2018 - 2021</small>
                    <p>
                        Culpa culpa excepteur anim dolore consectetur nisi
                        reprehenderit ea ut. Amet mollit quis sit laboris
                        nostrud sit nisi duis. Dolore eiusmod culpa exercitation
                        ullamco magna occaecat nulla occaecat Lorem eu cillum
                        labore laboris sit. Eiusmod consequat do ea eiusmod
                        reprehenderit esse esse cupidatat do est Lorem.
                    </p>
                    <span className={styles['right-container-arrow']} />
                </div>
            </div>
        </div>
    );
}

export default TimeLine;
