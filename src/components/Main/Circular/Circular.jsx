import './circular.scss';
import { Link } from 'react-router-dom';

export const Circular = (props) => {
    const {img, title,span} = props.data
    return (
        <div className='circular'>
            <img src={img} alt="weather" />
            <div className='circular-info'>
                <h2>{title}</h2>
                <span>{span}</span>
                <Link to='/circular'>Shop Circular</Link>
            </div>
        </div>
    )
}
