import React from "react";
import { useNavigate } from "react-router-dom";
import { UPlus1 } from "../../icons/UPlus1";
import "./style.css";

export const ConnectAWallet = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1); // This navigates to the previous page
  };

  return (
    <div className="connect-a-wallet">
      <div className="div">
        <div className="border">
          <img className="left" alt="Left" src="/img/left.png" />
        </div>

        <div className="head">
          <div className="text-wrapper">Connect a wallet</div>
          

          <UPlus1 className="u-plus" onClick={handleClick}/>
        </div>

        <div className="frame">
          <div className="div-2">
            <img className="img" alt="Wc meta" src="/img/wc-meta-4.svg" />

            <div className="text-wrapper-2">MetaMask</div>

            <img
              className="u-angle-down"
              alt="U angle down"
              src="/img/u-angle-down-16.svg"
            />
          </div>

          <div className="div-2">
            <img className="img" alt="Wc coin" src="/img/wc-coin-4.svg" />

            <div className="text-wrapper-3">Coinbase Wallet</div>

            <img
              className="u-angle-down"
              alt="U angle down"
              src="/img/u-angle-down-16.svg"
            />
          </div>

          <div className="div-2">
            <img className="img" alt="Wc connect" src="/img/wc-connect-4.svg" />

            <div className="text-wrapper-3">WalletConnect</div>

            <img
              className="u-angle-down"
              alt="U angle down"
              src="/img/u-angle-down-16.svg"
            />
          </div>

          <div className="div-2">
            <div className="text-wrapper-3">Browser extension</div>

            <img
              className="u-angle-down"
              alt="U angle down"
              src="/img/u-angle-down-16.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
