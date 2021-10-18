import CharacterIcon from "../assets/CharacterIcon";
import NavigationIcon from "../assets/NavigationIcon";
import EpisodeIcon from "../assets/EpisodeIcon";
import { useHistory } from "react-router-dom";

const Navigation = () => {
    let history = useHistory();
    const handleCharactersClick = () => {
        history.push("/characters")
    }

    const handleEpisodesClick = () => {
        history.push("/episodes");
    }
    return (
        <div className='navigation-section'>
            <NavigationIcon className='navigation-icon' />
            <CharacterIcon className='navigation-icon' onClick={handleCharactersClick} />
            <EpisodeIcon className='navigation-icon' onClick={handleEpisodesClick} />
        </div>
    )
}

export default Navigation;
