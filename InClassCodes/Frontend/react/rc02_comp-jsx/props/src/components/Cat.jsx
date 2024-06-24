import { Name } from "./Name"

const Cat = ({name, color="grey", img, isBlueEyed}) => {
    return(
        <div>
            <Name name={name}/>
            <p>Blue eyed? : {isBlueEyed ? "Yes" : "No"} </p>
            <img src={img} alt="cat-img" width= "450px" />
            <p style={{backgroundColor: color}}>Color:{color}</p> 
            <hr />
        </div>
      
    )
}
export default Cat

/*{const Cat = (props) => {
    return(
        <div>
            <Name name={props.name}/>
            <img src={props.img} alt="cat-img" width= "450px" />
            <p style={{backgroundColor: props.color}}>Color:{props.color}</p> 
            <hr />
        </div>
      
    )
}
}*/
