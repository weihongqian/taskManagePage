import { StylePage } from "../styles";
import TableArea from "./TableArea";
import SearchArea from "./SearchArea";

export default function Entry() {
  return (
    <StylePage>
      <header>任务管理</header>
      <SearchArea />
      <TableArea />
    </StylePage>
  );
}
