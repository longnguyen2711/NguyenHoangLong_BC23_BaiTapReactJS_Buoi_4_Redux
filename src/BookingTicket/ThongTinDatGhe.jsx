import React, { Component } from "react";

import { connect } from "react-redux";

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="container">
        <div className="mt-5 d-flex flex-column">
          <div className="mb-2 row">
            <button className="gheDuocChon mr-3 mt-2"></button>
            <span className="text-light col-7" style={{ fontSize: "30px"}}>Ghế đã đặt</span>
            <span className="text-light" style={{ fontSize: "30px" }}>(0)</span>
          </div>
          <div className="mb-2 row">
            <button className="gheDangChon mr-3 mt-2"></button>
            <span className="text-light col-7" style={{ fontSize: "30px"}}>Ghế đang đặt</span>
            <span className="text-light" style={{ fontSize: "30px" }}>(0)</span>
          </div>
          <div className="mb-2 row">
            <button className="ghe m-0 mr-3 mt-2"></button>
            <span className="text-light col-7" style={{ fontSize: "30px"}}>Ghế chưa đặt</span>
            <span className="text-light" style={{ fontSize: "30px" }}>(0)</span>
          </div>
        </div>
        </div>
        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className="text-warning" style={{ fontSize: "25px" }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-warning">
                {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                  return <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia}</td>
                    <td><button onClick={() => {
                      // this.props.dispatch({
                      //   type: HUY_GHE,
                      //   soGhe: gheDangDat.soGhe
                      // })
                    }}>Hủy</button></td>
                  </tr>
                })}
            </tbody>
          </table>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    danhSachGheDangDat: rootReducer.BTDatVeReducer.danhSachGheDangDat
  }
};

export default connect(mapStateToProps)(ThongTinDatGhe);
