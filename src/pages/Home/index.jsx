
import { Container, Form } from "./styles"
import InputComponent from "../../components/Input"
import TopBackground from "../../components/TopBackground"
import Button from "../../components/Button"
import { useNavigate } from "react-router-dom"
import Title from "../../components/Title"



function Home() {
const navigate = useNavigate()

  return (
    <Container>
     <TopBackground/>

      <Form>
        <Title>Cadastrar Usuário</Title>

        <InputComponent />
        
      </Form>
      <Button onClick={() => navigate("/lista-de-usuarios")}>Ver Lista de Usuários</Button>
 
    </Container>
  )
}

export default Home
