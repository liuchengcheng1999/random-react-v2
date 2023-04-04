import React, { useState } from 'react';
import './button.scss';
const Button = () => {
    const [isSubscribed, setSubscriptionState] = useState(false);
    return (
        <div>
            {isSubscribed ?
            <button className="random-react-button" onClick={() => setSubscriptionState(false)}>Unsubscribe</button> 
            : <button className="random-react-button" onClick={() => setSubscriptionState(true)}>Subscribe</button>
            }  
        </div>
    )
}

export default Button;