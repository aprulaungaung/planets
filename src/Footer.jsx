

function Footer(props){

    return <footer>
    <div className="footer-div">
        <p>{props.title1}</p>
        <h1 className="footage">{props.rotate}</h1>
    </div>
    <div className="footer-div">
        <p>{props.title2}</p>
        <h1 className="footage">{props.revol}</h1>
    </div>
    <div className="footer-div">
        <p>{props.title3}</p>
        <h1 className="footage">{props.radius}</h1>
    </div>
    <div className="footer-div">
        <p>{props.title4}</p>
        <h1 className="footage">{props.average}</h1>
    </div>
   </footer>
}


export default Footer;