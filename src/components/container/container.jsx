import React, { Component } from 'react';
import styled from 'styled-components';

const ContainerLayout = styled.div`
  width: 344px;
  margin: 40px auto;
`;

export const Container = props => <ContainerLayout {...props}/>;
