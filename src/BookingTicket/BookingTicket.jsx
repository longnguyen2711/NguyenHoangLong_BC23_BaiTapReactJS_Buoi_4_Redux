import React, { Component } from "react";
import "./BookingTicket.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGheData from "../Data/danhSachGhe.json";
import HangGhe from "./HangGhe";

export default class BookingTicket extends Component {
  
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="bookingTicket">
        <div className="overlay">
          <div className="container-fluid mt-3">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-warning font-weight-bold fontGame" style={{ fontSize: "40px", marginLeft: "35px" }}>
                  ĐẶT VÉ XEM PHIM CYBERLEARN.VN
                </div>
                <div className="mt-2 text-light font-weight-bold fontGame" style={{ fontSize: "30px", marginLeft: '35px' }}>
                  Màn hình
                </div>

                <div className="d-flex flex-column mt-2">
                  <div className="d-flex justify-content-center"><div className="screen mb-3"></div></div>
                  <div className="canhGiua">{this.renderHangGhe()}</div>
                </div>

              </div>
              <div className="col-4">
                <div className="text-warning font-weight-bold mt-2 fontGame" style={{ fontSize: "30px" }}>
                  DANH SÁCH GHẾ BẠN CHỌN
                </div>
                <ThongTinDatGhe danhSachGheData={danhSachGheData}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
