import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

const api = "https://api.unsplash.com/search/photos";
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;

const AlbunSearch = ({ }) => {
  const [search, setSearch] = useState('')
  const [dataList, setDataList] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();
  // 假設網址為 /album/search?tdd=y2k
  // 取出方法 searchParams.get('tdd')
  // 寫入方法 setSearchParams({ tdd: 'y2k'})

  const onClick = async () => {
    if (search !== '') {
      setSearchParams({ query: search })
      const res = await axios.get(`${api}?client_id=${accessId}&query=${search}`)
      const { results } = res.data
      setDataList(results)
      console.log(results)
    } else {
      setDataList([])
      setSearchParams('')
    }
  }

  return (
    <div>
      <div className="row mb-4">
        <div className="col-10">
          <input
            type='text'
            className="form-control"
            defaultValue={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-primary" onClick={onClick} disabled={search === ''}>搜尋</button>
        </div>
      </div>
      <div className="row">
        {dataList.length > 0 &&
          (dataList.map((item) => {
            return (
              <div className="col-2 p-0 m-1" key={item.id}>
                <Link to={`/album/${item.id}`} >
                  <img src={item.urls.small} className="img-thumbnail" alt="..." />
                </Link>
              </div>
            )
          }))
        }
      </div>
    </div >
  )
}


export default AlbunSearch;