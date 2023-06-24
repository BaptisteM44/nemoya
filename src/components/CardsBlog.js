import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/CardsBlog.scss'
import { gsap } from 'gsap';

const Card = ({ article }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        gsap.from(cardRef.current, {
          duration: 1,
          x: 200,
          opacity: 0,
          ease: 'power3.out',
          delay: 0.2,
        });
      }, []);
  return (
    <Link className="card-link" to={`/article/${article.id}`} ref={cardRef}>
      <div className="card">
        <img src={article.imgTitle} alt={article.title} />
        <h2 className="card-title">{article.title}</h2>
        <p className="card-date">{article.date}</p>
        <p className="card-link-arrow">Lire la suite →</p>
      </div>
    </Link>
  );
};

export default Card;
