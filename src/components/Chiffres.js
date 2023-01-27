import '../styles/_settings.scss'
import '../styles/components/chiffres.scss'
import React from "react";


const Chiffres = () => {
return (
    <section className="page-chiffres">
        <div className="chiffres">
            <div className="chiffres-content bar">
                <span>+ de</span>
                <h2>80<span className="pourcentage">%</span></h2>
                <h3>des clics</h3>
                <p>sont effectués <br/> sur la 1ère page</p>
            </div>
            <div className="chiffres-content bar">
                <span>+ de</span>
                <h2>60<span className="pourcentage">%</span></h2>
                <h3>des clics</h3>
                <p>sont concentrés <br/> sur les 3 premières <br/> positions</p>
            </div>
            <div className="chiffres-content">
                <span>+ de</span>
                <h2>90<span className="pourcentage">%</span></h2>
                <h3>des clics</h3>
                <p>sont totalisés <br/> par la 1ere page</p>
            </div>
        </div>
    </section>
  );
};

export default Chiffres;