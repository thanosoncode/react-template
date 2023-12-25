import { useAppState } from "../../context/AppContext";

const Home = () => {
  const { count } = useAppState();

  return (
    <div>
      <div>counter: {count} </div>
    </div>
  );
};

export default Home;
