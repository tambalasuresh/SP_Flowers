import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/navbar'
import Container from "react-bootstrap/esm/Container"
import BodyComponent from "./components/Body"

function App() {
  return (
    <Container fluid>
       <NavBar/>
       <BodyComponent/>
    </Container>
    
  )
}

export default App
