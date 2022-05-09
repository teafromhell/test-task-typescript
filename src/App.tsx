/* eslint-disable react-hooks/exhaustive-deps */
import './App.scss'
import axios from 'axios';
import { useEffect, useState } from 'react';
import UserList from './Pages/UserList/UserList';
import { IUsers } from './types/data'
import Sidebar from './components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import UserDetails from './Pages/UserDetails/UserDetails';
import Spinner from 'react-bootstrap/Spinner';
import ScrollToTop from './components/ScrollToTop';



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
            <ScrollToTop>
                <div className='app__sidebar'></div><Sidebar users={data} setData={setData} />
                <div className='app__list'>
                    {loading ? (<Routes>
                        <Route path='/' element={<UserList users={data} />}></Route>
                        <Route path='/:name' element={<UserDetails users={data} />}></Route>
                    </Routes>) : (<div className='app__loader'>
                        <Spinner animation="border" variant="primary" />
                    </div>)}
                </div>
            </ScrollToTop>
        </div>
    )
}

export default App;