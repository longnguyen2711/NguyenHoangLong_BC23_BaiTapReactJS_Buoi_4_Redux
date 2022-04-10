import React, { Component } from "react";

export default class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>

        <div className="mt-5 d-flex flex-column">
          <div className="mb-2">
            <button className="gheDuocChon mr-3"></button>
            <span className="text-light" style={{ fontSize: "30px" }}>Ghế đã đặt</span>
          </div>
          <div className="mb-2">
            <button className="gheDangChon mr-3"></button>
            <span className="text-light" style={{ fontSize: "30px" }}>Ghế đang đặt</span>
          </div>
          <div className="mb-2">
            <button className="ghe m-0 mr-3"></button>
            <span className="text-light" style={{ fontSize: "30px" }}>Ghế chưa đặt</span>
          </div>
        </div>

        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: "25px" }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
        </div>

      </div>
    );
  }
}
