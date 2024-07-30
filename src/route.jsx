
import { createBrowserRouter, NavLink, Outlet } from "react-router-dom"
import Home from "./Content/home"
import Esport from "./Content/esport"
import Wiki from "./Content/wiki"
import Maps from "./Content/wiki/maps"
import Agents from "./Content/wiki/agents"
import Weapons from "./Content/wiki/weapons"

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    authorization: 'Bearer ziIV-g73hk2Vp_RDZFmJcQ4apueO5FZH53I_ZHO09pPuz1Qm5wg'
  }
}

const getGames = async () => {
  const response = await fetch('https://api.pandascore.co/videogames/valorant', options)
  const info = await response.json();
  return info
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: () => {
      return getGames()
    },
  },
  {
    path: '/esport',
    element: <Esport />,
    loader: () => {
      return getGames()
    },
  },
  {
    path: '/wiki/home',
    element: <Wiki />,
  },
  {
    path: "/wiki/maps",
    element: <Maps />,
  },
  {
    path: "/wiki/Agents",
    element: <Agents />,
  },
  {
    path: "/wiki/Weapons",
    element: <Weapons />,
  }
])

export default router