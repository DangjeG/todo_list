import {useState} from 'react';
import styled from 'styled-components'
import {Modal} from './components/Modal'


const Input = styled.input`
  font-size: 20px;
`

const Button = styled.button`
  padding: 5px;
  background: #ffffff;
  border: solid 1px rgb(46, 99, 231);
  border-radius: 10px;
`

export const ConfirmAlert = ({warn,onAccept, children}) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleShowAlert = () => {
        setIsModalVisible(true)
    }

    const handleCloseAlert = () => {
        setIsModalVisible(false);
    }

    const handleAccept = () => {
        onAccept()
        handleCloseAlert()

    }

    const renderModal = () => {
        if (isModalVisible)
            return (
                <Modal onClose={handleCloseAlert} onAccept={handleAccept}>
                    <div>{warn}</div>
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