import styles from '../styles/componentStyles/Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <section>
                <div className={styles.sectionWrapper}>
                    <div className={styles.innerContent}>
                        <div className={styles.banner}>
                            <div className={styles.innerBanner}>
                                <div className={styles.bannerHead}>
                                    <h1>Compassionate care for those needing support</h1>
                                </div>
                                <div className={styles.bannerDesc}>
                                    <div className={styles.bannerImg}>
                                        <img src='https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzNDk5MjB8MHwxfHNlYXJjaHwxfHxIZWFsdGhjYXJlfGVufDB8fHx8MTY5MjYxMTE3N3ww&ixlib=rb-4.0.3&q=85' alt='banner image' />
                                    </div>
                                    <div className={styles.bannerSub}>
                                        <p>
                                            Gladcity Healthcare ensures compassion-filled, tailored care and support services, helping individuals in need to embrace healthier, improved lives
                                        </p>
                                        {/* <p>Thank you for subscribing</p> */}
                                        <form>
                                            <div>
                                                <input name='firstname' type='text' placeholder='First name' />
                                            </div> 
                                            <input name='email' type='email' placeholder='Email' />
                                            <button>Start Healthcare Journey</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Header;