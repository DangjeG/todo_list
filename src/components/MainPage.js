import {useState} from "react";
import {Header} from "./Header/Header";
import {NotionList} from "./NotionList";
import styled from "styled-components";


const Container = styled.div`
  margin: 5%;
  min-width: 550px;
  border-radius: 10px;
`

export const MainPage = () => {

    const [searchString, setSearchString] = useState("")


    const handleSearch = (value) => {
        setSearchString(value)
    }

    return (
        <>
            <Container>
                <Header onSearch={handleSearch}/>
                <NotionList searchedName={searchString}/>
            </Container>
        </>
    )
}