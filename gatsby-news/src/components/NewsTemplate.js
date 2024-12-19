import Layout from "./Layout";
import React, { useState, useEffect } from 'react';
import * as styles from "./card.module.css"; 
import ShowRatingButton from "./ShowRatingButton";

const NewsTemplate = ({ pageContext }) => {
  const { topic, articles } = pageContext;
  const [daysElapsed, setDaysElapsed] = useState(0);

  useEffect(() => {
    const calculateDaysElapsed = (publishedDate) => {
      const newsDate = new Date(publishedDate);
      const today = new Date();
      const timeDiff = today - newsDate;
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      setDaysElapsed(days);
    };
    if (articles.length > 0) {
      calculateDaysElapsed(articles[0].published_at);
    }
  }, [articles]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); 
  };

  const topicNames = {
    tech: 'tecnología',
    health: 'salud',
    sports: 'deportes',
  };

  const topicTitle = topicNames[topic] || topic;

  return (
    <Layout>
      <h1 className={styles.topicTitle}>Noticias sobre {topicTitle}</h1>
      <div className={styles.newsGrid}>
      {articles.map((article) => (
        <div key={article.uuid} className={styles.card}>
          <img src={article.image_url} alt={article.title} />
          <div className={styles.cardContent}>
            <h3 className={styles.title}>{article.title}</h3>
            <p className={styles.snippet}>{article.description}</p>
          </div>
          <div className={styles.cardFooter}>
            <span>{formatDate(article.published_at)}</span>
            <a
              className={styles.readMore}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Leer más
            </a>
          </div>
          <div
            style={{
              top: "5px",
              right: "5px",
              fontSize: "12px",
              color: "gray",
              marginTop: "5px",
            }}
          >
            Han pasado {daysElapsed} días
          </div>
          <div className={styles.ratingContainer}>
            <ShowRatingButton title={article.title} />
          </div>
        </div>
      ))}
      </div>
    </Layout>
  );
};

export default NewsTemplate;
