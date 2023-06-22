import { useContext } from "react";
import { CartContext } from "../Store";
import { productData } from "../assets/productData";

const List = () => {
  const [state, dispatch] = useContext(CartContext)

  return <div className="col-md-7">
    <div className="row row-cols-3 g-2">
      {productData.map((item) => {
        return <div className="col" key={item.id}>
          <div className="card p-0">
            <img
              src={item.img}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h6 className="card-title">
                {item.title}
                <span className="float-end">NT$ {item.price}</span>
              </h6>
              <button
                href="#"
                className="btn btn-outline-primary w-100"
                onClick={() => {
                  dispatch({ type: 'ADD_TO_CART', payload: { ...item, qty: 1 } })
                }}
              >
                加入購物車
              </button>
            </div>
          </div>
        </div>
      })}
    </div>
  </div >
}


export default List;