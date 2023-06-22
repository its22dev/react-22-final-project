
const Cart = () => {
  return <div className="col-md-5">
    <div className="p-3">
      <table className="table align-middle">
        <tbody>
          <tr>
            <td>
              刪除
            </td>
            <td>
              <img className="table-image" src="" alt="" />
            </td>
            <td>
              產品名稱<br />
              <small className="text-nuted">NT 220</small>
            </td>
            <td>
              <select name="" id="" className="form-select">

              </select>
            </td>
            <td className="text-end">
              NT 440
            </td>
          </tr>
        </tbody>
        <tfoot>
          <td colSpan={5} className="text-end">
            <strong>總金額 NT 440</strong>
          </td>
        </tfoot>
      </table>
    </div>
  </div>
}


export default Cart;