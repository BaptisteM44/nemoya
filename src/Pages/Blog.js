import React, { useEffect, useState } from 'react';
import { DataBlog } from '../components/DataBlog.js';
import Card from '../components/CardsBlog';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/footer';
import '../styles/pages/blog.scss'
function Blog() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(DataBlog);
  }, []);

  return (
    <>
        
        <Navbar />
        <div className="page-blog">
            <div className="header-blog">
                <div className="header-title">
                    <h2>Le blog de référence en conseils marketing<span className="point">.</span></h2>
                    <p>Nos experts marketing vous partage les dernières tendances et astuces à mettre en place pour votre entreprise.</p>
                </div>
            </div>
            <div className="blog-cards">
                {articles.map((article) => (
                    <Card key={article.id} article={article} />
                ))}    
            </div>
        
        <Footer />
        </div>
    </>
  );
}

export default Blog;
