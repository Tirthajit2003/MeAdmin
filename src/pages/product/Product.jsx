import { Link, useLocation} from "react-router-dom";
import "./product.css";
import { PublishOutlined } from "@mui/icons-material";

export default function Movie() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const mv = {
    _id: location.pathname.split('/movie/')[1],
    title: queryParams.get('title'),
    desc: queryParams.get('desc'),
    img: queryParams.get('img'),
    imgTitle: queryParams.get('imgTitle'),
    imgSm: queryParams.get('imgSm'),
    trailer: queryParams.get('trailer'),
    video: queryParams.get('video'),
    year: queryParams.get('year'),
    limit: queryParams.get('limit'),
    genre: queryParams.get('genre'),
    isSeries: queryParams.get('isSeries'),
  };
  console.log(mv);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={mv?.img} alt="" className="productInfoImg" />
            <span className="productName">{mv?.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{mv?._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{mv?.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">year:</span>
              <span className="productInfoValue">{mv?.year}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">limit:</span>
              <span className="productInfoValue">{mv?.limit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input type="text" placeholder={mv?.title} />
            <label>Year</label>
            <input type="text" placeholder={mv?.year} />
            <label>Genre</label>
            <input type="text" placeholder={mv?.genre} />
            <label>Limit</label>
            <input type="text" placeholder={mv?.limit} />
            <label>Trailer</label>
            <input type="file" placeholder={mv?.trailer} />
            <label>Video</label>
            <input type="file" placeholder={mv?.video} />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src={mv?.img}
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <PublishOutlined />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
