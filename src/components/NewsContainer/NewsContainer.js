import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = (props) => {
  
  const articles = props.currentTopic

  const articlesToDisplay = articles.map(item => {
    return (
      <NewsArticle
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <section className="news-card-container">
      {articlesToDisplay}
    </section>
  )
}

export default NewsContainer;