import { DataGrid } from "@mui/x-data-grid";
import "./productList.css";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls";

export default function ProductList() {

    const {movies,dispatch}=useContext(MovieContext);

    useEffect(()=>{
        getMovies(dispatch);
    },[dispatch]);

    const handleDelete = (id) => {
        deleteMovie(id, dispatch);
      };
    const columns = [
        { field: "_id", headerName: "ID", width: 90 },
        {
          field: "movie",
          headerName: "Movie",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="productListItem">
                <img className="productListImg" src={params.row.img} alt="" />
                {params.row.title}
              </div>
            );
          },
        },
        { field: "genre", headerName: "Genre", width: 120 },
        { field: "year", headerName: "year", width: 120 },
        { field: "limit", headerName: "limit", width: 120 },
        { field: "isSeries", headerName: "isSeries", width: 120 },
    
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            console.log(params.row);
            const queryString = `?title=${encodeURIComponent(params.row.title)}&desc=${encodeURIComponent(params.row.desc)}&img=${encodeURIComponent(params.row.img)}&imgTitle=${encodeURIComponent(params.row.imgTitle)}&imgSm=${encodeURIComponent(params.row.imgSm)}&trailer=${encodeURIComponent(params.row.trailer)}&video=${encodeURIComponent(params.row.video)}&year=${encodeURIComponent(params.row.year)}&limit=${encodeURIComponent(params.row.limit)}&genre=${encodeURIComponent(params.row.genre)}&isSeries=${encodeURIComponent(params.row.isSeries)}`;
            return (
              <>
                <Link to={`/movie/${params.row._id}${queryString}`}>
                  <button className="productListEdit">Edit</button>
                </Link>
                <DeleteOutline
                  className="productListDelete"
                  onClick={() => handleDelete(params.row._id)}
                />
              </>
            );
          },
        },
      ];


  return (
    <div className="productList">
        <DataGrid
            rows={movies}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
            getRowId={(r) => r._id}
        />
    </div>
  )
}
