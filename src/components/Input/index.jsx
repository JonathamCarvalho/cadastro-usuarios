import { useRef } from "react"
import { ContainerInput, Input, InputLabel } from "./styles"
import styles from "/src/css/input.module.css"
import Button from "../Button"
import api from "../../services/api"


function InputComponent() {

const InputName = useRef()
const InputAge = useRef()
const InputEmail = useRef()


async function cadastrarNewUser() {
  const data = await api.post("/usuarios", {
    email: InputEmail.current.value,
    age: parseInt (InputAge.current.value),
    name: InputName.current.value
  })
  console.log(data)
}

  return (
    <>
      <ContainerInput >
        <div>
          <InputLabel> Nome<span> *</span></InputLabel>
          <Input type="text" placeholder="Nome do Usuário" ref={InputName} />
        </div>

        <div>
          <InputLabel> Idade<span> *</span></InputLabel>
          <Input type="number" placeholder="Idade do Usuário" ref={InputAge} />
        </div>

      </ContainerInput >

      <div className={styles.emailWrapper}>
        <InputLabel> E-mail <span> *</span></InputLabel>
        <Input type="email" placeholder="E-mail do Usuário" ref={InputEmail} />
      </div>
      <Button onClick={cadastrarNewUser} theme="primary" >Cadastrar Usuário</Button>
      
    
    </>

  )
}


export default InputComponent