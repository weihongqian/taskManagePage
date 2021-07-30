import React from "react";
import { useRecoilState } from "recoil";
import { StyleDiv } from "../styles";
import { filterAtom } from "../store";

export default function SearchArea() {
  const [filterValue, setFilterAtom] = useRecoilState(filterAtom);
  const onChange = (value: string) => {
    setFilterAtom(value);
  };
  return (
    <StyleDiv>
      <label style={{ marginRight: "8px" }}>状态查询</label>
      <select onChange={(ev) => onChange(ev.target.value)} value={filterValue}>
        <option value="all">全部</option>
        <option value="done">已完成</option>
        <option value="todo">待办</option>
      </select>
    </StyleDiv>
  );
}
