import styled from 'styled-components';

export const HeadingS = styled.h4 `
    font-size: ${props=> props.size || '1.5rem'};
    line-height: ${props=> props.line || '28px'};
    font-weight: ${props=> props.weight || '700'};
    letter-spacing: ${props=> props.letter || '-0.6'};
    color: ${props => props.color || '#323953'};
    margin: ${props=> props.margin || '0 60px 0 60px'};

    @media only screen and (max-width: 600px) {
        font-size: 20px;
        line-height: 24px;
    }
`;