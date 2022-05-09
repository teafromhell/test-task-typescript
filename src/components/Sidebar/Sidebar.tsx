import './Sidebar.scss'
import { IUsers } from "../../types/data";

interface ISearch {
    users: IUsers[],
    setData: (arr: any) => void,
}

const Sidebar: React.FC<ISearch> = ({ users, setData }) => {
    const handleSortCity = () => {
        const arr = users
            .sort((a, b) => (a.address.city > b.address.city ? 1 : -1))
        setData([...arr])
    }
    const handleSortCompany = () => {
        const arr = users
            .sort((a, b) => (a.company.name > b.company.name ? 1 : -1))
        setData([...arr])
    }
    return (
        <div className='sidebar'>
            
            <p className='sidebar__header'>Сортировка</p>
            <div className='sidebar__button'><button onClick={handleSortCity}>по городу</button></div>
            <div className='sidebar__button'><button onClick={handleSortCompany}>по компании</button></div>
            
        </div>
    )
}

export default Sidebar