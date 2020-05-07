import React from 'react';
import './NewsArticle.css';
import interfaceImg from './interface.png';

const NewsArticle = (props) => {
  const { headline, img, description, url } = props;
  
  return (
    <section data-testid="newsArticle" className="article-card">
      <img className="article-img" src={img}></img>
      <section className="article-info">
        <h3>{headline}</h3>
        <p>{description}</p>
      </section>
      <hr/>
      <a href={url}>
      <section className="article-footer">
        <img className="url-link" src={interfaceImg}></img>
      </section>
      </a>
    </section>
  )
}

export default NewsArticle;