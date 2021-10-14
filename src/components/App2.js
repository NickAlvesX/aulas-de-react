import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";

const App2 = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 100 }}>
      <ClassComponent />
      <FunctionComponent />
    </div>
  )
}

export default App2
