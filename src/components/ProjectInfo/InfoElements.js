import styled from 'styled-components'

export const InfoContainer = styled.div`
    display: flex;
    background: var(--main-bg-color);
    height: 90vh;
    width: 100%;

    @media screen and (max-width: 960px) {
        height: 80vh;
        overflow-y: hidden;
    }
`

export const InfoWrapper = styled.div`
    background: var(--card-color);
    display: flex;
    z-index: 0;
    height: 75vh;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 24px;
    justify-content: center;
    border-radius: 60px;
    box-shadow: 0 0 20px 10px var(--shadow-color);

    @media screen and (max-width: 960px) {
        flex-direction: column;
        border-radius: 30px;
        margin: auto 20px;
        padding: 24px 24px;
        box-shadow: 0 0 0 0;
    }
`

export const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 7rem 2rem;
    width: 60%;

    @media screen and (max-width: 960px) {
        padding: 0;
        padding-top: 3vh;
        width: 80%;
        align-self: center;
    }
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    border: 2px solid #262626;
    border-radius: 30px;
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 7rem .5rem;
    width: 40%;

    @media screen and (max-width: 960px) {
        padding: 1rem 0;
        width: 100%;
    }
`

export const ProjectType = styled.p`
    color: var(--card-text-color);
    font-size: 1.5rem;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;

    @media screen and (max-width: 960px) {
        font-size: 1rem;
        text-align: center;
    }
`

export const ProjectTitle = styled.h1`
    font-size: 4rem;
    line-height: 4rem;
    font-weight: 600;
    color: var(--card-text-color);
    
    @media screen and (max-width: 960px) {
        font-size: 2rem;
        text-align: center;
        line-height: initial;
    }
`

export const ProjectCode = styled.p`
    color: var(--card-text-color);
    font-size: 1.5rem;

    @media screen and (max-width: 960px) {
        font-size: 1rem;
        text-align: center;
    }
`

export const ProjectDesc = styled.p`
    color: var(--card-text-color);
    font-size: 1rem;
    padding-top: 2vh;
    padding-bototm: 2vh;

`

export const Addresses = styled.div`
    margin-top: auto;
    margin-bottom: 1rem;
    display: flex;

    @media screen and (max-width: 960px) {
        margin-bottom: auto;
        margin-top: 1rem;
    }
`

export const Address = styled.a`
    color: var(--card-text-color);
    font-size: 1rem;
    text-decoration: none;
    margin-right: auto;

    > .icon {
        margin-right: 5px;
    }

    &:hover {
        color: var(--card-hover-color);
        transition: all 0.5s ease;
    }
`

