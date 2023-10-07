import { useState } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = (props) => {
    const [flip, setFlip] = useState(true);

    const flipCard = () => {
        setFlip(!flip);
        console.log(flip)
    }

    return (
        <div id={props.id} className={flip ? 'card' : 'card flipped'} onClick={flipCard}>
            <div className='front'>
                <h4>{props.question}</h4>
            </div>
            <div className='back'>
                <h4>{props.answer}</h4>
            </div>
        </div>
    )
}

Card.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default Card;

