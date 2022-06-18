import styled from 'styled-components';

export const Logo = styled.div `
    margin: ${props=> props.margin || '0 60px 0 60px'};
    
    img{
        height: ${props=> props.height || '50px'};
        width: ${props=> props.width || ''};
    }   
    
`;