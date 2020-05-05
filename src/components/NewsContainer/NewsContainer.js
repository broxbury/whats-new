import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = (props) => {
  const articles  = props.news.entertainment
  return (
    <section className="news-card-container">
      {articles.map(item => {
        return (
          <NewsArticle
            key={item.id}
            headline={item.headline}
            img={item.img}
            description={item.description}
            url={item.url}
          />
        )
      })}
    </section>
   
  )
}

export default NewsContainer;