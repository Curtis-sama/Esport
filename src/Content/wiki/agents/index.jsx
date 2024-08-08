import Header from "../../../Header";
import Nav from "../nav";
import { Outlet, useLoaderData } from 'react-router-dom';

const Agents = () => {
  const agents = useLoaderData();
  

  return (
    <>
      <Header />
      <div className="container">
        <Nav agents={agents} />
        <Outlet context={agents}/>
      </div>
    </>
  );
};

export default Agents;
