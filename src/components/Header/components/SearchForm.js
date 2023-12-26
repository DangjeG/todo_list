import styled from "styled-components";


const Input = styled.input`
  height: 30px;
  font-size: 20px;
  border-radius: 10px;
`

export const SearchForm = ({onSearch}) => {
    const handleChange = (event) => {
      onSearch(event.target.value)
    }
    return(
        <Input onChange={handleChange}/>
    )
}