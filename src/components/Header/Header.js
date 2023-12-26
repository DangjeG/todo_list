import styled from "styled-components";
import {FormAlert} from "../FormAlert/FormAlert";
import {SearchForm} from "./components/SearchForm";
import {useAddNewNotion} from "../../hooks/useNotions";


const Container = styled.div`
  height: 50px;
  padding: 0 3%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2%;
  border-bottom: solid 1px gray;
`


export const Header = ({onSearch}) => {

    const {addNewNotion} = useAddNewNotion()

    const handleCreate = (title) => {
        addNewNotion({
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
            <FormAlert onAccept={handleCreate}>Create</FormAlert>
            <SearchForm onSearch={handleSearch}/>
        </Container>
    )
}
