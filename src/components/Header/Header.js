import styled from "styled-components";
import {FormAlert} from "../FormAlert/FormAlert";
import {SearchForm} from "./components/SearchForm";
import {useAddNewNotion} from "../../hooks/useNotions";


const Container = styled.div`
  height: 50px;
  padding: 0 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2%;
  border-bottom: solid 1px gray;
`
const Tools = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2%;
`
const Logo = styled.p`
  font-size: 35px;
  font-style: italic;
`


export const Header = ({onSearch}) => {

    const {addNewNotion} = useAddNewNotion()

    const handleCreate = (title) => {
        addNewNotion(
            {
            id: Date.now(),
            title: title,
            completed: false
            })
    }

    const handleSearch = (value) => {
      onSearch(value)
    }

    return(
        <Container>
            <Logo>Todo List</Logo>
            <Tools>
                <FormAlert onAccept={handleCreate}>Create</FormAlert>
                <SearchForm onSearch={handleSearch}/>
            </Tools>
        </Container>
    )
}
