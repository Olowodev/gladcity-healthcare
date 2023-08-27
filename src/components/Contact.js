import styles from '../styles/componentStyles/Contact.module.css'

const Contact = () => {
    return (
        <div className={styles.contact}>
            <section className={styles.contactCont}>
                <div className={styles.contactWrapper}>
                    <div className={styles.contactContent}>
                        <div className={styles.contactLayout}>
                            <div className={styles.layoutCont}>
                                <div className={styles.contactLeft}>
                                    <h1>Connect Gladcity Healthcare</h1>
                                    <p>Take control of your health today - fill out Gladcity healthcare's contact form for personalized, top-notch healthcare solutions tailored to your needs</p>
                                    <form>
                                        <input name="firstname" type="text" placeholder="First name"/>
                                        <input name="email" type="text" placeholder="Email"/>
                                        <textarea name="message" placeholder="Leave a message"></textarea>
                                        <button>Send</button>
                                    </form>
                                </div>
                                <div className={styles.contactRight}>
                                    <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wzNDk5MjB8MHwxfHNlYXJjaHw2fHxIZWFsdGhjYXJlfGVufDB8fHx8MTY5MjYxMTE3N3ww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;