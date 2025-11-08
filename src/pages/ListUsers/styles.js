import styled from "styled-components";

export const Container = styled.div`
    background-color: #181f36;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
`

export const ContainerUsers = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
    margin: 40px 0;

    @media (max-width:760px){
        grid-template-columns: 1fr;
    }
    `

export const CardUsers = styled.div`
    background-color: #252d48;
    padding: 16px;
    border-radius: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    max-width: 380px;

    h3{
        color: #ffffff;
        font-size: 24px;
        text-transform: capitalize;
    }
    p{
        color: #ffffff;
        font-size: 14px;
        font-weight: 700;

    }
`

export const AvatarUser = styled.img`
height: 80px
`

export const TrashIcon = styled.img`
    cursor: pointer;
    padding-left: 30px;

    &:hover{
        opacity: 0.7;
    }

    &:active {
          filter: brightness(0) saturate(100%) invert(32%) sepia(100%) saturate(5000%) hue-rotate(0deg);
    }
`