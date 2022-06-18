import styled from 'styled-components';

export const Display = styled.h1 `
    font-size: ${props=> props.size || '3rem'};
    line-height: ${props=> props.line || '52px'};
    font-weight: ${props=> props.weight || '700'};
    letter-spacing: ${props=> props.letter || '-1.2'};
    color: ${props => props.color || '#323953'};
    margin: ${props=> props.margin || '0 60px 0 60px'};
`;