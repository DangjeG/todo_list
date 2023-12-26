import {useNotions} from "../hooks/useNotions";
import {Notion} from "./Notion/Notion";
import styled from "styled-components";



const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 1%;
`

export const NotionList = ({searchedName}) => {

    const {notions} = useNotions()
    if (!notions) return null
    const filterList = filterName(notions, searchedName)

    return(
        <Container>
            {filterList.map((item) => {
                return <Notion key={item.id} notion={item}/>
                })
            }
        </Container>
    )
}

const filterName = (list, searchedName) => {
    console.log(list)
    return list.filter(item => item.title.toLowerCase().includes(searchedName.toLowerCase()))
}