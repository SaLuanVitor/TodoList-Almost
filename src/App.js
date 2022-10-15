import React, { useState } from "react";
import trash from "./img/Trash.png";
import * as S from "./Style/AppStyle.js";

export default function App() {
  const [input, setInput] = useState();
  const [list, setList] = useState([]);

  const add = () => {
    if (input !== "" && !input.match(/^[ \t]+$/)) {
      const BolsaDoInput = {
        value: input !== "" && input,
        id: Date.now(),
        status: false
      }
      setList((prevState) => [...prevState, BolsaDoInput]);
      setInput("");
    }
  };


  const Deletar = (id) => {
    const ListaFiltrada = list.filter((item) => item.id !== id);

    setList(ListaFiltrada);
  };

  const DelAll = () => {
    const resetList = list.filter((item) => item.id === "");
    setList(resetList);
    setInput("")
  };

  return (
    <S.ToDo>
    <S.GlobalStyle />
      <S.H1>ToDo List</S.H1>
      <S.Form onSubmit={(e) => e.preventDefault()}>
        <S.Input value={input} onChange={(e) => {setInput(e.target.value)}}/>
        <S.Button onClick={() => {add()}}>
          Add
        </S.Button>
        <S.Button onClick={() => {DelAll()}}>
          Reset
        </S.Button>
      </S.Form>
      <S.Ul>
        {list.map((item, index) => (
          <S.Li key={index}>
            {item.value}
            <S.DelButton onClick={() => {Deletar(item.id)}}>
              <S.Img src={trash} alt="trash" />
            </S.DelButton>
          </S.Li>
        ))}
      </S.Ul>
    </S.ToDo>
  );
}
