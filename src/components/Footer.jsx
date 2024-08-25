// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #fff;
  padding: 10px;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      &copy; developed by vm2124. All rights reserved.
    </FooterContainer>
  );
}

export default Footer;
