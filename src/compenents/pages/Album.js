import { Outlet } from "react-router-dom";

const Album = ({ }) => {
  return (<div className="row">
    <div className="col-4">
      Album nav
    </div>
    <div className="col-8">
      <Outlet />
    </div>
  </div>
  )
}


export default Album;