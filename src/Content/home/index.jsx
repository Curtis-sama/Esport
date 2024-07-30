import Header from '../../Header';
import Content from '..';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const valoData = useLoaderData()

  return (
    <>
      <Header />
      {valoData && <Content valoData={valoData} />}
    </>
  )
}

export default Home;
