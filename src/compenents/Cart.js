import { useContext } from "react";
import { CartContext } from "../Store";
import { BsXLg } from "react-icons/bs";

const Cart = () => {
  const [state, dispatch] = useContext(CartContext)
  console.log(state.CartList);
  const onChange = (e, item) => {
    e.preventDefault();
    const newQty = Number(e.target.value)
    // console.log(item, newQty);
    dispatch({ type: 'UPDATE_QTY', payload: { ...item, 'qty': newQty, } })
  }
  const onDelete = (e, item, index) => {
    e.preventDefault();
    dispatch({ type: 'DEL_ITEM', payload: { ...item, 'dataIndex': index } })
  }
  const onClear = (e) => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_CART', payload: { 'item': { id: "none" } } })
  }

  return <div className="col-md-5">
    <div className="p-3 border">
      <table className="table align-middle">
        <tbody>
          {state.CartList.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm rounded-circle border-0"
                    onClick={(e) => onDelete(e, item, index)}
                  >
                    <BsXLg />
                  </button>

                </td>
                <td>
                  <img className="table-image" src={item.img} alt="" />
                </td>
                <td>
                  {item.title}<br />
                  <small className="text-nuted">NT${item.price}</small>
                </td>
                <td>
                  <select
                    name=""
                    id=""
                    className="form-select"
                    value={item.qty}
                    onChange={(e) => onChange(e, item)}
                  >
                    {[...Array(20)].map((_, index) => {
                      return <option value={index + 1} key={index}>
                        {index + 1}
                      </option>
                    })}
                  </select>
                </td>
                <td className="text-end">
                  NT${item.price * item.qty}
                </td>
              </tr>
            )
          })}

        </tbody>
        <tfoot>
          <tr>
            <td colSpan={1} className="text-start">
              <button
                className="btn btn-secondary btn-sm"
                onClick={onClear}
                disabled={state.TotalPrice === 0}>
                清空購物車
              </button>
            </td>
            <td colSpan={5} className="text-end">
              <strong>總金額 NT$ {state.TotalPrice}</strong>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
}


export default Cart;