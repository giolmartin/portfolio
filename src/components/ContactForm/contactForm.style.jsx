import styled from 'styled-components';

export const Container = styled.div`
  background-color: transparent;
  ${'' /* font-family: ${({ theme }) => theme.fonts.text}; */}
  color: ${({ theme }) => theme.text};
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ${
    '' /* width: 100vw;
  height: 100vh; */
  }
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

  @media (max-width: 768px) {
    width: 90%; // Adjust the width for smaller screens
    height: auto; // Make height auto for better mobile view
    padding: 20px; // Add some padding
  }
`;

export const Input = styled.input`
  border: 0;
  margin-bottom: 10px;
  padding: 20px;
  font-size: 17px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  border: none;
  border-bottom: 1px solid;
  ${'' /* font-family: ${({ theme }) => theme.fonts.text}; */}
  cursor: pointer;
  border-color: ${({ theme }) => theme.opaque_primary};
  &::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.3;
  }
  &:focus::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.8;
  }
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
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
  border: none;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.opaque_primary};
  ${'' /* font-family: ${({ theme }) => theme.fonts.text}; */}
  cursor: pointer;
  &::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.3;
  }
  &:focus::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.8;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
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

  @media (max-width: 768px) {
    font-size: 0.8rem; // Smaller font size for mobile
  }
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

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const RectWrap = styled.svg`
  position: absolute;

  fill: ${({ bgColor }) => bgColor};
  border-color: ${({ theme }) => theme.text};
`;

export const Siz = styled.div`
  font-size: 2rem;
  z-index: 1000;

  @media (max-width: 768px) {
    height: 2.5vh;
  }
`;

export const Title = styled.h1`
  ${'' /* font-family: ${({ theme }) => theme.fonts.header}; */}
  color: ${({ theme }) => theme.text};

  font-weight: 200;
  font-size: 2rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
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
