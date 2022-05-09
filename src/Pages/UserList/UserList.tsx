import './UserList.scss'
import { IUsers } from "../../types/data";
import User from "../../components/User/User";

interface IUserListProps {
    users: IUsers[];
};


const UserList: React.FC<IUserListProps> = ({ users }) => {
    return (
        <div className='userlist'>
            <b className='userlist__header'>Список пользователей</b>
            {users.map((user) => {
                return (
                    <User key={user.id} name={user.name} address={user.address} company={user.company} />
                )
            })}
            <p className='userlist__footer'>Найдено десять пользователей</p>
        </div>
    )
}

export default UserList;