import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";

const api = "https://api.unsplash.com/search/photos";
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;

const Album = ({ }) => {
  const [dataList, setDataList] = useState([])
  useEffect(() => {
    (async () => {
      const res = await axios.get(`${api}?client_id=${accessId}&query=camera`);
      const { results } = res.data
      setDataList(results);
    })();
  }, [])

  return (<div className="row">
    <div className="col-4">
      Album nav
      {dataList.map((item) => {
        return <li key={item.id}>{item.id}</li>
      })}
    </div>
    <div className="col-8">
      <Outlet context={dataList} />
    </div>
  </div>
  )
}


export default Album;