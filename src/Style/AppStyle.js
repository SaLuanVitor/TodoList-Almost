import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

export const ToDo = styled.div`
  margin: 2em auto;
  background-color: pink;
  max-width: 1100px;
  max-height: 500px;
  height: 500px;
  overflow: hidden;
  border-radius: 2em;
`;

export const H1 = styled.h1`
  margin: 1em auto;
  text-align: center;
  color: whitesmoke;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  border-radius: 2em;
  margin-left: 2em;
  padding: 0.5em;
  border: none;
`;

export const Button = styled.button`
  border: none;
  border-radius: 2em;
  margin-top: 1em;
  padding: 0.5em;
  width: 5em;
  cursor: pointer;
  margin-left: 1em;
  transition: 1s all;
  :hover {
    background-color: wheat;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 2em auto;
  align-items: left;
  max-height: 300px;
  overflow: scroll;
  padding: 2em;
  ::-webkit-scrollbar{
    display: none;
  }
`;

export const Li = styled.li`
  margin-bottom: 1em;
  display: flex;
  justify-content: space-between;
  border: solid white;
  padding: 0.5em;
  transition: 1s all;
  border-radius: 1em;
  :hover{
    background-color: wheat;
  }
`

export const DelButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 1em;
  padding: 0.5em;
  transition: 1s all;
`;

export const Img = styled.img`
  width: 10px;
  cursor: pointer;
`;
