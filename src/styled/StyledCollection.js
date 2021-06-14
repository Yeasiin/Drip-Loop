import styled from "styled-components";

export const StyledCollectionTitle = styled.h2`
    font-size:28px;
    margin-bottom: 15px;
    font-weight:lighter;
    text-transform: capitalize;
    
`
export const StyledCollectionPreview = styled.div`
    display:grid;
    grid-template-columns: repeat(4,1fr);
    gap:20px
`
export const StyledCollectionItem = styled.div`
    height: 320px;
    cursor:pointer;

`
export const StyledCollectionImage = styled.div`
    background-repeat: no-repeat;
    background-size:cover;
    background-position: center;
    height:90%;
`
export const StyledCollectionFooter = styled.div`
    display:flex;
    font-size:18px;
    margin-top:8px;
    justify-content:space-between
`