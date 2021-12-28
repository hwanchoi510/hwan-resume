import styled from 'styled-components'

export const InfoContainer = styled.div`
    display: flex;
    background: var(--main-bg-color);
    height: 90vh;
    width: 100%;
`

export const InfoWrapper = styled.div`
    background: var(--card-color);
    display: flex;
    z-index: 0;
    height: 70vh;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 24px;
    justify-content: center;
    border-radius: 60px;
    box-shadow: 0 0 20px 10px var(--shadow-color);
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
    color: var(--card-text-color);
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
    color: var(--card-text-color);
`

export const ProjectCode = styled.p`
    color: var(--card-text-color);
    font-size: 1.5rem;
`

export const ProjectDesc = styled.p`
    color: var(--card-text-color);
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

