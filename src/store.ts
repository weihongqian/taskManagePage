import { atom, selector } from "recoil";
import { ITableConfig } from "./interface";

export const taskListAtom = atom<ITableConfig[]>({
  key: "taskListAtom",
  default: []
});

export const filterAtom = atom<string>({
  key: "filterAtom",
  default: "all"
});

export const filterTalkListAtom = selector({
  key: "filterTalkListAtom",
  get: ({ get }) => {
    const filterValue = get(filterAtom);
    const taskList = get(taskListAtom);
    if (filterValue === "all") {
      return taskList;
    }
    return taskList.filter((item) => item.status === filterValue);
  }
});
