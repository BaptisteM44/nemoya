import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataBlog } from '../components/DataBlog'; // Remplacez par le chemin de votre fichier de données
import '../styles/components/Article.scss'
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/footer';
import gsap from 'gsap';

const Article = () => {
  
  const [article, setArticle] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    const foundArticle = DataBlog.find((item) => item.id === id);
    setArticle(foundArticle);
  }, [id]);

  useEffect(() => {
    const tl = gsap.timeline();
  
    tl.from('.article-title', { opacity: 0, y: -20, duration: 0.8 })
      .from('.article-date', { opacity: 0, y: -20, duration: 0.8 }, '-=0.3')
      .from( '.article-parag', { opacity: 0, y: 20, duration: 0.8, stagger: 0.2 }, '-=0.3')
      .from( '.article-subtitle', { opacity: 0, y: 20, duration: 0.8, stagger: 0.3 }, '-=0.3');

  }, []);
  
  if (!article) return null;

  return (
    <div className="article">
    <Navbar />
      <div className="article-side">
        <div className="article-content">
          <h1 className="article-title">{article.title}</h1>
          <p className="article-date">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
              <path fill="#000000" d="M480 64h-80V48C400 21.5 378.5 0 352 0h-64c-26.5 0-48 21.5-48 48v16H160V48C160 21.5 138.5 0 112 0H48C21.5 0 0 21.5 0 48v400c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM112 48h64v16h-64V48zm288 400H48V112h352v336z"/>
              <rect x="144" y="192" width="224" height="240" fill="#ffffff"/>
              <line x1="144" y1="296" x2="368" y2="296" stroke="#000000" stroke-width="4"/>
              <line x1="144" y1="368" x2="368" y2="368" stroke="#000000" stroke-width="4"/>
              <line x1="144" y1="440" x2="368" y2="440" stroke="#000000" stroke-width="4"/>
            </svg>
            {article.date}
          </p>
          <p className="article-parag">{article.paragTitle}</p>
          <h3 className="article-subtitle">{article.parag1title}</h3>
          <p className="article-parag">{article.parag1}</p>
          <h3 className="article-subtitle">{article.parag2title}</h3>
          <p className="article-parag">{article.parag2}</p>
          <h3 className="article-subtitle">{article.parag3title}</h3>
          <p className="article-parag">{article.parag3}</p>
          <h3 className="article-subtitle">{article.parag4title}</h3>
          <p className="article-parag">{article.parag4}</p>
          <h3 className="article-subtitle">{article.parag5title}</h3>
          <p className="article-parag">{article.parag5}</p>
          <p className="article-parag">{article.paragA}</p>
          <p className="article-conclusion">{article.conclusion}</p>
        </div>
        <div className="article-sideright">
          <img src={article.imgTitle} alt="imgDroite" />
        </div> 
      </div>
    <Footer />
    </div>
  );
};

export default Article;
