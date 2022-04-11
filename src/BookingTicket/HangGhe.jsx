import React, { Component } from "react";

import { connect } from "react-redux";
import { datGheAction } from "../Redux/actions/BTDatVeActions";

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      // Trạng thái ghế đã bị người khác đặt
      let cssGheDaDat = "";
      let disabled = false;
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }

      //Xét trạng thái ghế đang đặt
      let cssGheDangDat = "";
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }

      return (
        <button
          key={index}
          title={ghe.soGhe}
          disabled={disabled}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          style={{ fontWeight: "bold" }}
          onClick={() => {
            this.props.datGhe(ghe);
          }}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return (
        <button
          disabled
          key={index}
          className="font-weight-bold text-warning rowNumber fontGame"
        >
          {hang.soGhe}
        </button>
      );
    });
  };

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div className="nganCachGiuaHang canhGiua ml-3 mb-2">
          {this.renderSoHang()}
        </div>
      );
    }
    return (
      <div className="nganCachGiua canhGiua d-flex justify-content-center align-items-center">
        <span
          className="text-warning fontGame"
          style={{ fontSize: "24px", width: "35px", maxWidth: "35px" }}
        >
          {this.props.hangGhe.hang}
        </span>
        {this.renderGhe()}
      </div>
    );
  };

  render() {
    return (
      <div
        className="text-light text-left mt-1 font-weight-bold"
        style={{ fontSize: "25px" }}
      >
        {this.renderHangGhe()}
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    danhSachGheDangDat: rootReducer.BTDatVeReducer.danhSachGheDangDat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch(datGheAction(ghe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
