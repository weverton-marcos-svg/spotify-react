import React from "react";
import "./Footer.css";

const Footer = () => {
    return(
        <footer className="footer">
        <div className="footer__container">
            <p className="footer__title">Pré-visualização Spotify</p>
            <p className="footer__subtitle">Regista-se para ouvires músicas e podcasts ilimitados com alguns anúncios de vez em quado. Não é necessário cartõa de crédito.</p>
        </div>
        <div className="footer__button">
            <button className="button">Regista-se já gratuitamente</button>
        </div>
    </footer>
    )
}

export default Footer;