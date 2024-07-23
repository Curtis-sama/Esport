import './App.css';
import Header from './Header';
import Content from './Content/home';
import { useLoaderData } from 'react-router-dom';



const App = () => {

const games = useLoaderData()
console.log(games);  

  return (
    <div className='window'>
    <Header />
    {games && <Content games={games}/>}
  </div>  
  )
}

export default App;
