import styles from '../styles/componentStyles/About.module.css'

const About = () => {
    return (
        <div className={styles.about}>
            <section className={styles.aboutCont}>
                <div className={styles.aboutWrapper}>
                    <div className={styles.aboutContent}>
                        <div className={styles.aboutLayout}>
                            <div className={styles.layoutCont}>
                                <div className={styles.content}>
                                    <h1>Helping hands for life's challenging times</h1>
                                    <p>Gladcity healthcare is a shining beacon of care and support in the heart of Leicester city. We pride ourselves on delivering premium, personalized healthcare services to individuals in need, making us a cornerstone of Leicester's compassionate community. Experience the Gladcity difference as we contribute to healthier, happier lives</p>
                                    <div className={styles.aboutButton}>
                                        <a>
                                            <button>Conquer Challenges Today</button>
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.aboutImg}>
                                    <img src='https://images.unsplash.com/photo-1584467735871-8e85353a8413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDk5MjB8MHwxfHNlYXJjaHw1fHxIZWFsdGhjYXJlfGVufDB8fHx8MTY5MjYxMTE3N3ww&ixlib=rb-4.0.3&q=80&w=1080' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;