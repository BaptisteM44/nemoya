import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataBlog } from '../components/DataBlog'; // Remplacez par le chemin de votre fichier de données
import '../styles/components/Article.scss'
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/footer';
const Article = () => {
  const [article, setArticle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const foundArticle = DataBlog.find((item) => item.id === id);
    setArticle(foundArticle);
  }, [id]);

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
          <p>{article.paragTitle}</p>
          <h3>{article.parag1title}</h3>
          <p>{article.parag1}</p>
          <h3>{article.parag2title}</h3>
          <p>{article.parag2}</p>
          <h3>{article.parag3title}</h3>
          <p>{article.parag3}</p>
          <h3>{article.parag4title}</h3>
          <p>{article.parag4}</p>
          <h3>{article.parag5title}</h3>
          <p>{article.parag5}</p>
          <p>{article.paragA}</p>
          <p className="article-conclusion">{article.conclusion}</p>
        </div>
        <div className="article-sideright">
          <img src={article.imgTitle} alt="imgDroite" />
        </div> 
      </div>
      
      {/* Ajoutez d'autres éléments tels que title1, imgTitle1, parag1, etc. */}
    
    <Footer />
    </div>
  );
};

export default Article;
