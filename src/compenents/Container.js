import Cart from "./Cart";
import List from "./List";

const Container = ({ }) => {
  return <div className="container mt-4">
    <div className="row">
      <List />
      <Cart />
    </div>
  </div>
}


export default Container;