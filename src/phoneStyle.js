import styled from 'styled-components';

export const GeneralWrapper = styled.div`
  padding: 32px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Open Sans', Roboto, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
  display: none;
  @media (max-width: 576px) {
    display: block;
  }
`;

// export const GeneralTitle = styled.h1`

// `

export const ImgDiv = styled.div`
  display: flex;
  width: 100%;
`;

export const LogoImg = styled.img`
  height: 90px;
  width: 250px;
  margin-top: 40px;
  margin-bottom: 50px;
`;
export const RightLogoImg = styled.img`
  margin-left: auto;
  margin-right: 0;
  height: 200px;
  width: 250px;
`;

export const GeneralTitle = styled.p`
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 550;
  line-height: 1.5;
  text-transform: none;
  white-space: normal;
`;

export const I = styled.i`
  position: absolute;
  top: 12px;
  left: 10px;
`;

export const GeneralBtn = styled.button`
  margin-right: 0;
  margin-left: auto;
  cursor: pointer;
  outline: 0px;
  border: 0px;

  font-size: 0.875rem;
  line-height: 1.75;
  padding: 6px 16px;
  color: rgb(255, 255, 255);
  background-color: rgb(78, 151, 253);
  box-shadow: rgb(43 52 69 / 10%) 0px 4px 16px;
  font-weight: 600;
  border-radius: 8px;
  min-height: 44px;

  &:hover {
    background-color: #0653bf;
  }
  &:active {
    background-color: white;
  }

  @media (max-width: 600px) {
    margin-top: 15px;
    margin-left: 0;
  }
`;

export const TableContainer = styled.div`
  @media (max-width: 1000px) {
    overflow-x: scroll;

    ::-webkit-scrollbar {
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background-color: white;
      border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`;

export const Table = styled.table`
  border: none;
  background-color: rgb(220, 222, 227);
  border-spacing: 0;
  width: 100%;
  border-radius: 10px;
  height: 100%;
`;
export const THead = styled.thead`
  border: none;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

export const Tr = styled.tr``;
export const Th = styled.th`
  font-size: 15px;
  font-weight: 500;
  padding: 16px 10px;
  box-sizing: border-box;
  width: fit-content;
  color: rgb(43, 52, 69);
  cursor: pointer;
`;

export const TBody = styled.tbody`
  border: 0;
  background-color: white;
`;
export const Td = styled.td`
  box-sizing: border-box;
  width: 50px;
  border-collapse: collapse;
  text-align: left;
  padding: 10px 10px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(43, 52, 69);
  border-bottom: 1px solid rgb(227, 233, 239);
  height: 55px;
  max-height: 100%;
`;

export const RowDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const FashionTitle = styled.p`
  font-size: 13px;
  padding: 3px 12px;
  border-radius: 16px;
  display: inline-block;
  color: rgb(43, 52, 69);
  background-color: rgb(243, 245, 249);
`;

export const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.i`
  cursor: pointer;
  margin: 0 8px;
  &:hover {
    fill: rgb(78, 151, 253);
    stroke: rgb(78, 151, 253);
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Id = styled.p`
  width: 100px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  white-space: pre-wrap;
  overflow: hidden;
`;
