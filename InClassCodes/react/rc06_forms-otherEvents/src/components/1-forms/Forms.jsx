import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Forms() {
  const [username, setUsername] = useState("keş")
  console.log(username)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")



  return (
    <Form onSubmit={(e)=>e.preventDefault()}>
      <h1 className='text-danger'>FORMS</h1>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>
         { username && <span>Hello {username}</span> }
          </Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e)=> setUsername(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)}/> 
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password must at least 8 char. ({password.length}/8)</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
      </Form.Group>
    
      <Button variant="danger" type="submit">
        Submit
      </Button>

    </Form>
  );
}

export default Forms;