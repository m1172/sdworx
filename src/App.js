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
} from './style.js';
import { MainContext } from './Context';

export const Customers = () => {
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
          <RightLogoImg src={RightLogo} />
        </ImgDiv>
      </ImgDiv>
      <GeneralTitle>Attendees ({data.length})</GeneralTitle>
      <TableContainer>
        <Table>
          <THead>
            <Tr>
              <Th>
                <RowDiv style={{ marginLeft: '15px' }}>Name</RowDiv>
              </Th>
              <Th>
                <RowDiv>DATE OF BIRTH</RowDiv>
              </Th>
              <Th>
                <RowDiv>CITY</RowDiv>
              </Th>
              <Th>
                <RowDiv>COUNTRY</RowDiv>
              </Th>

              <Th>
                <Flex>
                  <RowDiv>Action</RowDiv>
                </Flex>
              </Th>
            </Tr>
          </THead>

          {/* TableBody is starting here. */}
          <TBody>
            {data.map((value) => (
              <Tr key={value.id}>
                <Td>
                  <RowDiv>
                    <Id>{value.id}.</Id>
                    <CustomerImg src={value.avatar} />
                    <ColumnDiv>{value.name}</ColumnDiv>
                  </RowDiv>
                </Td>
                <Td>
                  <FashionTitle>{value.dateOfBirth}</FashionTitle>
                </Td>
                <Td>
                  <FashionTitle>{value.city}</FashionTitle>
                </Td>
                <Td>{value.country}</Td>

                <Td>
                  <IconDiv onClick={() => handleDelete(value.id)}>
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

export default Customers;
