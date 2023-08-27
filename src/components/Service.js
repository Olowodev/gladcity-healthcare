import styles from '../styles/componentStyles/Service.module.css'

const Service = ({data}) => {
    // console.log(data)
    return (
        <div className={styles.service}>
            <a className={styles.serviceLink}>
                <div className={styles.serviceText}>
                    <h3>{data.title}</h3>
                </div>
                <div className={styles.serviceImg}>
                    <img src={data.img} alt="card" />
                </div>
            </a>
        </div>
    );
}

export default Service;