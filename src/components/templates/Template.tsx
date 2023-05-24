import React, { useState } from 'react';

import './Template.scss';
import classNames from 'classnames';

const Template: React.FC = () => {

    const [reverse, setReverse] = useState(true);

    const toggleClass = () => setReverse(!reverse);

    console.log(reverse);

    return (
        <div
            onClick={toggleClass}
            className={classNames({
                'template': true,
                'template--active': !reverse,
            })}
        >
            <div 
                className={classNames({
                    'template__front': true,
                    // 'template__front--active': !reverse,
                })}
            >
                Front
            </div>
            <div className='template__back'>Back</div>
        </div>
    );

};

export default Template;
