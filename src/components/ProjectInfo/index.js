import React from 'react'

import {InfoContainer, InfoWrapper, ImgWrapper, Img, TextWrapper, ProjectType, ProjectTitle, ProjectCode, ProjectDesc, Addresses, Address} from './InfoElements'

function ProjectInfo({id, Type, Title, Codes, Description, img, alt, address1, address1icon, address1description, address2, address2icon, address2description}) {
    return (
        <InfoContainer id={id}>
            <InfoWrapper>
                    <ImgWrapper>
                        <Img src={img} alt={alt}/>
                    </ImgWrapper>
                    <TextWrapper>
                        <ProjectType>{Type}</ProjectType>
                        <ProjectTitle>{Title}</ProjectTitle>
                        <ProjectCode>{Codes}</ProjectCode>
                        <ProjectDesc>{Description}</ProjectDesc>
                        <Addresses>
                            <Address href={address1} target='_blank' rel='noreferrer'>{address1icon}{address1description}</Address>
                            <Address href={address2} target='_blank' rel='noreferrer'>{address2icon}{address2description}</Address>
                        </Addresses>
                    </TextWrapper>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default ProjectInfo
