import { Link, Outlet } from "react-router-dom";

const Album = ({ }) => {

  return (
    <div className="row">
      <div className="col-4">
        <Link to='search' >搜尋照片</Link>
      </div>
      <div className="col-8">
        <Outlet/>
      </div>
    </div>
  )
}


export default Album;