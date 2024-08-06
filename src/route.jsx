
import { createBrowserRouter, NavLink, Outlet } from "react-router-dom"
import Home from "./Content/home"
import Esport from "./Content/esport"
import Wiki from "./Content/wiki"
import Maps from "./Content/wiki/maps"
import Agents from "./Content/wiki/agents"
import Weapons from "./Content/wiki/weapons"
import Details from "./Content/wiki/agents/details"
import DetailsWeapons from "./Content/wiki/weapons/detailsweapons"


const getGames = async () => {
  const response = await fetch('https://api.pandascore.co/videogames/valorant')
  const info = await response.json();
  return info
}

  const getMaps = async () => {
    const response = await fetch('https://valorant-api.com/v1/maps')
    const { data } = await response.json();
    return data
}

const getAgents = async (params) => {
  if (params) {
    const { uuid } = params
    const response = await fetch(`https://valorant-api.com/v1/agents/${uuid}`)
    const { data } = await response.json();
    return data
  } else {
    const response = await fetch('https://valorant-api.com/v1/agents')
    const { data } = await response.json();
    return data
  }
}

const getWeapons = async (params) => {
  if (params) {
    const { uuid } = params
    const response = await fetch(`https://valorant-api.com/v1/weapons/${uuid}`)
    const {data} = await response.json();
    return data
  } else { 
    const response = await fetch('https://valorant-api.com/v1/weapons/')
    const { data } = await response.json();
    return data
  }
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
    loader: () => {
      return getMaps()
    }
  },
  {
    path: "/wiki/agents",
    element: <Agents />,
    loader: () => {
      return getAgents()
    }
  },
  {
    path: "/wiki/weapons",
    element: <Weapons />,
    loader:() => {
      return getWeapons()
    }
  },
  {
    path: "/wiki/agents/:uuid",
    element: <Details/>,
    loader: ({ params }) => {
      return getAgents(params)
    }
  },
  {
    path: "/wiki/weapons/:uuid",
    element: <DetailsWeapons/>,
    loader: ({ params }) => {
      return getWeapons(params)
    }
  }
])

export default router