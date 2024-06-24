import { Container, Row } from "react-bootstrap"; //!yazım olarak daha kullanışlı ama performans açısından üstteki yöntem daha ideal
import Form from "react-bootstrap/Form";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";
import { useState } from "react";

const CardContainer = () => {
  const [search, setSearch] = useState("")

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  const filteredData = data.filter(item=> item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim()))
  return (
    <div>
      <Form.Control type="search" placeholder="Search legends..." onChange={handleChange} className="w-50 mx-auto my-2"/>
      <Container className=" p-3 rounded-4 card-container my-3">
        <Row className=" justify-content-center g-3">
        {/* <Row xs={1} md={2} lg={3}> */}
          {filteredData.map((legend) => (
            <PlayerCard key={legend.id} legend={legend}/>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CardContainer;