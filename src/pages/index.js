import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import * as styles from "./index.module.css"

const IndexPage = () => {
  return (
    <Layout>
      <div className={styles.landingContainer}>

        <h1 className={styles.heading}>¡Lo último en noticias!</h1>
        <p className={styles.subheading}>
          Mantente informado con contenido relevante y actualizado.
        </p>
        <StaticImage
          src="../images/news.jpg"  
          alt="Imagen de notiicas en la landing"
          placeholder="blurred"
          layout="constrained"
        />
        

        <section className={styles.features}>
          <h2 className={styles.featuresTitle}>Te informamos sobre</h2>
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <h3>Tecnología</h3>
              <p>Las últimas innovaciones, tendencias, gadgets y juegos.</p>
            </div>
            <div className={styles.card}>
              <h3>Deportes</h3>
              <p>Noticias y análisis sobre lo que está sucendiendo en todos los deportes del mundo.</p>
            </div>
            <div className={styles.card}>
              <h3>Salud</h3>
              <p>Consejos de salud, bienestar y cuidado personal para una vida más saludable.</p>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <h2>¡Empieza a explorar!</h2>
          <p>Haz clic en las categorías del menú para leer las últimas noticias en tu área de interés.</p>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
