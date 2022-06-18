import styled from 'styled-components';

export const Table = styled.table `
    width: ${props => props.width || '75%'};
    margin: ${props => props.margin || '0 0 0 80px'};
    background-color: ${props => props.bgColor || '#fff'};
   
    th{
        padding: 0 0 10px 0;
        background-color: #EBECF0;
        text-align: start;
        color: #424242;
        font-size: 14px;

        :first-child{
            padding-left: 60px;
        }
    }

    tr{
        border-bottom: 1px solid #EBECF0;
        padding: 10px;
    }
    td{
        padding: 15px 0 15px 0;
        font-size: 12px;
        color: #424242;
    }
`;