import { services } from '@/data';
import styles from '../styles/componentStyles/Services.module.css'
import Service from './Service';

const Services = () => {
    return (
        <div className={styles.services}>
            <div className={styles.servicesCont}>
                <div className={styles.Container}>
                    <div className={styles.servicesHead}>
                        <h2>Services</h2>
                    </div>
                    <div className={styles.cardsCont}>
                        {services.map((service, index) => (
                            <Service data={service} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;