import { useEffect, useState } from "react"
import api from "../../services/api"
import Button from "../../components/Button"
import TopBackground from "../../components/TopBackground"
import { useNavigate } from "react-router-dom"
import Title from "../../components/Title"
import { AvatarUser, CardUsers, Container, ContainerUsers, TrashIcon } from "./styles"
import Trash from "../../assets/trash.svg"

function ListUsers() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/usuarios')
            setUsers(data)
        }
        getUsers()
    }, [])

  async function deleteUsers(id){
        await api.delete(`/usuarios/${id}`)

        const updateUsers = users.filter(user => user.id !== id)

        setUsers(updateUsers)
    }


    const navigate = useNavigate()
    return (
        <Container>
            <TopBackground />
            <Title >Listagem de Usuários</Title>

            <ContainerUsers>
                {users.map((user) => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`}/>
                        <div >
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <TrashIcon src={Trash} onClick={() =>  deleteUsers(user.id)}/>
                    </CardUsers>
                ))}
            </ContainerUsers>

            <Button onClick={() => navigate(-1)} theme='primary'>Voltar</Button>
        </Container>
    )
}

export default ListUsers