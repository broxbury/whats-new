import React from 'react';
import './NewsArticle.css';


const NewsArticle = (props) => {
  const { id, headline, img, description, url} = props;
  
  return (
    <section className="article-card">
      <img className="article-img" src={img}></img>
      <section className="article-info">
        <h3>{headline}</h3>
        <p>{description}</p>
      </section>
      <hr/>
      <section className="article-footer">
      </section>
    </section>
  )
}

export default NewsArticle;