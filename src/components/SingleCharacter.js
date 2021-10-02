import React from 'react';
import axios from 'axios';
const SingleCharacter = () => {
    return (
        <div className="character-holder">
            <div className="character-holder-image"></div>
            <div className="chracter-holder-info">
                <div>Title</div>
                <div>Info</div>
                <div>Status</div>
            </div>
        </div>
    )
}

export default SingleCharacter;