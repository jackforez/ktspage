import React, { useEffect, useState } from "react";
import "./result.css";
import axios from "axios";
const Result = (props) => {
  const [result, setResult] = useState([]);
  const closeResult = () => {
    props.close(false);
  };
  // SNP223754855
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://pos.pages.fm/api/v1/snappy/track?ids=${props.billNumber}`
        );
        setResult(res.data.trackings);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div className="result animated fadeInRight rightbox">
      <div className="result-header">
        <div className="title">MÃ VẬN ĐƠN: {props.billNumber}</div>
        <button onClick={closeResult} className="close">
          x
        </button>
      </div>
      <div className="rb-container">
        {result.length > 0 ? (
          <div>
            <span>Trạng thái: {result[0].current_status} - </span>
            <span>Địa chỉ nhận: {result[0].to.address}</span>
            <span> - Người nhận: {result[0].to.name}</span>
            <ul className="rb">
              {result[0].updates.map((item) => {
                return (
                  <li className="rb-item" ng-repeat="itembx">
                    <div className="timestamp">{item.updated_at}</div>
                    <div className="item-title">{item.status}</div>
                    <div className="item-title">{item.note}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <h4>khong co thong tin don hang</h4>
        )}
      </div>
    </div>
  );
};

export default Result;
