
import { createBrowserRouter } from "react-router-dom"
import App from "./App"

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    authorization: 'Bearer ziIV-g73hk2Vp_RDZFmJcQ4apueO5FZH53I_ZHO09pPuz1Qm5wg'
  }
}

const getGames = async () =>  {
  const response = await fetch('https://api.pandascore.co/videogames?page=1&per_page=50', options)
  const videoGames = await response.json();
  return videoGames 
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    loader: () => {
      return getGames()
    },
  },
  {
    path:'valorant',
   
  }
])

export default router