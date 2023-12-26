import styled from 'styled-components'

const Backdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #0000007d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 30px;
  background: white;
  border-radius: 10px;
  position: relative;
  gap: 10px;
  justify-content: space-around
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  gap: 5px;
`
const ButtonClose = styled.button`
  height: 2.2rem;
  width: 4rem;
  font-size: 14px;
  background: white;
  border: solid 1px rgb(255, 0, 0);
  border-radius: 10px;
  color: rgb(255, 0, 0);
`
const ButtonAccept = styled.button`
  height: 2.2rem;
  width: 4rem;
  font-size: 14px;
  background: white;
  border: solid 1px rgb(0, 255, 0);
  border-radius: 10px;
  color: rgb(0, 255, 0) ;
`

export const Modal = ({onClose, onAccept ,children }) => {

    const contentComponentClickHandle = (event) => {
        event.stopPropagation();
    }

    return (
        <Backdrop onClick={onClose}>
            <Content onClick={contentComponentClickHandle}>
                <ContentContainer>
                    {children}
                </ContentContainer>
                <ButtonContainer>
                    <ButtonClose onClick={onClose}>Close</ButtonClose>
                    <ButtonAccept onClick={onAccept}>Accept</ButtonAccept>
                </ButtonContainer>
            </Content>
        </Backdrop>
    )
}