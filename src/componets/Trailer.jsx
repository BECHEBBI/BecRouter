import React from "react";
import { Link, useParams } from "react-router-dom";

const Trailer = ({ moviesData }) => {
  const params = useParams();
  const trai = moviesData.find((el) => el.id === Number(params.id));
  console.log("test", trai);

  return (
    <div>
      <Link to={`/`}> <button className="button">back to home</button> </Link>
      <h2 style={{ color: "white" }}>Description</h2>
      <br />
      <span style={{ color: "white" ,fontSize:"20px" , }}> {trai.description} </span>
      <br />
      <h2 style={{ color: "white" ,marginTop:"30px" }}>Trailer</h2>
      <iframe
        height={500}
        width={700}
        src={trai.trailer}
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default Trailer;