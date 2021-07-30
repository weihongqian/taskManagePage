import Table from "./Table";
import { StyleDiv } from "../styles";
import { useRecoilState, useRecoilValue } from "recoil";
import { taskListAtom, filterTalkListAtom } from "../store";
import { useState } from "react";

export default function TableArea() {
  const [taskList, setTaskListAtom] = useRecoilState(taskListAtom);
  const filterTalkList = useRecoilValue(filterTalkListAtom);
  const [taskName, setTaskName] = useState("");
  const [editIndex, setEditIndex] = useState(9999);
  const [id, setId] = useState(0);

  // 删除
  const onDelect = (index: number) => {
    setTaskListAtom([
      ...taskList.slice(0, index),
      ...taskList.slice(index + 1)
    ]);
  };

  // 编辑
  const onEdit = (index: number, record: any) => {
    const { name } = record;
    setEditIndex(index);
    setTaskName(name);
  };

  // 改变数据
  const onChangeEdit = (value: any, index: number) => {
    let newRow = { ...taskList[index || 0], ...value };
    setTaskListAtom([
      ...taskList.slice(0, index),
      newRow,
      ...taskList.slice((index || 0) + 1)
    ]);
  };

  // 添加
  const onAdd = () => {
    if (editIndex !== 9999) {
      onChangeEdit({ name: taskName }, editIndex);
    } else {
      const newTask = { id: id + 1, name: taskName, status: "todo" };
      setId(id + 1);
      setTaskListAtom((oldValues) => [...oldValues, newTask]);
    }
    setTaskName("");
    setEditIndex(9999);
  };

  return (
    <StyleDiv>
      <div className="table-operation-area">
        <div className="add-area">
          <label>{`${editIndex === 9999 ? "+" : "编辑"}`}任务 </label>
          <input
            value={taskName}
            onChange={(ev) => setTaskName(ev.target.value)}
          />
          <button className="add-btn" disabled={!taskName} onClick={onAdd}>
            添加
          </button>
        </div>
        <div>共 {filterTalkList.length} 条数据</div>
      </div>
      <Table
        dataSource={filterTalkList}
        column={[
          { name: "id", code: "id", width: 70 },
          { name: "名称", code: "name" },
          {
            name: "状态",
            code: "status",
            cell: (value: string, index: number) => {
              return (
                <div style={{ textAlign: "center" }}>
                  <select
                    onChange={(ev) =>
                      onChangeEdit({ status: ev.target.value }, index)
                    }
                    value={value}
                  >
                    <option value="done">完成</option>
                    <option value="todo">待办</option>
                  </select>
                </div>
              );
            }
          },
          {
            name: "操作",
            cell: (value: string, index: number, record: any) => {
              return (
                <div className="column-operation">
                  <button onClick={() => onEdit(index, record)}>修改</button>
                  <button onClick={() => onDelect(index)}>删除</button>
                </div>
              );
            }
          }
        ]}
      />
    </StyleDiv>
  );
}
