import styled from 'styled-components'
export const ParentElementPosts = styled.div
`   
    max-width:900px;
    width: 100%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;

    @media screen and (max-width:500px) {
        flex-direction: column;
        align-items: center;
        
    }
    

`