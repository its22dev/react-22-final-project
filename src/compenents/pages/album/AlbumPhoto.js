import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BsArrowUpRight } from "react-icons/bs";

const api = "https://api.unsplash.com/photos";
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;

const AlbumPhoto = ({ }) => {
  const { id } = useParams();
  const [target, setTarget] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${api}/${id}?client_id=${accessId}`)
      setTarget(res.data)
    }
    fetchData()
  }, [id])
  console.log(target);

  return (target &&
    <div className="row">
      <div className="card p-0" style={{ width: '400px' }}>
        <img src={target?.urls?.regular} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{target?.id}</h5>
          <p className="card-text">{target?.description}</p>
          <a href={target?.links?.html} target="_blank" className="btn btn-primary" >Unsplash <BsArrowUpRight /></a>
        </div>
      </div>
    </div>
  )
}


export default AlbumPhoto;