import React from "react";
import CharacterIcon from "../assets/CharacterIcon";
import NavigationIcon from "../assets/NavigationIcon";
import EpisodeIcon from "../assets/EpisodeIcon";
import styled from "styled-components";

const LogoSvg = styled(NavigationIcon)`
    width: 40px;
    height: 40px;
    fill: #fff;
    margin: 0 auto;
    margin-top: 10px;
    display: block;
    cursor: pointer;
`
const CharacterSvg = styled(CharacterIcon)`
    width: 35px;
    height: 35px;
    fill: #fff;
    margin: 0 auto;
    margin-top: 15px;
    display: block;
    cursor: pointer;
`
const EpisodeSvg = styled(EpisodeIcon)`
    width: 30px;
    height: 30px;
    fill: #fff;
    margin: 0 auto;
    margin-top: 15px;
    display: block;
    cursor: pointer;
`

const Navigation = () => {
    return (
        <div className='navigation-section'>
            <LogoSvg />
            <CharacterSvg />
            <EpisodeSvg />
        </div>
    )
}

export default Navigation;