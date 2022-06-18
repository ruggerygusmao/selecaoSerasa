import styled from 'styled-components';

export const HeadingL = styled.h2 `
    font-size: ${props=> props.size || '2.5rem'};
    line-height: ${props=> props.line || '44px'};
    font-weight: ${props=> props.weight || '700'};
    letter-spacing: ${props=> props.letter || '-1'};
    color: ${props => props.color || '#323953'};
    margin: ${props=> props.margin || '0 60px 0 60px'};

    @media only screen and (max-width: 600px) {
        font-size: 32px;
        line-height: 36px;
    }
`;