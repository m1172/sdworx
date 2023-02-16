import styled from 'styled-components';

export const PopUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;
export const PopUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: fit-content;
  background-color: white;
  padding: 16px 12px;
  border-radius: 15px;
  margin: 10px;
`;

export const FlexRelative = styled.div`
  display: flex;
  position: relative;

  align-items: center;
  justify-content: center;
`;
export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const PopUpTitle = styled.span`
  font-size: 18px;
  color: #222;
  font-weight: 700;
  /* margin-left: 15px; */
`;
export const PopUpP = styled.p`
  margin: 8px 0;
  font-size: 15px;
  color: #666;
`;

export const Icon = styled.i`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: 0;

  stroke: black;
  cursor: pointer;
  &:hover {
    fill: red;
    stroke: red;
    background-color: #f5f5f5;
  }
  &:active {
    stroke: white;
    background-color: white;
  }
`;

export const Button = styled.button`
  margin-top: 8px;
  height: 33px;
  background: ${(props) => (props.cancel ? '#f5f5f5;' : '#fd384f')};
  color: ${(props) => (props.cancel ? 'black' : 'white')};
  width: 100%;
  border: none;
  font-size: 16px;
  border-radius: 20px;
  font-weight: 550;

  &:active {
    background-color: white;
    color: white;
  }
`;
