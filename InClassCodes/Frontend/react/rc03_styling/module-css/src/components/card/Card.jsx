import Buton from "../buton/Buton"
// import "./Card.css"
import CardStyle from "./Card.module.css"

const Card = ({lang, img}) => {
    return(
        <div>
            <div className={CardStyle.wrapper}>
                <h1>{lang}</h1>
            </div>
            <img className={CardStyle.images} src={img} alt={lang} />
            <Buton/>
        </div>
    )
}

export default Card