import React, { Component } from "react";
import "./BookingTicket.css";
import ThongTinDatGhe from "./ThongTinDatGhe";

export default class BookingTicket extends Component {
  render() {
    return (
      <div className="bookingTicket">
        <div className="overlay">
          <div className="container-fluid mt-3">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-warning font-weight-bold" style={{ fontSize: "35px" }}>
                  ĐẶT VÉ XEM PHIM CYBERLEARN.VN
                </div>
                <div className="mt-4 text-light font-weight-bold" style={{ fontSize: "25px" }}>
                  Màn hình
                </div>
                <div className="d-flex justify-content-center mt-2">
                  <div className="screen"></div>
                </div>
              </div>
              <div className="col-4">
                <div className="text-warning font-weight-bold mt-1" style={{ fontSize: "30px" }}>
                  DANH SÁCH GHẾ BẠN CHỌN
                </div>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
