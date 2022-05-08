import styled from '@emotion/styled';
import React from 'react'
import {categories} from "../data";
import CategoryItem from './CategoryItem';

const Container = styled.div`
    display: flex;
    padding: 20px;
`;

const Categories = () => {
  return (
    <Container>
        {categories.map(item=> (
            <CategoryItem item={item} />
        ))};
    </Container>
  )
};

export default Categories