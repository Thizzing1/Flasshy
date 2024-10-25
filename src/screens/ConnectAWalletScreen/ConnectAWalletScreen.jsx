import React from "react";
import { useNavigate } from "react-router-dom";
import { UPlus1 } from "../../icons/UPlus1";
import "./style.css";

export const ConnectAWalletScreen = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1); // Navigate to the previous page
  };
  return (
    <div className="connect-a-wallet">
      <div className="div">
        <div className="border">
          <img
            className="left"
            alt="Left"
            src="https://cdn.animaapp.com/projects/67161e9dc14435b4877bf321/releases/67161f08b1fffdcedb758241/img/left@2x.png"
          />
        </div>

        <div className="head">
          <div className="text-wrapper">Connect a wallet</div>

          <UPlus1 className="u-plus" onClick={handleClick}/>
        </div>

        <div className="frame">
          <div className="div-2">
            <img
              className="img"
              alt="Wc meta"
              src="https://cdn.animaapp.com/projects/67161e9dc14435b4877bf321/releases/67161f08b1fffdcedb758241/img/wc-meta-1.svg"
            />

            <div className="text-wrapper-2">MetaMask</div>

            <img
              className="u-angle-down"
              alt="U angle down"
              src="https://cdn.animaapp.com/projects/67161e9dc14435b4877bf321/releases/67161f08b1fffdcedb758241/img/u-angle-down-4.svg"
            />
          </div>

          <div className="div-2">
            <img
              className="img"
              alt="Wc coin"
              src="https://cdn.animaapp.com/projects/67161e9dc14435b4877bf321/releases/67161f08b1fffdcedb758241/img/wc-coin-1.svg"
            />

            <div className="text-wrapper-3">Coinbase Wallet</div>

            <img
              className="u-angle-down"
              alt="U angle down"
              src="https://cdn.animaapp.com/projects/67161e9dc14435b4877bf321/releases/67161f08b1fffdcedb758241/img/u-angle-down-4.svg"
            />
          </div>

          <div className="div-2">
            <img
              className="img"
              alt="Wc connect"
              src="https://cdn.animaapp.com/projects/67161e9dc14435b4877bf321/releases/67161f08b1fffdcedb758241/img/wc-connect-1.svg"
            />

            <div className="text-wrapper-3">WalletConnect</div>

            <img
              className="u-angle-down"
              alt="U angle down"
              src="https://cdn.animaapp.com/projects/67161e9dc14435b4877bf321/releases/67161f08b1fffdcedb758241/img/u-angle-down-4.svg"
            />
          </div>

          <div className="div-2">
            <div className="text-wrapper-3">Browser extension</div>

            <img
              className="u-angle-down"
              alt="U angle down"
              src="https://cdn.animaapp.com/projects/67161e9dc14435b4877bf321/releases/67161f08b1fffdcedb758241/img/u-angle-down-4.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
