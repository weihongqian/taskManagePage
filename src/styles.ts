import styled from "styled-components";

export const StylePage = styled.div`
  header {
    margin-bottom: 32px;
  }
`;

export const StyleDiv = styled.div`
  padding: 12px;
  background: #fff;
  border: 1px solid #dfe3e8;
  box-shadow: 0 1px 4px 0 #c8ced8;
  margin-bottom: 12px;
  .table-operation-area {
    display: flex;
    justify-content: space-between;
  }
  .add-area {
    margin-bottom: 12px;
    .add-btn {
      margin-left: 12px;
      background: #00cccc;
      border: 0;
      border-radius: 3px;
      font-size: 14px;
      color: #fff;
    }
    .add-btn:disabled {
      background: #eee;
    }
    .add-btn:disabled:hover {
      cursor: not-allowed;
    }
  }
  .column-operation {
    button {
      margin: 0 8px;
    }
  }
`;
