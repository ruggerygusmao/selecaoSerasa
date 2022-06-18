import styled from 'styled-components';

export const Box = styled.div`
    box-sizing: border-box;
    display: ${props=> props.display || ''};
    flex-direction: ${props=> props.direction || ''};
    align-items: ${props=> props.align || ''};
    justify-content: ${props=> props.justify ||''};
    width: ${props=> props.width || '100%'};;
    height: ${props=> props.height || '100px'};
    margin: ${props => props.margin || '0 0 0 0'};
    background-color: ${props=> props.bgColor || ''};
`;