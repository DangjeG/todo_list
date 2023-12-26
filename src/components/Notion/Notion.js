import styled from "styled-components";
import {FormAlert} from "../FormAlert/FormAlert";
import {useDeleteNotion, useUpdateNotion} from "../../hooks/useNotions";
import {ConfirmAlert} from "../FormAlert/ConfirmAlert";



const Title = styled.a`
  font-size: 20px;
`

const Container = styled.div`
  display: flex;
  padding: 1%;
  flex-direction: row;
  align-content: center;
  align-items: center;
  box-shadow: 2px 2px 5px rgba(2, 2, 2, .5);
  border-radius: 10px;
  justify-content: space-between;
  flex-wrap: nowrap;
`
const DataContainer = styled.div`
  display: flex;
  gap: 1%;
  height: 100%;
  width: 80%;
  align-items: center;
  justify-content: flex-start;

`
const ButtonContainer = styled.div`
  height: 20%;
  display: flex;
  gap: 10%;
  justify-content: flex-end;
  flex-wrap: nowrap;
`

const Checkbox = styled.input`
  height: 25px;

`


export const Notion = ({notion}) => {

    const {deleteNotion} = useDeleteNotion()
    const {updateNotion} = useUpdateNotion()

    const handleAccept = (title) => {
        const newNotion = {...notion, title:title}
        updateNotion(newNotion)
    }
    const handleDelete = () => {
        deleteNotion(notion.id)
    }
    
    const handleCompleted = () => {
        const newNotion = {...notion, completed: !notion.completed}
        updateNotion(newNotion)
    }


    return(
        <Container>
            <DataContainer>
                <Checkbox type={"checkbox"} onChange={handleCompleted} checked={notion.completed}/>
                <Title>{notion.title}</Title>
            </DataContainer>
            <ButtonContainer>
                <ConfirmAlert onAccept={handleDelete} warn={"Вы точно хотите удалить запись?"}>Delete</ConfirmAlert>
                <FormAlert onAccept={handleAccept} initialState={notion}>Edit</FormAlert>
            </ButtonContainer>
        </Container>
    )
}