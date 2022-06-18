import styled from 'styled-components';

export const HeadingM = styled.h3 `
    font-size: ${props=> props.size || '2rem'};
    line-height: ${props=> props.line || '36px'};
    font-weight: ${props=> props.weight || '700'};
    letter-spacing: ${props=> props.letter || '-0.8'};
    color: ${props => props.color || '#323953'};
    margin: ${props=> props.margin || '0 60px 0 60px'};

    @media only screen and (max-width: 600px) {
        font-size: 20px;
        line-height: 28px;
    }
`;