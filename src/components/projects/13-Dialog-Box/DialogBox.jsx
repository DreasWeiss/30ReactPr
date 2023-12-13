import React, { useState } from 'react'
import Button from '../components/Button'
import { BsFillEmojiFrownFill, BsFillEmojiSmileFill } from 'react-icons/bs'

export default function DialogBox({ width = 350 }) {
    const [subscription, setSubscription] = useState({
        title: 'Hello',
        description: 'Would you like to subscribe?',
        state: null,
        justifyContent: 'space-between'
    });

    const handleSubscribe = () => {
        setSubscription({
            title: 'Thank you',
            description: 'for your subscribtion',
            state: 'subscribed',
            justifyContent: 'flex-end'
        })
    }

    const [icon, setIcon] = useState();
    let iconStyle = {};

    return (
        <div className='card bg-light m-auto mt-4' style={{ width: width }}>
            <div className="card-body">
                <div
                    className="d-grid"
                    style={{
                        gridTemplateColumns: '2fr 1fr',
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center'
                    }}>
                    <section>
                        <h2 className="card-title">{subscription.title}</h2>
                        <h3 className="card-text">{subscription.description}</h3>
                    </section>
                    <div className="">{icon}</div>
                </div>
            </div>
            <hr />
            <div className="d-flex mb-2 px-1 text-end" style={{ width: '100%', justifyContent: `${subscription.justifyContent}` }}>
                {subscription.state === null &&
                    (<Button text={'Cancel'} btnClass={'btn-light'} />)}
                {subscription.state === 'subscribed' ? null : (
                    < Button text={'Subscribe'} btnClass={'btn-danger'} onClick={handleSubscribe} />)}
                {subscription.state === 'subscribed' ? (
                    <Button text={'Unsubscribe'} btnClass={'btn-danger btn-block'} />) : null}
            </div>
        </div>
    )
}
