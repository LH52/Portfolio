import Cards from './Cards.tsx';
import './CardHolder.css'

function CardHolder() {

  return (
    <div className='cardholder-container'>
        <div className="section-title">
            <h1>Skills</h1>
        </div>
        
        <div className="card-holder">  
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
        </div>
    </div>
        
    
  )
}

export default CardHolder;
