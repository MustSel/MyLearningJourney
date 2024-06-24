import Container from "react-bootstrap/esm/Container"
import Image from "react-bootstrap/Image"
import logo from "../assets/logo.png"
const Header = () => {

    return (
    
    <Container>
        <Image src={logo} width={200}></Image><br />
        <h1 className="my-2 title">FOOTBALL LEGENDS</h1>
    </Container>
    )
}

export default Header