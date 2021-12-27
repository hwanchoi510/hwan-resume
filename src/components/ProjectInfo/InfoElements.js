import styled from 'styled-components'

export const InfoContainer = styled.div`
    display: flex;
    color: #868686;
    background: #262626;
    height: 90vh;
    width: 100%;
`

export const InfoWrapper = styled.div`
    background: #afafaf;
    display: flex;
    z-index: 0;
    height: 70vh;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 24px;
    justify-content: center;
    border-radius: 60px;
    box-shadow: 0 0 20px 10px rgb(0, 0, 0);
`

export const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 7rem 2rem;
    width: 60%;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    border: 2px solid #262626;
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 7rem .5rem;
    width: 40%;
`

export const ProjectType = styled.p`
    color: #262626;
    font-size: 1.5rem;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
`

export const ProjectTitle = styled.h1`
    font-size: 4rem;
    line-height: 4rem;
    font-weight: 600;
    color: #262626;
`

export const ProjectCode = styled.p`
    color: #262626;
    font-size: 1.5rem;
`

export const ProjectDesc = styled.p`
    color: #262626;
    font-size: 1rem;
    padding-top: 24px;
    padding-bototm: 24px;
`

export const Addresses = styled.div`
    margin-top: auto;
    margin-bottom: 1rem;
    display: flex;
`

export const Address = styled.a`
    color: #262626;
    font-size: 1rem;
    text-decoration: none;
    margin-right: auto;

    > .icon {
        margin-right: 5px;
    }

    &:hover {
        color: #fff;
        transition: all 0.5s ease;
    }
`

