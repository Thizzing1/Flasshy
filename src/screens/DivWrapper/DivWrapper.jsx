import React from "react";
import { useNavigate } from "react-router-dom";
import { UPlus1 } from "../../icons/UPlus1";
import "./style.css";

export const DivWrapper = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(-1); // This navigates to the previous page
    };
  return (
    <div className="div-wrapper">
      <div className="connect-a-wallet-wrapper">
        <div className="connect-a-wallet-3">
          <div className="border-2">
            <img
              className="left-3"
              alt="Left"
              src="https://cdn.animaapp.com/projects/67161e9dc14435b4877bf321/releases/67161f08b1fffdcedb758241/img/left@2x.png"
            />
          </div>

          <div className="head-3">
            <div className="text-wrapper-45">Connect a wallet</div>

            <UPlus1 className="u-plus-9" onClick={handleClick}/>
          </div>

          <div className="frame-3">
            <div className="div-9">
              <img
                className="img-3"
                alt="Wc meta"
                src="https://cdn.animaapp.com/projects/67161e9dc14435b4877bf321/releases/67161f08b1fffdcedb758241/img/wc-meta.svg"
              />

              <div className="text-wrapper-46">MetaMask</div>

              <img
                className="u-angle-down-3"
                alt="U angle down"
                src="https://cdn.animaapp.com/projects/67161e9dc14435b4877bf321/releases/67161f08b1fffdcedb758241/img/u-angle-down.svg"
              />
            </div>

            <div className="div-9">
              <img
                className="img-3"
                alt="Wc coin"
                src="https://cdn.animaapp.com/projects/67161e9dc14435b4877bf321/releases/67161f08b1fffdcedb758241/img/wc-coin.svg"
              />

              <div className="text-wrapper-47">Coinbase Wallet</div>

              <img
                className="u-angle-down-3"
                alt="U angle down"
                src="https://cdn.animaapp.com/projects/67161e9dc14435b4877bf321/releases/67161f08b1fffdcedb758241/img/u-angle-down-1.svg"
              />
            </div>

            <div className="div-9">
              <img
                className="img-3"
                alt="Wc connect"
                src="https://cdn.animaapp.com/projects/67161e9dc14435b4877bf321/releases/67161f08b1fffdcedb758241/img/wc-connect.svg"
              />

              <div className="text-wrapper-47">WalletConnect</div>

              <img
                className="u-angle-down-3"
                alt="U angle down"
                src="https://cdn.animaapp.com/projects/67161e9dc14435b4877bf321/releases/67161f08b1fffdcedb758241/img/u-angle-down-2.svg"
              />
            </div>

            <div className="div-9">
              <div className="text-wrapper-47">Browser extension</div>

              <img
                className="u-angle-down-3"
                alt="U angle down"
                src="https://cdn.animaapp.com/projects/67161e9dc14435b4877bf321/releases/67161f08b1fffdcedb758241/img/u-angle-down-3.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
