import styled from 'styled-components';

export const Container = styled.div`
  background-color: transparent;
  ${'' /* font-family: ${({ theme }) => theme.fonts.text}; */}
  color: ${({ theme }) => theme.text};
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-weight: 200;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  z-index: 500;
  width: 400px;
  height: 100vh;
`;

export const Input = styled.input`
  border: 0;
  margin-bottom: 10px;
  padding: 20px;
  font-size: 17px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  border: 1px solid ${({ theme }) => theme.accent};
  ${'' /* font-family: ${({ theme }) => theme.fonts.text}; */}
  cursor: pointer;
  border-color: ${({ theme }) => theme.primary};
  &::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.8;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
  }
`;

export const TextArea = styled.textarea`
  border: 0;
  margin-bottom: 10px;
  padding: 20px;
  font-size: 17px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  border: 1px solid white;
  ${'' /* font-family: ${({ theme }) => theme.fonts.text}; */}
  cursor: pointer;
  border-color: ${({ theme }) => theme.primary};
  &::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.8;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
  }
`;

export const SubmitButton = styled.button`
  padding: 15px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: 1px solid ${({ theme }) => theme.text};
  outline: 1px solid 'white';
  outline-offset: -1px;
  border: 0;
  cursor: pointer;
  background-color: ${({ theme }) => theme.background};
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  color: 'blue';
  font-weight: 200;
  ${'' /* font-family: ${({ theme }) => theme.fonts.special}; */}
  font-size: 15px;
  position: relative;
  border-color: black;
`;

export const Update = styled.div`
  z-index: 2000;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 96%;
  margin: 5px;
  height: 81%;
  position: absolute;
  font-size: 15px;
  border-color: ${({ theme }) => theme.text};
`;

export const Button = styled.button`
  width: 150px;
  border-radius: 10px;
  border: 0;
  padding: 10px;
  margin-top: 1rem;
  background-color: transparent;
  border: 1px solid white;
  color: ${({ theme }) => theme.accent};
  font-weight: 200;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.5s;
  border-color: ${({ theme }) => theme.after};
  border-color: 'white';
  &:hover {
    border-color: ${({ theme }) => theme.before};
    border-color: 'red';
    transition: 0.5s;
  }
`;

export const RectWrap = styled.svg`
  position: absolute;

  fill: ${({ bgColor }) => bgColor};
  border-color: ${({ theme }) => theme.text};
`;

export const Siz = styled.div`
  font-size: 30px;
  z-index: 1000;
`;

export const Title = styled.h1`
  ${'' /* font-family: ${({ theme }) => theme.fonts.header}; */}
  color: ${({ theme }) => theme.text};
  color: 'white';
  font-weight: 200;
  font-size: 25px;
  text-align: center;
`;

export const Message = styled.p`
  ${'' /* font-family: ${({ theme }) => theme.fonts.text}; */}

  color: ${({ theme }) => theme.text};

  color: 'white';
  font-weight: 200;
  font-size: 2rem;
  text-align: center;
  margin: 0;
  padding: 0;
`;
