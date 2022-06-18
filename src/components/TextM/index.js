import styled from 'styled-components';

export const TextM = styled.h6 `
    font-size: ${props=> props.size || '16px'};
    line-height: ${props=> props.line || '24px'};
    font-weight: ${props=> props.weight || '400'};
    letter-spacing: ${props=> props.letter || ''};
    color: ${props => props.color || '#323953'};
    margin: ${props=> props.margin || '0 60px 0 60px'};
`;