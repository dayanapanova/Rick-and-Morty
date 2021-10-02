import React from "react";
import CharacterIcon from "../assets/CharacterIcon";
import NavigationIcon from "../assets/NavigationIcon";
import EpisodeIcon from "../assets/EpisodeIcon";

const Navigation = () => {
    return (
        <div className='navigation-section'>
            <NavigationIcon className='navigation-icon' />
            <CharacterIcon className='navigation-icon' />
            <EpisodeIcon className='navigation-icon' />
        </div>
    )
}

export default Navigation;