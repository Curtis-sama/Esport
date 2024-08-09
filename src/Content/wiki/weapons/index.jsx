import Header from "../../../Header"
import Nav from "../nav"
import { Outlet, useLoaderData } from "react-router-dom";






const Weapons = () => {
  const weapons = useLoaderData()

  return (
    <>
      <Header />
      <div className="container">
        <Nav  weapons={weapons}/>
        <Outlet context={weapons}/>
      </div>
    </>
  );

};
export default Weapons