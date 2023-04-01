import React from 'react';
import bagietki from '../../assets/img/bagietki.jpg';

import './Banner.scss';

const Banner: React.FC = () => {
    return (
        <div>
            <img
                height={200}
                src={bagietki}
                alt=""
            />
        </div>
    );
};

export default Banner;