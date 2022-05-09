/* eslint-disable react-hooks/exhaustive-deps */
import './App.scss'
import axios from 'axios';
import { useEffect, useState } from 'react';
import UserList from './Pages/UserList/UserList';
import { IUsers } from './types/data'
import Sidebar from './components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import UserDetails from './Pages/UserDetails/UserDetails';

const App: React.FC = () => {
    const [data, setData] = useState<IUsers[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        try {
            const response = await axios
                .get<IUsers[]>('https://jsonplaceholder.typicode.com/users')
            setData([...response.data])
            setLoading(true)
        } catch (e) { console.log(e) }
    }
    return (
        <div className='app'>
            <div className='app__sidebar'><Sidebar users={data} setData={setData} /></div>
            <div className='app__list'>
                {loading ? (<Routes>
                    <Route path='/' element={<UserList users={data} />}></Route>
                    <Route path='/:name' element={<UserDetails users={data} setData={setData} />}></Route>
                </Routes>) : (<div className='app__loader'>LOADING</div>)}
            </div>
        </div>
    )
}

export default App;