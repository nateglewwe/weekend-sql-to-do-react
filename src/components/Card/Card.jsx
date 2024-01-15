import './Card.css';

function Card (props) {
    return(
        <div className='card'>
        <p>{props.cardData.task}</p>
        <div className='buttonField'>
          <button>Complete</button>
          <button>Delete</button>
          </div>
      </div>
    );
};

export default Card;