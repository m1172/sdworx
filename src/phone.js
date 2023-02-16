import React, { useContext, useState } from 'react';

import { ReactComponent as Delete } from './assets/icon/delete.svg';
import Logo from './assets/img/Logo.png';
import RightLogo from './assets/img/300.png';
import {
  ColumnDiv,
  FashionTitle,
  Flex,
  GeneralWrapper,
  Icon,
  IconDiv,
  CustomerImg,
  RowDiv,
  Table,
  TBody,
  Td,
  Th,
  THead,
  Tr,
  TableContainer,
  ImgDiv,
  LogoImg,
  RightLogoImg,
  Id,
  GeneralTitle,
} from './phoneStyle.js';
import { MainContext } from './Context';

export const Phone = () => {
  const { data, setData } = useContext(MainContext);
  let datas = data;

  function handleDelete(id) {
    setData(data.filter((value) => value.id !== id));
  }

  return (
    <GeneralWrapper>
      <ImgDiv>
        <ImgDiv>
          {' '}
          <LogoImg src={Logo} />
        </ImgDiv>
      </ImgDiv>
      <GeneralTitle>Attendees ({data.length})</GeneralTitle>
      <TableContainer>
        <Table>
          {/* TableBody is starting here. */}
          <TBody>
            {data.map((value) => (
              <Tr key={value.id}>
                <Td>
                  <RowDiv>
                    <ColumnDiv style={{ fontSize: '18px', fontWeight: 'bold' }}>
                      {value.name}
                    </ColumnDiv>
                    <ColumnDiv style={{ width: '150px', marginTop: '5px' }}>
                      {value.city}- {value.country}{' '}
                    </ColumnDiv>
                  </RowDiv>
                </Td>

                <Td>
                  <IconDiv onClick={() => handleDelete(value.id)}>
                    <Id>{value.dateOfBirth}</Id>
                    <Icon>
                      <Delete />
                    </Icon>
                  </IconDiv>
                </Td>
              </Tr>
            ))}
          </TBody>
        </Table>
      </TableContainer>
    </GeneralWrapper>
  );
};

export default Phone;
