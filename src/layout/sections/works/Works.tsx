import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {Menu} from "../../components/menu/Menu";

const worksItems = ['All', 'Landing Page', 'React', 'SPA'];

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>My Works</SectionTitle>
      <Menu menuItems={worksItems}/>
    </StyledWorks>
  );
};


type StyledWorksPropsType = {}

const StyledWorks = styled.section<StyledWorksPropsType>`
    min-height: 100vh;
    background-color: #f8aeff;
`
