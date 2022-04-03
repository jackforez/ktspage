import React, { useEffect, useState } from "react";
import "./result.css";
import axios from "axios";
const Result = (props) => {
  const [result, setResult] = useState([]);
  const closeResult = () => {
    props.close(false);
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "https://pos.pages.fm/api/v1/snappy/track?ids=SNP223754855"
        );
        setResult(res.data.trackings);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div className="result animated fadeInRight ">
      <div className="title">THÔNG TIN ĐƠN HÀNG</div>
      <div className="content">
        {result.length > 0 ? (
          <div>
            <h3>{result[0].current_status}</h3>
            <h3>{result[0].to.address}</h3>
            <h3>{result[0].to.name}</h3>
            {result[0].updates.map((item) => {
              console.log(item);
            })}
          </div>
        ) : (
          <h4>khong co thong tin don hang</h4>
        )}
      </div>
      <div className="footy">
        <button onClick={closeResult}>OK em</button>
      </div>
    </div>
  );
};

export default Result;
