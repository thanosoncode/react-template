import { useAppDispatch, useAppState } from "../../context/AppContext";

const About = () => {
  const dispatch = useAppDispatch();
  const { count } = useAppState();

  return (
    <div>
      <div>counter: {count} </div>
      <div className="flex gap-2">
        <button onClick={() => dispatch({ type: "COUNTER_INCREASE" })}>
          increase
        </button>
        <button onClick={() => dispatch({ type: "COUNTER_DECREASE" })}>
          decrease
        </button>
      </div>
    </div>
  );
};

export default About;
