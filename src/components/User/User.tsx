import './User.scss'
import { Link } from "react-router-dom";


interface IUserProps {
    name: string,
    address: {[key:string]:string},
    company: {[key:string]:string},
};

const User: React.FC<IUserProps> = ({ name, address, company }) => {
    return (
        <div className='user-card'>
            <div className='user-card__content'>
                <div><span>ФИО:</span><p> {name} </p></div>
                <div><span>город:</span><p>{company.name}</p></div>
                <div><span>компания:</span><p>{address.city}</p></div>
            </div>
            <div className='user-card__btn'> <Link to={`/${name}`}><button>Подробнее</button> </Link></div>
        </div>
    )
}

export default User;