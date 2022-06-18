import styled from 'styled-components';

export const HeadingXs = styled.h5 `
    font-size: ${props=> props.size || '20px'};
    line-height: ${props=> props.line || '24px'};
    font-weight: ${props=> props.weight || '700'};
    letter-spacing: ${props=> props.letter || ''};
    color: ${props => props.color || '#323953'};
    margin: ${props=> props.margin || '0 60px 0 60px'};

    @media only screen and (max-width: 600px) {
        font-size: 18px;
        line-height: 22px;
    }
`;