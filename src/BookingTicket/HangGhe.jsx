import React, { Component } from "react";

export default class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disabled = false;
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }

      return (
        <button
          disabled={disabled}
          className={`ghe ${cssGheDaDat}`}
          key={index}
          style={{ fontWeight: "bold" }}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return (
        <button disabled key={index} className="font-weight-bold rowNumber">
          {hang.soGhe}
        </button>
      );
    });
  };

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return <div className="nganCachGiuaHang canhGiua ml-3 mb-2">{this.renderSoHang()}</div>;
    } else {
      return (
        <div className="nganCachGiua canhGiua d-flex justify-content-center align-items-center">
          <span className="text-warning" style={{ fontSize: "24px", width: "35px", maxWidth: "35px" }}>
            {this.props.hangGhe.hang}
          </span>
          {this.renderGhe()}
        </div>
      );
    }
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
