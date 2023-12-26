import {useEffect, useState} from 'react';
import styled from 'styled-components'
import {Modal} from './components/Modal'


const Input = styled.input`
  border-radius: 10px;
  font-size: 20px;
`

const Button = styled.button`
  height: 2.2rem;
  width: 4rem;
  padding: 5px;
  background: #ffffff;
  border: solid 1px rgb(46, 99, 231);
  border-radius: 10px;
  font-size: 14px;
`

export const FormAlert = ({onAccept, initialState, children}) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [title, setTitle] = useState('')

    const handleShowAlert = () => {
        setIsModalVisible(true)
    }

    const handleCloseAlert = () => {
        setIsModalVisible(false);
    }

    const handleAccept = () => {
        if(title.length < 1) return
        onAccept(title)
        handleCloseAlert()
        if (!initialState) setTitle("")

    }
    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    useEffect(() => {
        if (!initialState) return
        setTitle(initialState.title)
    }, []);

    const renderModal = () => {
        if (isModalVisible)
            return (
                <Modal onClose={handleCloseAlert} onAccept={handleAccept}>
                    <div>Введите название</div>
                    <Input value={title} onChange={handleChange}/>
                </Modal>
            )
        else return null
    }

    return (
        <>
            {renderModal()}
            <Button onClick={handleShowAlert}>
                {children}
            </Button>
        </>
    )
}