import React, { Component } from "react";


import { connect } from "react-redux";
import { huyGheAction } from "../Redux/actions/BTDatVeActions";
//import { HUY_GHE } from "../Redux/types/BTDatVeType";

class ThongTinDatGhe extends Component {

  tongGheDaDat = () => {
    return this.props.danhSachGheData.map((hangGhe, index) => {
      let tongGhe = 0
      for (let ghe of hangGhe.danhSachGhe) {
        if(ghe.daDat){  
          tongGhe += 1
        } 
      }
      console.log(typeof tongGhe)
      return tongGhe
      // return (
      //   <span key={index}>
     
      //     {hangGhe.danhSachGhe.reduce((gheDaDat, ghe, index) => {

      //       // Thêm thuộc tính số lượng vào từng ghế của danh sách ghế
      //       ghe= {...ghe, soLuong: 1}

      //       // Nếu ghế đã được đặt (datDat === true) thì cộng dồn vào tổng số ghê
      //       if(ghe.daDat){  
      //         gheDaDat += ghe.soLuong
      //       } 
      //       return gheDaDat
      //     }, 0)
      //     }
      //   </span>
      // );
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="mt-5 d-flex flex-column">
            <div className="mb-2 row">
              <button className="gheDuocChon mr-3 mt-2"></button>
              <span className="text-light col-7" style={{ fontSize: "30px" }}>Ghế đã đặt</span>
              <span id="d" className="text-light" style={{ fontSize: "30px" }}>({this.tongGheDaDat()})</span>
            </div>
            <div className="mb-2 row">
              <button className="gheDangChon mr-3 mt-2"></button>
              <span className="text-light col-7" style={{ fontSize: "30px" }}>Ghế đang đặt</span>
              <span className="text-light" style={{ fontSize: "30px" }}>({this.props.danhSachGheDangDat.length})</span>
            </div>
            <div className="mb-2 row">
              <button className="ghe m-0 mr-3 mt-2"></button>
              <span className="text-light col-7" style={{ fontSize: "30px" }}>Ghế chưa đặt</span>
              <span className="text-light" style={{ fontSize: "30px" }}>(0)</span>
            </div>
          </div>
        </div>
        <div className="mt-4" style={{ height: "302px", overflowY: "auto" }}>
          <table className="text-center" border="2">
            <thead>
              <tr className="text-warning" style={{ fontSize: "25px" }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Hủy vé</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-warning">
                <th>Tổng tiền</th>
                <th colSpan={2}>
                  {this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                      return (tongTien += gheDangDat.gia);
                    }, 0).toLocaleString()}{" VNĐ "}
                </th>
              </tr>
            </tbody>
            <tfoot className="text-warning">
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia.toLocaleString()}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => {
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                          // {type: HUY_GHE,
                          // soGhe: gheDangDat.soGhe}
                        }}
                      >
                        Hủy
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    danhSachGheDangDat: rootReducer.BTDatVeReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(ThongTinDatGhe);

