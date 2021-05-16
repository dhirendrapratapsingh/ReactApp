import React from 'react';
import LoaderGif from '../ajax-loader-circular.gif' /* .. to go one step back */

const Looader = () => {
    return (
        <div className="center">
            <img src={LoaderGif}  alt="loader"/>
        </div>
    )
}
export default Looader