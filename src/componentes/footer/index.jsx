import "./footer.css"

const Footer = () =>{
    return <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
    <div className="redes">
        <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="/img/facebook.png" alt="Facebook" />
        </a>

        <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="/img/twitter.png" alt="twitter" />
        </a>

        <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="/img/instagram.png" alt="Instagram" />
        </a>
    </div>
    <img src="/img/logo.png" alt="logo" />
    <strong>Desarrolado por AZULA DEV</strong>
    </footer>
}

export default Footer