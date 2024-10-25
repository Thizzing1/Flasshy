import React from "react";
import { Link } from "react-router-dom";
import { useWindowWidth } from "../../breakpoints";
import { Component1355 } from "../../icons/Component1355";
import { Component1356 } from "../../icons/Component1356";
import { Component1364 } from "../../icons/Component1364";
import { Component1376 } from "../../icons/Component1376";
import { Component1378 } from "../../icons/Component1378";
import { Component1381 } from "../../icons/Component1381";
import { Component1389 } from "../../icons/Component1389";
import { Component1392 } from "../../icons/Component1392";
import { Component1393 } from "../../icons/Component1393";
import { Component1394 } from "../../icons/Component1394";
import { Component1397 } from "../../icons/Component1397";
import { Component1398 } from "../../icons/Component1398";
import { Component1403 } from "../../icons/Component1403";
import { Component1404 } from "../../icons/Component1404";
import { Component1405 } from "../../icons/Component1405";
import { Component1406 } from "../../icons/Component1406";
import { Component1407 } from "../../icons/Component1407";
import { Component1409 } from "../../icons/Component1409";
import { Component1412 } from "../../icons/Component1412";
import { Component1414 } from "../../icons/Component1414";
import { Component1415 } from "../../icons/Component1415";
import { Component1417 } from "../../icons/Component1417";
import { Component1420 } from "../../icons/Component1420";
import { Component1421 } from "../../icons/Component1421";
import { Component1422 } from "../../icons/Component1422";
import { Component1426 } from "../../icons/Component1426";
import { Component1427 } from "../../icons/Component1427";
import { Component1428 } from "../../icons/Component1428";
import { Component1429 } from "../../icons/Component1429";
import { Component1430 } from "../../icons/Component1430";
import { Component1431 } from "../../icons/Component1431";
import { Component1432 } from "../../icons/Component1432";
import { Component1433 } from "../../icons/Component1433";
import { Component1434 } from "../../icons/Component1434";
import { Component1435 } from "../../icons/Component1435";
import { Component1467 } from "../../icons/Component1467";
import { Component1476 } from "../../icons/Component1476";
import { Component1479 } from "../../icons/Component1479";
import { Component1483 } from "../../icons/Component1483";
import { Component1484 } from "../../icons/Component1484";
import { Component1489 } from "../../icons/Component1489";
import { Component1492 } from "../../icons/Component1492";
import { Component1495 } from "../../icons/Component1495";
import { Component1496 } from "../../icons/Component1496";
import { Component1497 } from "../../icons/Component1497";
import { Component1499 } from "../../icons/Component1499";
import { Component1500 } from "../../icons/Component1500";
import { Component1501 } from "../../icons/Component1501";
import { Component1503 } from "../../icons/Component1503";
import { Component1504 } from "../../icons/Component1504";
import { Component1507 } from "../../icons/Component1507";
import { Component1508 } from "../../icons/Component1508";
import { Component1510 } from "../../icons/Component1510";
import { Component1511 } from "../../icons/Component1511";
import { Component1517 } from "../../icons/Component1517";
import { Component1519 } from "../../icons/Component1519";
import { Component1534 } from "../../icons/Component1534";
import { Component1535 } from "../../icons/Component1535";
import { Component1537 } from "../../icons/Component1537";
import { Component1542 } from "../../icons/Component1542";
import { Component1547 } from "../../icons/Component1547";
import { Component1548 } from "../../icons/Component1548";
import { Component1553 } from "../../icons/Component1553";
import { Component1554 } from "../../icons/Component1554";
import { Component1558 } from "../../icons/Component1558";
import { Component1559 } from "../../icons/Component1559";
import { Component1560 } from "../../icons/Component1560";
import { Component1561 } from "../../icons/Component1561";
import { Component1563 } from "../../icons/Component1563";
import { Component1565 } from "../../icons/Component1565";
import { Component1569 } from "../../icons/Component1569";
import { Component1570 } from "../../icons/Component1570";
import { Component1571 } from "../../icons/Component1571";
import { Component1572 } from "../../icons/Component1572";
import { Component1574 } from "../../icons/Component1574";
import { Component1575 } from "../../icons/Component1575";
import { Component1579 } from "../../icons/Component1579";
import { Component1581 } from "../../icons/Component1581";
import { Component1582 } from "../../icons/Component1582";
import { Component1583 } from "../../icons/Component1583";
import { Component1585 } from "../../icons/Component1585";
import { Component1589 } from "../../icons/Component1589";
import { Component1591 } from "../../icons/Component1591";
import { Component1592 } from "../../icons/Component1592";
import { Component1594 } from "../../icons/Component1594";
import { Component1595 } from "../../icons/Component1595";
import { Component1597 } from "../../icons/Component1597";
import { Component1598 } from "../../icons/Component1598";
import { Component1599 } from "../../icons/Component1599";
import { Component1600 } from "../../icons/Component1600";
import { Component1602 } from "../../icons/Component1602";
import { Component1605 } from "../../icons/Component1605";
import { Component1606 } from "../../icons/Component1606";
import { Component1607 } from "../../icons/Component1607";
import { Component1608 } from "../../icons/Component1608";
import { Component1610 } from "../../icons/Component1610";
import { Component1611 } from "../../icons/Component1611";
import { Component1612 } from "../../icons/Component1612";
import { Component1614 } from "../../icons/Component1614";
import { Component1615 } from "../../icons/Component1615";
import { Component1616 } from "../../icons/Component1616";
import { Component1617 } from "../../icons/Component1617";
import { Component1618 } from "../../icons/Component1618";
import { Component1619 } from "../../icons/Component1619";
import { Component1620 } from "../../icons/Component1620";
import { Component1621 } from "../../icons/Component1621";
import { Component1622 } from "../../icons/Component1622";
import { Component1623 } from "../../icons/Component1623";
import { Component1624 } from "../../icons/Component1624";
import { Component1625 } from "../../icons/Component1625";
import "./style.css";

export const Element = () => {
  const screenWidth = useWindowWidth();
  const windowWidth = useWindowWidth();

  // Define the path for the outer and inner links based on the screen width
  const getOuterLink = () => {
    if (windowWidth >= 1440) {
      return "/connect-page-1440"; // For large screens
    } else if (windowWidth >= 991) {
      return "/connect-page-991"; // For medium screens
    } else {
      return "/connect-page-478"; // For smaller screens
    }
  };

  const getInnerLink = () => {
    if (windowWidth >= 1440) {
      return "/connect-page-1440"; // Inner link for large screens
    } else if (windowWidth >= 991) {
      return "/connect-page-991"; // Inner link for medium screens
    } else {
      return "/connect-page-478"; // Inner link for smaller screens
    }
  };

  const getLinkTo = () => {
    if (screenWidth >= 1440) {
      return "/connect-page-1440"; // For screens 1440px and larger
    } else if (screenWidth >= 991) {
      return "/connect-page-991"; // For screens between 991px and 1439px
    } else {
      return "/connect-page-478"; // For screens less than 991px (specifically 478px or smaller)
    }
  };




  return (
    <div
      className="element"
      style={{
        height:
          screenWidth < 991
            ? "11566px"
            : screenWidth >= 1440
              ? "9490px"
              : undefined,
        minWidth:
          screenWidth < 991
            ? "478px"
            : screenWidth >= 991 && screenWidth < 1440
              ? "991px"
              : screenWidth >= 1440
                ? "1440px"
                : undefined,
      }}
    >
      <div
        className="main-wrapper"
        style={{
          flex:
            screenWidth >= 1440 || (screenWidth >= 991 && screenWidth < 1440)
              ? "0 0 auto"
              : undefined,
          height: screenWidth < 991 ? "11457px" : undefined,
          marginBottom: screenWidth >= 1440 ? "-515.77px" : undefined,
        }}
      >
        <div
          className="main-2"
          style={{
            minHeight:
              screenWidth < 991
                ? "956px"
                : screenWidth >= 991 && screenWidth < 1440
                  ? "619px"
                  : screenWidth >= 1440
                    ? "900px"
                    : undefined,
          }}
        >
          <div
            className="section"
            style={{
              alignItems:
                (screenWidth >= 991 && screenWidth < 1440) || screenWidth < 991
                  ? "flex-start"
                  : screenWidth >= 1440
                    ? "center"
                    : undefined,
              padding:
                screenWidth >= 1440 ||
                (screenWidth >= 991 && screenWidth < 1440)
                  ? "150px 48px 0px"
                  : screenWidth < 991
                    ? "96px 20px 0px"
                    : undefined,
            }}
          >
            <div
              className="container-20"
              style={{
                width:
                  screenWidth >= 991 && screenWidth < 1440
                    ? "895px"
                    : screenWidth >= 1440
                      ? "986px"
                      : screenWidth < 991
                        ? "438px"
                        : undefined,
              }}
            >
              <div className="container-21">
                <a
                  className="component-6"
                  href="https://aave.com/brand"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <a
                    href="https://aave.com/brand"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <p className="introducing-aave-s">
                      Introducing Aave&#39;s new visual identity
                    </p>
                  </a>

                  <div className="container-22">
                    <div className="background-3" />

                    <a
                      className="text-wrapper-8"
                      href="https://aave.com/brand"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Read more
                    </a>

                    <Component1355 className="component-1-355" />
                  </div>
                </a>
              </div>

              <div className="access-the-full-wrapper">
                <div
                  className="access-the-full"
                  style={{
                    fontSize:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "48px"
                        : screenWidth < 991
                          ? "40px"
                          : undefined,
                    letterSpacing:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "-1.44px"
                        : screenWidth < 991
                          ? "-1.20px"
                          : undefined,
                    lineHeight:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "55px"
                        : screenWidth < 991
                          ? "48px"
                          : undefined,
                  }}
                >
                  {(screenWidth >= 1440 ||
                    (screenWidth >= 991 && screenWidth < 1440)) && (
                    <p className="text-wrapper-61">
                      Access the full power of DeFi.
                    </p>
                  )}

                  {screenWidth < 991 && (
                    <p className="text-wrapper-61">
                      Access the full power of
                      <br />
                      DeFi.
                    </p>
                  )}
                </div>
              </div>

              <div className="aave-is-the-world-s-wrapper">
                <p
                  className="aave-is-the-world-s"
                  style={{
                    fontFamily:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "'Inter-Medium', Helvetica"
                        : screenWidth < 991
                          ? "var(--aave-com-inter-medium-20-font-family)"
                          : undefined,
                    fontSize:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "20px"
                        : screenWidth < 991
                          ? "var(--aave-com-inter-medium-20-font-size)"
                          : undefined,
                    fontStyle:
                      screenWidth < 991
                        ? "var(--aave-com-inter-medium-20-font-style)"
                        : undefined,
                    fontWeight:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "500"
                        : screenWidth < 991
                          ? "var(--aave-com-inter-medium-20-font-weight)"
                          : undefined,
                    letterSpacing:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "-0.47px"
                        : screenWidth < 991
                          ? "var(--aave-com-inter-medium-20-letter-spacing)"
                          : undefined,
                    lineHeight:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "30px"
                        : screenWidth < 991
                          ? "var(--aave-com-inter-medium-20-line-height)"
                          : undefined,
                  }}
                >
                  Aave is the world’s largest liquidity protocol.
                  <br />
                  Supply, borrow, swap, stake and more.
                </p>
              </div>

              <div className="container-23">
                <Link className="component-7" to={getOuterLink()}>
                  <div className="container-24" />

                  <div className="background-shadow-2">
                  <Link className="text-2" to={getInnerLink()}>
                    Get Started
                 </Link>

                    <Component1356 className="component-1-356" />
                  </div>
                </Link>
              </div>

              <div className="container-25">
                <div
                  className="SVG-margin"
                  style={{
                    maxWidth:
                      screenWidth >= 991 && screenWidth < 1440
                        ? "895px"
                        : screenWidth >= 1440
                          ? "986px"
                          : screenWidth < 991
                            ? "438px"
                            : undefined,
                  }}
                >
                  <div
                    className="component-1-392-wrapper"
                    style={{
                      maxWidth:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "895px"
                          : screenWidth >= 1440
                            ? "986px"
                            : screenWidth < 991
                              ? "438px"
                              : undefined,
                    }}
                  >
                    <Component1392 className="component-1-392" />
                  </div>
                </div>

                <div className="container-26">
                  <div className="text-wrapper-9">$</div>

                  <div className="container-27">
                    <div className="container-28">
                      <div className="text-wrapper-9">20.50</div>
                    </div>
                  </div>

                  <p className="billion-of-liquidity">
                    <span className="span">billion</span>

                    <span className="text-wrapper-10">
                      {" "}
                      of liquidity currently supplied in Aave.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div
              className="container-29"
              style={{
                alignItems:
                  (screenWidth >= 991 && screenWidth < 1440) ||
                  screenWidth < 991
                    ? "flex-start"
                    : screenWidth >= 1440
                      ? "center"
                      : undefined,
                gap:
                  (screenWidth >= 991 && screenWidth < 1440) ||
                  screenWidth < 991
                    ? "0.01px"
                    : undefined,
                marginTop:
                  screenWidth >= 1440 ||
                  (screenWidth >= 991 && screenWidth < 1440)
                    ? "-110px"
                    : undefined,
                padding: screenWidth < 991 ? "64px 0px 0px" : undefined,
              }}
            >
              {screenWidth >= 991 && screenWidth < 1440 && (
                <>
                  <Component1617 className="component-1-617" />
                  <div className="overlay-gradient-wrapper">
                    <div className="overlay-gradient" />
                  </div>
                </>
              )}

              {screenWidth >= 1440 && (
                <>
                  <Component1616 className="component-1-616" />
                  <div className="container-30">
                    <div className="overlay-gradient" />
                  </div>
                </>
              )}

              {screenWidth < 991 && (
                <>
                  <Component1432 className="component-1-432" />
                  <div className="container-31" />
                </>
              )}
            </div>
          </div>

          <div
            className="section-2"
            style={{
              padding:
                screenWidth < 991
                  ? "48px 20px"
                  : screenWidth >= 991 && screenWidth < 1440
                    ? "150px 48px 100px"
                    : screenWidth >= 1440
                      ? "150px 227px 100px"
                      : undefined,
            }}
          >
            <div
              className="container-32"
              style={{
                gap:
                  screenWidth < 991
                    ? "11.3px"
                    : screenWidth >= 1440 ||
                        (screenWidth >= 991 && screenWidth < 1440)
                      ? "12px"
                      : undefined,
                width:
                  screenWidth < 991
                    ? "438px"
                    : screenWidth >= 991 && screenWidth < 1440
                      ? "895px"
                      : screenWidth >= 1440
                        ? "986px"
                        : undefined,
              }}
            >
              <div
                className="heading-2"
                style={{
                  padding:
                    screenWidth < 991
                      ? "0px 120.87px 0px 120.86px"
                      : screenWidth >= 991 && screenWidth < 1440
                        ? "0px 347.37px 0px 347.36px"
                        : screenWidth >= 1440
                          ? "0px 392.87px 0px 392.86px"
                          : undefined,
                }}
              >
                <div
                  className="text-wrapper-11"
                  style={{
                    letterSpacing:
                      screenWidth < 991
                        ? "-1.20px"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "-0.80px"
                          : undefined,
                    lineHeight:
                      screenWidth < 991
                        ? "55px"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "54px"
                          : undefined,
                  }}
                >
                  Meet Aave.
                </div>
              </div>

              <div
                className="container-33"
                style={{
                  padding:
                    screenWidth < 991
                      ? "0px 87.78px 0.65px"
                      : screenWidth >= 991 && screenWidth < 1440
                        ? "0px 302.47px 0px 302.45px"
                        : screenWidth >= 1440
                          ? "0px 347.97px 0px 347.95px"
                          : undefined,
                }}
              >
                <p
                  className="p"
                  style={{
                    fontSize:
                      screenWidth < 991
                        ? "18px"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "20px"
                          : undefined,
                    lineHeight:
                      screenWidth < 991
                        ? "24.3px"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "27px"
                          : undefined,
                  }}
                >
                  Earn interest and borrow assets.
                </p>
              </div>

              <div
                className="SVG-wrapper"
                style={{
                  padding:
                    screenWidth < 991
                      ? "36.69px 0px 0px"
                      : screenWidth >= 1440 ||
                          (screenWidth >= 991 && screenWidth < 1440)
                        ? "36px 0px 0px"
                        : undefined,
                }}
              >
                <div
                  className="SVG-2"
                  style={{
                    backgroundColor:
                      screenWidth < 991
                        ? "#fcfcfb"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "var(--aavecomalabaster)"
                          : undefined,
                    maxWidth:
                      screenWidth < 991
                        ? "438px"
                        : screenWidth >= 991 && screenWidth < 1440
                          ? "895px"
                          : screenWidth >= 1440
                            ? "986px"
                            : undefined,
                    width:
                      screenWidth < 991
                        ? "438px"
                        : screenWidth >= 991 && screenWidth < 1440
                          ? "895px"
                          : screenWidth >= 1440
                            ? "986px"
                            : undefined,
                  }}
                >
                  {screenWidth < 991 && (
                    <Component1433 className="component-1-433" />
                  )}

                  {screenWidth >= 991 && screenWidth < 1440 && (
                    <Component1623 className="component-1-623" />
                  )}

                  {screenWidth >= 1440 && (
                    <Component1619 className="component-1-619" />
                  )}
                </div>
              </div>

              <div
                className="container-34"
                style={{
                  padding:
                    screenWidth < 991
                      ? "36.7px 0px 0px"
                      : screenWidth >= 1440 ||
                          (screenWidth >= 991 && screenWidth < 1440)
                        ? "36px 24px 0px"
                        : undefined,
                }}
              >
                <div
                  className="button"
                  style={{
                    gap:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "16.7px"
                        : screenWidth < 991
                          ? "15.3px"
                          : undefined,
                  }}
                >
                  <div
                    className="background-4"
                    style={{
                      width:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "585.92px"
                          : screenWidth >= 1440
                            ? "652.66px"
                            : screenWidth < 991
                              ? "286px"
                              : undefined,
                    }}
                  />

                  <div className="text-wrapper-12">Supply</div>

                  <div
                    className="earn-interest-by"
                    style={{
                      alignItems: screenWidth < 991 ? "flex-start" : undefined,
                      color:
                        screenWidth >= 1440 ||
                        (screenWidth >= 991 && screenWidth < 1440)
                          ? "#636161"
                          : undefined,
                      display: screenWidth < 991 ? "inline-flex" : undefined,
                      flex: screenWidth < 991 ? "0 0 auto" : undefined,
                      flexDirection: screenWidth < 991 ? "column" : undefined,
                      fontFamily:
                        screenWidth >= 1440 ||
                        (screenWidth >= 991 && screenWidth < 1440)
                          ? "'Inter-Regular', Helvetica"
                          : undefined,
                      fontSize:
                        screenWidth >= 1440 ||
                        (screenWidth >= 991 && screenWidth < 1440)
                          ? "16px"
                          : undefined,
                      fontWeight:
                        screenWidth >= 1440 ||
                        (screenWidth >= 991 && screenWidth < 1440)
                          ? "400"
                          : undefined,
                      letterSpacing:
                        screenWidth >= 1440 ||
                        (screenWidth >= 991 && screenWidth < 1440)
                          ? "-0.18px"
                          : undefined,
                      lineHeight:
                        screenWidth >= 1440 ||
                        (screenWidth >= 991 && screenWidth < 1440)
                          ? "24px"
                          : undefined,
                      padding:
                        screenWidth < 991 ? "0px 26.3px 0px 0px" : undefined,
                      whiteSpace:
                        screenWidth >= 1440 ||
                        (screenWidth >= 991 && screenWidth < 1440)
                          ? "nowrap"
                          : undefined,
                      width:
                        screenWidth >= 1440 ||
                        (screenWidth >= 991 && screenWidth < 1440)
                          ? "fit-content"
                          : undefined,
                    }}
                  >
                    {(screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)) && (
                      <p className="text-wrapper-61">
                        Earn interest by supplying assets to liquidity pools.
                      </p>
                    )}

                    {screenWidth < 991 && (
                      <p className="earn-interest-by-2">
                        Earn interest by supplying assets to
                        <br />
                        liquidity pools.
                      </p>
                    )}
                  </div>
                </div>

                {screenWidth < 991 && (
                  <button className="button-2">
                    <div className="background-5" />

                    <div className="text-wrapper-13">Borrow</div>
                  </button>
                )}
              </div>
            </div>

            <div
              className="horizontal-divider"
              style={{
                left:
                  (screenWidth >= 991 && screenWidth < 1440) ||
                  screenWidth < 991
                    ? "0"
                    : screenWidth >= 1440
                      ? "179px"
                      : undefined,
                top:
                  screenWidth < 991
                    ? "621px"
                    : screenWidth >= 991 && screenWidth < 1440
                      ? "967px"
                      : screenWidth >= 1440
                        ? "1008px"
                        : undefined,
                width:
                  screenWidth < 991
                    ? "478px"
                    : screenWidth >= 991 && screenWidth < 1440
                      ? "991px"
                      : screenWidth >= 1440
                        ? "1082px"
                        : undefined,
              }}
            />
          </div>

          <div
            className="section-3"
            style={{
              padding:
                screenWidth < 991
                  ? "48px 20px"
                  : screenWidth >= 991 && screenWidth < 1440
                    ? "100px 48px"
                    : screenWidth >= 1440
                      ? "100px 227px"
                      : undefined,
            }}
          >
            <div
              className="container-35"
              style={{
                width:
                  screenWidth < 991
                    ? "438px"
                    : screenWidth >= 991 && screenWidth < 1440
                      ? "895px"
                      : screenWidth >= 1440
                        ? "986px"
                        : undefined,
              }}
            >
              <div
                className="container-36"
                style={{
                  flexDirection: screenWidth < 991 ? "column" : undefined,
                  gap:
                    screenWidth >= 1440 ||
                    (screenWidth >= 991 && screenWidth < 1440)
                      ? "72px"
                      : undefined,
                  justifyContent:
                    screenWidth >= 1440 ||
                    (screenWidth >= 991 && screenWidth < 1440)
                      ? "center"
                      : undefined,
                }}
              >
                <div
                  className="container-37"
                  style={{
                    alignSelf: screenWidth < 991 ? "stretch" : undefined,
                    flex: screenWidth < 991 ? "0 0 auto" : undefined,
                    gap: screenWidth < 991 ? "11.35px" : undefined,
                    padding:
                      screenWidth < 991
                        ? "0px 0px 48px"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "0px 0px 0px 24px"
                          : undefined,
                    width:
                      screenWidth < 991
                        ? "100%"
                        : screenWidth >= 991 && screenWidth < 1440
                          ? "411.5px"
                          : screenWidth >= 1440
                            ? "457px"
                            : undefined,
                  }}
                >
                  {screenWidth < 991 && (
                    <>
                      <div className="heading-3">
                        <div className="text-wrapper-14">
                          Aave by the numbers.
                        </div>
                      </div>

                      <div className="aave-is-one-of-the-wrapper">
                        <p className="aave-is-one-of-the">
                          Aave is one of the largest DeFi protocols with
                          billions
                          <br />
                          of dollars in weekly volume across Ethereum and 12+
                          <br />
                          networks.
                        </p>
                      </div>
                    </>
                  )}

                  {(screenWidth >= 1440 ||
                    (screenWidth >= 991 && screenWidth < 1440)) && (
                    <div className="container-38">
                      <div className="heading-4">
                        <div className="text-wrapper-14">
                          Aave by the numbers.
                        </div>
                      </div>

                      <div className="container-39">
                        <div className="aave-is-one-of-the-2">
                          {screenWidth >= 991 && screenWidth < 1440 && (
                            <p className="text-wrapper-61">
                              Aave is one of the largest DeFi protocols
                              <br />
                              with billions of dollars in weekly volume
                              <br />
                              across Ethereum and 12+ networks.
                            </p>
                          )}

                          {screenWidth >= 1440 && (
                            <p className="text-wrapper-61">
                              Aave is one of the largest DeFi protocols with
                              <br />
                              billions of dollars in weekly volume across
                              <br />
                              Ethereum and 12+ networks.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className="container-40"
                  style={{
                    height: screenWidth < 991 ? "1447.13px" : undefined,
                    marginTop: screenWidth < 991 ? "-1.14e-13px" : undefined,
                    width:
                      screenWidth < 991
                        ? "100%"
                        : screenWidth >= 991 && screenWidth < 1440
                          ? "411.5px"
                          : screenWidth >= 1440
                            ? "457px"
                            : undefined,
                  }}
                >
                  <div
                    className="container-41"
                    style={{
                      gap:
                        screenWidth < 991
                          ? "12.01px"
                          : screenWidth >= 1440 ||
                              (screenWidth >= 991 && screenWidth < 1440)
                            ? "12px"
                            : undefined,
                    }}
                  >
                    <div
                      className="background-6"
                      style={{
                        backgroundColor:
                          screenWidth < 991
                            ? "#fcfcfb"
                            : screenWidth >= 1440 ||
                                (screenWidth >= 991 && screenWidth < 1440)
                              ? "var(--aavecomalabaster)"
                              : undefined,
                      }}
                    >
                      {screenWidth < 991 && (
                        <Component1434 className="instance-node" />
                      )}

                      {screenWidth >= 991 && screenWidth < 1440 && (
                        <Component1621 className="component-8" />
                      )}

                      {screenWidth >= 1440 && (
                        <Component1620 className="component-9" />
                      )}
                    </div>

                    <div
                      className="container-42"
                      style={{
                        alignItems: screenWidth < 991 ? "center" : undefined,
                        alignSelf:
                          screenWidth >= 1440 ||
                          (screenWidth >= 991 && screenWidth < 1440)
                            ? "stretch"
                            : undefined,
                        display: screenWidth < 991 ? "flex" : undefined,
                        gap: screenWidth < 991 ? "12px" : undefined,
                        height:
                          screenWidth < 991
                            ? "65.19px"
                            : screenWidth >= 991 && screenWidth < 1440
                              ? "88.19px"
                              : screenWidth >= 1440
                                ? "66.59px"
                                : undefined,
                        padding: screenWidth < 991 ? "19px 0px" : undefined,
                        width:
                          screenWidth < 991
                            ? "438px"
                            : screenWidth >= 1440 ||
                                (screenWidth >= 991 && screenWidth < 1440)
                              ? "100%"
                              : undefined,
                      }}
                    >
                      <div
                        className="container-43"
                        style={{
                          left:
                            screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                              ? "0"
                              : undefined,
                          position:
                            screenWidth < 991
                              ? "relative"
                              : screenWidth >= 1440 ||
                                  (screenWidth >= 991 && screenWidth < 1440)
                                ? "absolute"
                                : undefined,
                          top:
                            screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                              ? "20px"
                              : undefined,
                        }}
                      >
                        <div className="text-wrapper-15">$</div>

                        <div className="container-44">
                          <div className="container-28">
                            <div className="text-wrapper-16">20.50</div>
                          </div>
                        </div>

                        <div className="text-wrapper-15">B</div>
                      </div>

                      <div
                        className="net-deposits"
                        style={{
                          alignItems:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "flex-start"
                              : undefined,
                          color:
                            screenWidth >= 1440 || screenWidth < 991
                              ? "#221d1d"
                              : undefined,
                          display:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "inline-flex"
                              : undefined,
                          flexDirection:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "column"
                              : undefined,
                          fontFamily:
                            screenWidth >= 1440 || screenWidth < 991
                              ? "'Inter-Regular', Helvetica"
                              : undefined,
                          fontSize:
                            screenWidth >= 1440 || screenWidth < 991
                              ? "16px"
                              : undefined,
                          fontWeight:
                            screenWidth >= 1440 || screenWidth < 991
                              ? "400"
                              : undefined,
                          height:
                            screenWidth < 991
                              ? "21.6px"
                              : screenWidth >= 1440
                                ? "22px"
                                : undefined,
                          left:
                            screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                              ? "114px"
                              : undefined,
                          letterSpacing:
                            screenWidth >= 1440 || screenWidth < 991
                              ? "-0.18px"
                              : undefined,
                          lineHeight:
                            screenWidth >= 1440 || screenWidth < 991
                              ? "21.6px"
                              : undefined,
                          padding:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "0px 65.27px 0.8px 0px"
                              : undefined,
                          position:
                            screenWidth < 991
                              ? "relative"
                              : screenWidth >= 1440 ||
                                  (screenWidth >= 991 && screenWidth < 1440)
                                ? "absolute"
                                : undefined,
                          top:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "24px"
                              : screenWidth >= 1440
                                ? "23px"
                                : undefined,
                          whiteSpace:
                            screenWidth >= 1440 || screenWidth < 991
                              ? "nowrap"
                              : undefined,
                          width:
                            screenWidth < 991
                              ? "312.98px"
                              : screenWidth >= 1440
                                ? "313px"
                                : undefined,
                        }}
                      >
                        {(screenWidth >= 1440 || screenWidth < 991) && (
                          <p className="text-wrapper-61">
                            Net deposits supplied across 13 networks.
                          </p>
                        )}

                        {screenWidth >= 991 && screenWidth < 1440 && (
                          <p className="div-5">
                            Net deposits supplied across 13
                            <br />
                            networks.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="div-6">
                    <div
                      className="background-7"
                      style={{
                        backgroundColor:
                          screenWidth < 991
                            ? "#fcfcfb"
                            : screenWidth >= 1440 ||
                                (screenWidth >= 991 && screenWidth < 1440)
                              ? "var(--aavecomalabaster)"
                              : undefined,
                      }}
                    >
                      {screenWidth < 991 && (
                        <Component1426 className="instance-node" />
                      )}

                      {screenWidth >= 991 && screenWidth < 1440 && (
                        <Component1605 className="component-8" />
                      )}

                      {screenWidth >= 1440 && (
                        <Component1594 className="component-9" />
                      )}
                    </div>

                    <div
                      className="container-45"
                      style={{
                        alignItems: screenWidth < 991 ? "center" : undefined,
                        alignSelf:
                          screenWidth >= 1440 ||
                          (screenWidth >= 991 && screenWidth < 1440)
                            ? "stretch"
                            : undefined,
                        display: screenWidth < 991 ? "flex" : undefined,
                        gap: screenWidth < 991 ? "12px" : undefined,
                        height:
                          screenWidth < 991
                            ? "65.19px"
                            : screenWidth >= 1440 ||
                                (screenWidth >= 991 && screenWidth < 1440)
                              ? "66.59px"
                              : undefined,
                        padding: screenWidth < 991 ? "19px 0px" : undefined,
                        width:
                          screenWidth < 991
                            ? "438px"
                            : screenWidth >= 1440 ||
                                (screenWidth >= 991 && screenWidth < 1440)
                              ? "100%"
                              : undefined,
                      }}
                    >
                      <div
                        className="container-46"
                        style={{
                          left:
                            screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                              ? "0"
                              : undefined,
                          position:
                            screenWidth < 991
                              ? "relative"
                              : screenWidth >= 1440 ||
                                  (screenWidth >= 991 && screenWidth < 1440)
                                ? "absolute"
                                : undefined,
                          top:
                            screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                              ? "20px"
                              : undefined,
                        }}
                      >
                        <div className="text-wrapper-15">$</div>

                        <div className="container-47">
                          <div className="container-28">
                            <div className="text-wrapper-16">186.62</div>
                          </div>
                        </div>

                        <div className="text-wrapper-15">B</div>
                      </div>

                      <div
                        className="text-wrapper-17"
                        style={{
                          height:
                            screenWidth < 991
                              ? "21.6px"
                              : screenWidth >= 1440 ||
                                  (screenWidth >= 991 && screenWidth < 1440)
                                ? "22px"
                                : undefined,
                          left:
                            screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                              ? "114px"
                              : undefined,
                          position:
                            screenWidth < 991
                              ? "relative"
                              : screenWidth >= 1440 ||
                                  (screenWidth >= 991 && screenWidth < 1440)
                                ? "absolute"
                                : undefined,
                          top:
                            screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                              ? "23px"
                              : undefined,
                          width:
                            screenWidth < 991
                              ? "163.74px"
                              : screenWidth >= 1440 ||
                                  (screenWidth >= 991 && screenWidth < 1440)
                                ? "164px"
                                : undefined,
                        }}
                      >
                        Volume, past 30 days.
                      </div>
                    </div>
                  </div>

                  <div className="div-6">
                    <div
                      className="background-8"
                      style={{
                        backgroundColor:
                          screenWidth < 991
                            ? "#fcfcfb"
                            : screenWidth >= 1440 ||
                                (screenWidth >= 991 && screenWidth < 1440)
                              ? "var(--aavecomalabaster)"
                              : undefined,
                      }}
                    >
                      {screenWidth < 991 && (
                        <Component1417
                          className="instance-node"
                          color="#B5E7FA"
                          color1="#6BCEF5"
                          fill="#DFF6FF"
                        />
                      )}

                      {screenWidth >= 991 && screenWidth < 1440 && (
                        <Component1591
                          className="component-8"
                          color="#B5E7FA"
                          color1="#6BCEF5"
                          fill="#DFF6FF"
                        />
                      )}

                      {screenWidth >= 1440 && (
                        <Component1565
                          className="component-9"
                          color="#B5E7FA"
                          color1="#6BCEF5"
                          fill="#DFF6FF"
                        />
                      )}
                    </div>

                    <div
                      className="container-48"
                      style={{
                        alignItems:
                          screenWidth < 991 ? "flex-start" : undefined,
                        alignSelf:
                          screenWidth >= 1440 ||
                          (screenWidth >= 991 && screenWidth < 1440)
                            ? "stretch"
                            : undefined,
                        display: screenWidth < 991 ? "flex" : undefined,
                        gap: screenWidth < 991 ? "12px" : undefined,
                        height:
                          screenWidth < 991
                            ? "83.19px"
                            : screenWidth >= 1440 ||
                                (screenWidth >= 991 && screenWidth < 1440)
                              ? "88.19px"
                              : undefined,
                        padding:
                          screenWidth < 991 ? "20px 0px 19.2px" : undefined,
                        width:
                          screenWidth < 991
                            ? "438px"
                            : screenWidth >= 1440 ||
                                (screenWidth >= 991 && screenWidth < 1440)
                              ? "100%"
                              : undefined,
                      }}
                    >
                      <div
                        className="container-49"
                        style={{
                          left:
                            screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                              ? "0"
                              : undefined,
                          position:
                            screenWidth < 991
                              ? "relative"
                              : screenWidth >= 1440 ||
                                  (screenWidth >= 991 && screenWidth < 1440)
                                ? "absolute"
                                : undefined,
                          top:
                            screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                              ? "20px"
                              : undefined,
                        }}
                      >
                        <div className="container-50">
                          <div className="container-28">
                            <div className="text-wrapper-16">6.76</div>
                          </div>
                        </div>

                        <div className="text-wrapper-15">%</div>
                      </div>

                      <div
                        className="average-stablecoin-wrapper"
                        style={{
                          flex: screenWidth < 991 ? "0 0 auto" : undefined,
                          left:
                            screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                              ? "114px"
                              : undefined,
                          marginBottom:
                            screenWidth < 991 ? "-0.81px" : undefined,
                          marginRight:
                            screenWidth < 991 ? "-1.91px" : undefined,
                          padding:
                            screenWidth < 991
                              ? "0px 20.91px 0.8px 0px"
                              : screenWidth >= 991 && screenWidth < 1440
                                ? "0px 68.89px 0.8px 0px"
                                : screenWidth >= 1440
                                  ? "0px 39.91px 0.8px 0px"
                                  : undefined,
                          position:
                            screenWidth < 991
                              ? "relative"
                              : screenWidth >= 1440 ||
                                  (screenWidth >= 991 && screenWidth < 1440)
                                ? "absolute"
                                : undefined,
                          top:
                            screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                              ? "24px"
                              : undefined,
                        }}
                      >
                        <div className="div-5">
                          {(screenWidth >= 1440 || screenWidth < 991) && (
                            <p className="text-wrapper-61">
                              Average stablecoin supply APY Ethereum
                              <br />
                              network, past year.
                            </p>
                          )}

                          {screenWidth >= 991 && screenWidth < 1440 && (
                            <p className="text-wrapper-61">
                              Average stablecoin supply APY
                              <br />
                              Ethereum network, past year.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="div-6">
                    <div
                      className="background-9"
                      style={{
                        backgroundColor:
                          screenWidth < 991
                            ? "#fcfcfb"
                            : screenWidth >= 1440 ||
                                (screenWidth >= 991 && screenWidth < 1440)
                              ? "var(--aavecomalabaster)"
                              : undefined,
                      }}
                    >
                      {screenWidth < 991 && (
                        <Component1417
                          className="instance-node"
                          color="#48ABFF"
                          color1="#1A88F8"
                          fill="#A9E7FF"
                        />
                      )}

                      {screenWidth >= 991 && screenWidth < 1440 && (
                        <Component1591
                          className="component-8"
                          color="#48ABFF"
                          color1="#1A88F8"
                          fill="#A9E7FF"
                        />
                      )}

                      {screenWidth >= 1440 && (
                        <Component1565
                          className="component-9"
                          color="#48ABFF"
                          color1="#1A88F8"
                          fill="#A9E7FF"
                        />
                      )}
                    </div>

                    <div
                      className="container-51"
                      style={{
                        alignItems:
                          screenWidth < 991 ? "flex-start" : undefined,
                        alignSelf:
                          screenWidth >= 1440 ||
                          (screenWidth >= 991 && screenWidth < 1440)
                            ? "stretch"
                            : undefined,
                        display: screenWidth < 991 ? "flex" : undefined,
                        gap: screenWidth < 991 ? "12px" : undefined,
                        height:
                          screenWidth < 991
                            ? "83.19px"
                            : screenWidth >= 1440 ||
                                (screenWidth >= 991 && screenWidth < 1440)
                              ? "88.19px"
                              : undefined,
                        padding:
                          screenWidth < 991 ? "20px 0px 19.2px" : undefined,
                        width:
                          screenWidth < 991
                            ? "438px"
                            : screenWidth >= 1440 ||
                                (screenWidth >= 991 && screenWidth < 1440)
                              ? "100%"
                              : undefined,
                      }}
                    >
                      <div
                        className="container-52"
                        style={{
                          left:
                            screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                              ? "0"
                              : undefined,
                          position:
                            screenWidth < 991
                              ? "relative"
                              : screenWidth >= 1440 ||
                                  (screenWidth >= 991 && screenWidth < 1440)
                                ? "absolute"
                                : undefined,
                          top:
                            screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                              ? "20px"
                              : undefined,
                        }}
                      >
                        <div className="container-53">
                          <div className="container-28">
                            <div className="text-wrapper-16">9.26</div>
                          </div>
                        </div>

                        <div className="text-wrapper-15">%</div>
                      </div>

                      <div
                        className="container-54"
                        style={{
                          flex: screenWidth < 991 ? "0 0 auto" : undefined,
                          left:
                            screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                              ? "114px"
                              : undefined,
                          marginBottom:
                            screenWidth < 991 ? "-0.80px" : undefined,
                          marginRight:
                            screenWidth < 991 ? "-2.16px" : undefined,
                          padding:
                            screenWidth < 991
                              ? "0px 18.16px 0.79px 0px"
                              : screenWidth >= 991 && screenWidth < 1440
                                ? "0px 66.14px 0.8px 0px"
                                : screenWidth >= 1440
                                  ? "0px 37.16px 0.8px 0px"
                                  : undefined,
                          position:
                            screenWidth < 991
                              ? "relative"
                              : screenWidth >= 1440 ||
                                  (screenWidth >= 991 && screenWidth < 1440)
                                ? "absolute"
                                : undefined,
                          top:
                            screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                              ? "24px"
                              : undefined,
                        }}
                      >
                        <div className="div-5">
                          {(screenWidth >= 1440 || screenWidth < 991) && (
                            <p className="text-wrapper-61">
                              Average stablecoin borrow APR Ethereum
                              <br />
                              network, past year.
                            </p>
                          )}

                          {screenWidth >= 991 && screenWidth < 1440 && (
                            <p className="text-wrapper-61">
                              Average stablecoin borrow APR
                              <br />
                              Ethereum network, past year.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="horizontal-divider-2"
              style={{
                left:
                  (screenWidth >= 991 && screenWidth < 1440) ||
                  screenWidth < 991
                    ? "0"
                    : screenWidth >= 1440
                      ? "179px"
                      : undefined,
                top:
                  screenWidth < 991
                    ? "1754px"
                    : screenWidth >= 991 && screenWidth < 1440
                      ? "1623px"
                      : screenWidth >= 1440
                        ? "1701px"
                        : undefined,
                width:
                  screenWidth < 991
                    ? "478px"
                    : screenWidth >= 991 && screenWidth < 1440
                      ? "991px"
                      : screenWidth >= 1440
                        ? "1082px"
                        : undefined,
              }}
            />
          </div>

          <div
            className="section-4"
            style={{
              padding:
                screenWidth < 991
                  ? "48px 20px"
                  : screenWidth >= 991 && screenWidth < 1440
                    ? "100px 48px"
                    : screenWidth >= 1440
                      ? "100px 227px"
                      : undefined,
            }}
          >
            <div
              className="container-55"
              style={{
                width:
                  screenWidth < 991
                    ? "438px"
                    : screenWidth >= 991 && screenWidth < 1440
                      ? "895px"
                      : screenWidth >= 1440
                        ? "986px"
                        : undefined,
              }}
            >
              <div
                className="heading-5"
                style={{
                  padding:
                    screenWidth >= 1440 ||
                    (screenWidth >= 991 && screenWidth < 1440)
                      ? "0px 24px"
                      : undefined,
                }}
              >
                <div className="text-wrapper-14">DeFi, unlocked.</div>
              </div>

              <div
                className="container-56"
                style={{
                  alignItems: screenWidth < 991 ? "flex-start" : undefined,
                  display: screenWidth < 991 ? "flex" : undefined,
                  flex: screenWidth < 991 ? "0 0 auto" : undefined,
                  flexDirection: screenWidth < 991 ? "column" : undefined,
                  gap: screenWidth < 991 ? "48px" : undefined,
                  height:
                    screenWidth >= 1440 ||
                    (screenWidth >= 991 && screenWidth < 1440)
                      ? "648px"
                      : undefined,
                  justifyContent: screenWidth < 991 ? "center" : undefined,
                }}
              >
                <div
                  className="background-10"
                  style={{
                    alignSelf: screenWidth < 991 ? "stretch" : undefined,
                    backgroundColor:
                      screenWidth < 991
                        ? "#fcfcfb"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "var(--aavecomalabaster)"
                          : undefined,
                    gap: screenWidth >= 1440 ? "0.01px" : undefined,
                    left:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "0"
                        : undefined,
                    padding:
                      screenWidth < 991
                        ? "32px 24px"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "32px 40px"
                          : undefined,
                    position:
                      screenWidth < 991
                        ? "relative"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "absolute"
                          : undefined,
                    top:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "0"
                        : undefined,
                    width:
                      screenWidth < 991
                        ? "100%"
                        : screenWidth >= 991 && screenWidth < 1440
                          ? "428px"
                          : screenWidth >= 1440
                            ? "473px"
                            : undefined,
                  }}
                >
                  {((screenWidth >= 991 && screenWidth < 1440) ||
                    screenWidth < 991) && (
                    <>
                      <Component1420
                        className={`${screenWidth < 991 && "class"} ${screenWidth >= 991 && screenWidth < 1440 && "class-2"}`}
                      />
                      <div
                        className="heading-margin-2"
                        style={{
                          alignItems: screenWidth < 991 ? "center" : undefined,
                          alignSelf:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "stretch"
                              : undefined,
                          display: screenWidth < 991 ? "flex" : undefined,
                          flexDirection:
                            screenWidth < 991 ? "column" : undefined,
                          width:
                            screenWidth < 991
                              ? "390px"
                              : screenWidth >= 991 && screenWidth < 1440
                                ? "100%"
                                : undefined,
                        }}
                      >
                        <div
                          className="heading-6"
                          style={{
                            flex: screenWidth < 991 ? "0 0 auto" : undefined,
                            top:
                              screenWidth >= 991 && screenWidth < 1440
                                ? "-1px"
                                : undefined,
                            width:
                              screenWidth < 991
                                ? "390px"
                                : screenWidth >= 991 && screenWidth < 1440
                                  ? "348px"
                                  : undefined,
                          }}
                        >
                          <div className="text-wrapper-18">Swap</div>
                        </div>
                      </div>

                      <div className="container-57">
                        <div
                          className="swap-any-ERC-even"
                          style={{
                            whiteSpace:
                              screenWidth < 991 ? "nowrap" : undefined,
                          }}
                        >
                          {screenWidth < 991 && (
                            <p className="text-wrapper-61">
                              Swap any ERC-20, even those borrowed or supplied.
                            </p>
                          )}

                          {screenWidth >= 991 && screenWidth < 1440 && (
                            <p className="text-wrapper-61">
                              Swap any ERC-20, even those borrowed or
                              <br />
                              supplied.
                            </p>
                          )}
                        </div>
                      </div>
                    </>
                  )}

                  {screenWidth >= 1440 && (
                    <>
                      <Component1589 className="component-1-589" />
                      <div className="heading-margin-3">
                        <div className="heading-7">
                          <div className="text-wrapper-18">Swap</div>
                        </div>
                      </div>

                      <div className="container-58">
                        <p className="text-wrapper-19">
                          Swap any ERC-20, even those borrowed or supplied.
                        </p>
                      </div>
                    </>
                  )}
                </div>

                <div
                  className="background-11"
                  style={{
                    alignSelf: screenWidth < 991 ? "stretch" : undefined,
                    backgroundColor:
                      screenWidth < 991
                        ? "#fcfcfb"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "var(--aavecomalabaster)"
                          : undefined,
                    gap: screenWidth >= 1440 ? "0.01px" : undefined,
                    left:
                      screenWidth >= 991 && screenWidth < 1440
                        ? "468px"
                        : screenWidth >= 1440
                          ? "513px"
                          : undefined,
                    padding:
                      screenWidth < 991
                        ? "32px 24px"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "32px 40px"
                          : undefined,
                    position:
                      screenWidth < 991
                        ? "relative"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "absolute"
                          : undefined,
                    top:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "0"
                        : undefined,
                    width:
                      screenWidth < 991
                        ? "100%"
                        : screenWidth >= 991 && screenWidth < 1440
                          ? "428px"
                          : screenWidth >= 1440
                            ? "473px"
                            : undefined,
                  }}
                >
                  {screenWidth < 991 && (
                    <>
                      <Component1427 className="component-1-427" />
                      <div className="heading-margin-4">
                        <div className="heading-8">
                          <div className="text-wrapper-18">Stake</div>
                        </div>
                      </div>
                    </>
                  )}

                  {screenWidth >= 991 && screenWidth < 1440 && (
                    <>
                      <Component1606 className="component-1-606" />
                      <div className="heading-margin-5">
                        <div className="heading-9">
                          <div className="text-wrapper-18">Stake</div>
                        </div>
                      </div>
                    </>
                  )}

                  {((screenWidth >= 991 && screenWidth < 1440) ||
                    screenWidth < 991) && (
                    <div className="container-57">
                      <p className="text-wrapper-20">
                        Earn rewards for securing the protocol.
                      </p>
                    </div>
                  )}

                  {screenWidth >= 1440 && (
                    <>
                      <Component1608 className="component-1-608" />
                      <div className="heading-margin-3">
                        <div className="heading-7">
                          <div className="text-wrapper-18">Stake</div>
                        </div>
                      </div>

                      <div className="container-59">
                        <p className="text-wrapper-21">
                          Earn rewards for securing the protocol.
                        </p>
                      </div>
                    </>
                  )}
                </div>

                <div
                  className="background-12"
                  style={{
                    alignSelf: screenWidth < 991 ? "stretch" : undefined,
                    backgroundColor:
                      screenWidth < 991
                        ? "#fcfcfb"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "var(--aavecomalabaster)"
                          : undefined,
                    gap:
                      screenWidth < 991
                        ? "3.27e-13px"
                        : screenWidth >= 1440
                          ? "0.01px"
                          : undefined,
                    left:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "0"
                        : undefined,
                    padding:
                      screenWidth < 991
                        ? "32px 24px"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "32px 40px"
                          : undefined,
                    position:
                      screenWidth < 991
                        ? "relative"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "absolute"
                          : undefined,
                    top:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "348px"
                        : undefined,
                    width:
                      screenWidth < 991
                        ? "100%"
                        : screenWidth >= 991 && screenWidth < 1440
                          ? "428px"
                          : screenWidth >= 1440
                            ? "473px"
                            : undefined,
                  }}
                >
                  {screenWidth < 991 && (
                    <>
                      <Component1422 className="component-1-422" />
                      <div className="heading-margin-6">
                        <div className="heading-8">
                          <div className="text-wrapper-18">Health Factor</div>
                        </div>
                      </div>
                    </>
                  )}

                  {screenWidth >= 991 && screenWidth < 1440 && (
                    <>
                      <Component1595 className="component-1-595" />
                      <div className="heading-margin-5">
                        <div className="heading-9">
                          <div className="text-wrapper-18">Health Factor</div>
                        </div>
                      </div>

                      <div className="container-57">
                        <p className="easily-track-the">
                          Easily track the risk level of your borrow
                          <br />
                          positions.
                        </p>
                      </div>
                    </>
                  )}

                  {screenWidth >= 1440 && (
                    <>
                      <Component1575 className="component-1-575" />
                      <div className="heading-margin-3">
                        <div className="heading-7">
                          <div className="text-wrapper-18">Health Factor</div>
                        </div>
                      </div>
                    </>
                  )}

                  {(screenWidth >= 1440 || screenWidth < 991) && (
                    <div className="container-60">
                      <p className="text-wrapper-22">
                        Easily track the risk level of your borrow positions.
                      </p>
                    </div>
                  )}
                </div>

                <div
                  className="background-13"
                  style={{
                    alignSelf: screenWidth < 991 ? "stretch" : undefined,
                    backgroundColor:
                      screenWidth < 991
                        ? "#fcfcfb"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "var(--aavecomalabaster)"
                          : undefined,
                    gap:
                      screenWidth < 991
                        ? "3.27e-13px"
                        : screenWidth >= 1440
                          ? "0.01px"
                          : undefined,
                    left:
                      screenWidth >= 991 && screenWidth < 1440
                        ? "468px"
                        : screenWidth >= 1440
                          ? "513px"
                          : undefined,
                    padding:
                      screenWidth < 991
                        ? "32px 24px"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "32px 40px"
                          : undefined,
                    position:
                      screenWidth < 991
                        ? "relative"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "absolute"
                          : undefined,
                    top:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "348px"
                        : undefined,
                    width:
                      screenWidth < 991
                        ? "100%"
                        : screenWidth >= 991 && screenWidth < 1440
                          ? "428px"
                          : screenWidth >= 1440
                            ? "473px"
                            : undefined,
                  }}
                >
                  <Component1599
                    className={`${screenWidth < 991 && "class-3"} ${screenWidth >= 991 && screenWidth < 1440 && "class-4"} ${screenWidth >= 1440 && "class-5"}`}
                  />
                  <div
                    className="heading-margin-7"
                    style={{
                      alignItems: screenWidth < 991 ? "center" : undefined,
                      alignSelf:
                        screenWidth >= 1440 ||
                        (screenWidth >= 991 && screenWidth < 1440)
                          ? "stretch"
                          : undefined,
                      display: screenWidth < 991 ? "flex" : undefined,
                      flexDirection: screenWidth < 991 ? "column" : undefined,
                      marginTop:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "-1.28e-13px"
                          : undefined,
                      width:
                        screenWidth < 991
                          ? "390px"
                          : screenWidth >= 1440 ||
                              (screenWidth >= 991 && screenWidth < 1440)
                            ? "100%"
                            : undefined,
                    }}
                  >
                    <div
                      className="heading-10"
                      style={{
                        flex: screenWidth < 991 ? "0 0 auto" : undefined,
                        top:
                          screenWidth >= 1440 ||
                          (screenWidth >= 991 && screenWidth < 1440)
                            ? "-1px"
                            : undefined,
                        width:
                          screenWidth < 991
                            ? "390px"
                            : screenWidth >= 991 && screenWidth < 1440
                              ? "348px"
                              : screenWidth >= 1440
                                ? "393px"
                                : undefined,
                      }}
                    >
                      <div className="text-wrapper-18">Multi-Network</div>
                    </div>
                  </div>

                  <div
                    className="container-61"
                    style={{
                      marginTop:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "-1.28e-13px"
                          : undefined,
                    }}
                  >
                    <p className="text-wrapper-23">
                      Deployable on any EVM compatible network.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="container-62"
                style={{
                  gap: screenWidth < 991 ? "16px" : undefined,
                }}
              >
                <div
                  className="container-63"
                  style={{
                    flexDirection: screenWidth < 991 ? "column" : undefined,
                    gap:
                      screenWidth < 991
                        ? "8px"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "40px"
                          : undefined,
                    justifyContent:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "center"
                        : undefined,
                    padding:
                      screenWidth < 991
                        ? "28px 32px"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "32px"
                          : undefined,
                  }}
                >
                  <div
                    className="container-64"
                    style={{
                      alignSelf: screenWidth < 991 ? "stretch" : undefined,
                      flex: screenWidth < 991 ? "0 0 auto" : undefined,
                      width:
                        screenWidth < 991
                          ? "100%"
                          : screenWidth >= 991 && screenWidth < 1440
                            ? "395.5px"
                            : screenWidth >= 1440
                              ? "441px"
                              : undefined,
                    }}
                  >
                    {screenWidth < 991 && (
                      <Component1405 className="component-10" />
                    )}

                    {screenWidth >= 991 && screenWidth < 1440 && (
                      <Component1572 className="component-10" />
                    )}

                    {((screenWidth >= 991 && screenWidth < 1440) ||
                      screenWidth < 991) && (
                      <div className="heading-11">
                        <div className="text-wrapper-24">Non-Custodial</div>
                      </div>
                    )}

                    {screenWidth >= 1440 && (
                      <>
                        <Component1504 className="component-10" />
                        <div className="heading-11">
                          <div className="text-wrapper-24">Non-Custodial</div>
                        </div>
                      </>
                    )}
                  </div>

                  <div
                    className="users-maintain-wrapper"
                    style={{
                      alignSelf: screenWidth < 991 ? "stretch" : undefined,
                      flex: screenWidth < 991 ? "0 0 auto" : undefined,
                      width:
                        screenWidth < 991
                          ? "100%"
                          : screenWidth >= 991 && screenWidth < 1440
                            ? "395.5px"
                            : screenWidth >= 1440
                              ? "441px"
                              : undefined,
                    }}
                  >
                    <div
                      className="users-maintain"
                      style={{
                        alignSelf: screenWidth < 991 ? "stretch" : undefined,
                        width:
                          screenWidth >= 1440 ||
                          (screenWidth >= 991 && screenWidth < 1440)
                            ? "fit-content"
                            : undefined,
                      }}
                    >
                      {((screenWidth >= 991 && screenWidth < 1440) ||
                        screenWidth < 991) && (
                        <p className="text-wrapper-61">
                          Users maintain control over their own funds
                          <br />
                          throughout the supplying and borrowing process.
                        </p>
                      )}

                      {screenWidth >= 1440 && (
                        <p className="text-wrapper-61">
                          Users maintain control over their own funds throughout
                          the
                          <br />
                          supplying and borrowing process.
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  className="background-14"
                  style={{
                    backgroundColor:
                      screenWidth < 991
                        ? "#fcfcfb"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "var(--aavecomalabaster)"
                          : undefined,
                    flexDirection: screenWidth < 991 ? "column" : undefined,
                    gap:
                      screenWidth < 991
                        ? "8px"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "40px"
                          : undefined,
                    justifyContent:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "center"
                        : undefined,
                    padding:
                      screenWidth < 991
                        ? "28px 32px"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "32px"
                          : undefined,
                  }}
                >
                  <div
                    className="container-65"
                    style={{
                      alignSelf: screenWidth < 991 ? "stretch" : undefined,
                      flex: screenWidth < 991 ? "0 0 auto" : undefined,
                      width:
                        screenWidth < 991
                          ? "100%"
                          : screenWidth >= 991 && screenWidth < 1440
                            ? "395.5px"
                            : screenWidth >= 1440
                              ? "441px"
                              : undefined,
                    }}
                  >
                    {screenWidth < 991 && (
                      <Component1412 className="component-10" />
                    )}

                    {screenWidth >= 991 && screenWidth < 1440 && (
                      <Component1582 className="component-10" />
                    )}

                    {((screenWidth >= 991 && screenWidth < 1440) ||
                      screenWidth < 991) && (
                      <div className="heading-11">
                        <div className="text-wrapper-24">Transparent</div>
                      </div>
                    )}

                    {screenWidth >= 1440 && (
                      <>
                        <Component1511 className="component-10" />
                        <div className="heading-11">
                          <div className="text-wrapper-24">Transparent</div>
                        </div>
                      </>
                    )}
                  </div>

                  <div
                    className="the-aave-protocol-is-wrapper"
                    style={{
                      alignSelf: screenWidth < 991 ? "stretch" : undefined,
                      flex: screenWidth < 991 ? "0 0 auto" : undefined,
                      width:
                        screenWidth < 991
                          ? "100%"
                          : screenWidth >= 991 && screenWidth < 1440
                            ? "395.5px"
                            : screenWidth >= 1440
                              ? "441px"
                              : undefined,
                    }}
                  >
                    <div
                      className="the-aave-protocol-is"
                      style={{
                        alignSelf: screenWidth < 991 ? "stretch" : undefined,
                        width:
                          screenWidth >= 1440 ||
                          (screenWidth >= 991 && screenWidth < 1440)
                            ? "fit-content"
                            : undefined,
                      }}
                    >
                      {((screenWidth >= 991 && screenWidth < 1440) ||
                        screenWidth < 991) && (
                        <p className="text-wrapper-61">
                          The Aave Protocol is open source and transactions
                          <br />
                          are visible to anyone.
                        </p>
                      )}

                      {screenWidth >= 1440 && (
                        <p className="text-wrapper-61">
                          The Aave Protocol is open source and transactions are
                          <br />
                          visible to anyone.
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  className="container-66"
                  style={{
                    flexDirection: screenWidth < 991 ? "column" : undefined,
                    gap:
                      screenWidth < 991
                        ? "8px"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "40px"
                          : undefined,
                    justifyContent:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "center"
                        : undefined,
                    padding:
                      screenWidth < 991
                        ? "28px 32px"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "32px"
                          : undefined,
                  }}
                >
                  <div
                    className="container-67"
                    style={{
                      alignSelf: screenWidth < 991 ? "stretch" : undefined,
                      flex: screenWidth < 991 ? "0 0 auto" : undefined,
                      width:
                        screenWidth < 991
                          ? "100%"
                          : screenWidth >= 991 && screenWidth < 1440
                            ? "395.5px"
                            : screenWidth >= 1440
                              ? "441px"
                              : undefined,
                    }}
                  >
                    <Component1406 className="component-10" />
                    <div className="heading-11">
                      <div className="text-wrapper-24">Community Governed</div>
                    </div>
                  </div>

                  <div
                    className="AAVE-token-holders-wrapper"
                    style={{
                      alignSelf: screenWidth < 991 ? "stretch" : undefined,
                      flex: screenWidth < 991 ? "0 0 auto" : undefined,
                      width:
                        screenWidth < 991
                          ? "100%"
                          : screenWidth >= 991 && screenWidth < 1440
                            ? "395.5px"
                            : screenWidth >= 1440
                              ? "441px"
                              : undefined,
                    }}
                  >
                    <div
                      className="AAVE-token-holders"
                      style={{
                        alignSelf: screenWidth < 991 ? "stretch" : undefined,
                        width:
                          screenWidth >= 1440 ||
                          (screenWidth >= 991 && screenWidth < 1440)
                            ? "fit-content"
                            : undefined,
                      }}
                    >
                      {((screenWidth >= 991 && screenWidth < 1440) ||
                        screenWidth < 991) && (
                        <p className="text-wrapper-61">
                          AAVE token holders decide which assets are listed
                          <br />
                          and steer protocol development.
                        </p>
                      )}

                      {screenWidth >= 1440 && (
                        <p className="text-wrapper-61">
                          AAVE token holders decide which assets are listed and
                          <br />
                          steer protocol development.
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  className="background-15"
                  style={{
                    backgroundColor:
                      screenWidth < 991
                        ? "#fcfcfb"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "var(--aavecomalabaster)"
                          : undefined,
                    flexDirection: screenWidth < 991 ? "column" : undefined,
                    gap:
                      screenWidth < 991
                        ? "8px"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "40px"
                          : undefined,
                    justifyContent:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "center"
                        : undefined,
                    padding:
                      screenWidth < 991
                        ? "28px 32px"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "32px"
                          : undefined,
                  }}
                >
                  <div
                    className="container-68"
                    style={{
                      alignSelf: screenWidth < 991 ? "stretch" : undefined,
                      flex: screenWidth < 991 ? "0 0 auto" : undefined,
                      width:
                        screenWidth < 991
                          ? "100%"
                          : screenWidth >= 991 && screenWidth < 1440
                            ? "395.5px"
                            : screenWidth >= 1440
                              ? "441px"
                              : undefined,
                    }}
                  >
                    <Component1507 className="component-10" />
                    <div className="heading-11">
                      <div className="text-wrapper-24">Composability</div>
                    </div>
                  </div>

                  <div
                    className="integrating-aave-s-wrapper"
                    style={{
                      alignSelf: screenWidth < 991 ? "stretch" : undefined,
                      flex: screenWidth < 991 ? "0 0 auto" : undefined,
                      width:
                        screenWidth < 991
                          ? "100%"
                          : screenWidth >= 991 && screenWidth < 1440
                            ? "395.5px"
                            : screenWidth >= 1440
                              ? "441px"
                              : undefined,
                    }}
                  >
                    <div
                      className="integrating-aave-s"
                      style={{
                        alignSelf: screenWidth < 991 ? "stretch" : undefined,
                        marginRight:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "-0.50px"
                            : undefined,
                        width:
                          screenWidth >= 1440 ||
                          (screenWidth >= 991 && screenWidth < 1440)
                            ? "fit-content"
                            : undefined,
                      }}
                    >
                      {screenWidth < 991 && (
                        <p className="text-wrapper-61">
                          Integrating Aave&#39;s liquidity pools and interest
                          rate
                          <br />
                          mechanisms enables the creation of diverse
                          <br />
                          products and applications
                        </p>
                      )}

                      {screenWidth >= 991 && screenWidth < 1440 && (
                        <p className="text-wrapper-61">
                          Integrating Aave&#39;s liquidity pools and interest
                          rate
                          <br />
                          mechanisms enables the creation of diverse products
                          <br />
                          and applications
                        </p>
                      )}

                      {screenWidth >= 1440 && (
                        <p className="text-wrapper-61">
                          Integrating Aave&#39;s liquidity pools and interest
                          rate
                          <br />
                          mechanisms enables the creation of diverse products
                          and
                          <br />
                          applications
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="section-5"
            style={{
              padding:
                screenWidth < 991
                  ? "48px 20px"
                  : screenWidth >= 991 && screenWidth < 1440
                    ? "100px 48px"
                    : screenWidth >= 1440
                      ? "100px 227px"
                      : undefined,
            }}
          >
            <div
              className="container-69"
              style={{
                width:
                  screenWidth < 991
                    ? "438px"
                    : screenWidth >= 991 && screenWidth < 1440
                      ? "895px"
                      : screenWidth >= 1440
                        ? "986px"
                        : undefined,
              }}
            >
              <div
                className="container-70"
                style={{
                  gap:
                    screenWidth < 991
                      ? "11.4px"
                      : screenWidth >= 1440 ||
                          (screenWidth >= 991 && screenWidth < 1440)
                        ? "12px"
                        : undefined,
                  padding:
                    screenWidth >= 1440 ||
                    (screenWidth >= 991 && screenWidth < 1440)
                      ? "0px 24px"
                      : undefined,
                }}
              >
                <div className="heading-12">
                  <div className="text-wrapper-25">GHO</div>
                </div>

                <div
                  className="GHO-is-the-only-wrapper"
                  style={{
                    maxWidth:
                      screenWidth < 991
                        ? "432px"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "480px"
                          : undefined,
                    padding: screenWidth < 991 ? "0px 0px 0.64px" : undefined,
                  }}
                >
                  <p
                    className="GHO-is-the-only"
                    style={{
                      fontSize:
                        screenWidth < 991
                          ? "18px"
                          : screenWidth >= 1440 ||
                              (screenWidth >= 991 && screenWidth < 1440)
                            ? "20px"
                            : undefined,
                      lineHeight:
                        screenWidth < 991
                          ? "24.3px"
                          : screenWidth >= 1440 ||
                              (screenWidth >= 991 && screenWidth < 1440)
                            ? "27px"
                            : undefined,
                    }}
                  >
                    GHO is the only decentralised, overcollateralised
                    <br />
                    stablecoin native to the Aave Protocol.
                  </p>
                </div>

                <a
                  className="component-11"
                  style={{
                    padding:
                      screenWidth < 991
                        ? "20.1px 0px 8px"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "19.5px 0px 8px"
                          : undefined,
                  }}
                  href="https://aave.com/gho"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="horizontal-divider-3" />

                  <a
                    className="text-3"
                    href="https://aave.com/gho"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Learn More
                  </a>

                  <Component1548 className="component-1-548" color="#201D1D" />
                </a>
              </div>

              <div
                className="container-71"
                style={{
                  alignItems: screenWidth < 991 ? "flex-start" : undefined,
                  display: screenWidth < 991 ? "flex" : undefined,
                  flex: screenWidth < 991 ? "0 0 auto" : undefined,
                  flexDirection: screenWidth < 991 ? "column" : undefined,
                  gap: screenWidth < 991 ? "24px" : undefined,
                  height:
                    screenWidth >= 991 && screenWidth < 1440
                      ? "507.75px"
                      : screenWidth >= 1440
                        ? "539.75px"
                        : undefined,
                  justifyContent: screenWidth < 991 ? "center" : undefined,
                }}
              >
                <div
                  className="background-16"
                  style={{
                    alignSelf: screenWidth < 991 ? "stretch" : undefined,
                    backgroundColor:
                      screenWidth < 991
                        ? "#fcfcfb"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "var(--aavecomalabaster)"
                          : undefined,
                    height:
                      screenWidth < 991
                        ? "336.92px"
                        : screenWidth >= 991 && screenWidth < 1440
                          ? "508px"
                          : screenWidth >= 1440
                            ? "540px"
                            : undefined,
                    left:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "0"
                        : undefined,
                    position:
                      screenWidth < 991
                        ? "relative"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "absolute"
                          : undefined,
                    top:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "0"
                        : undefined,
                    width:
                      screenWidth < 991
                        ? "100%"
                        : screenWidth >= 991 && screenWidth < 1440
                          ? "544px"
                          : screenWidth >= 1440
                            ? "601px"
                            : undefined,
                  }}
                >
                  {screenWidth < 991 && (
                    <Component1428 className="component-12" />
                  )}

                  {screenWidth >= 991 && screenWidth < 1440 && (
                    <Component1615 className="component-12" />
                  )}

                  {screenWidth >= 1440 && (
                    <Component1610 className="component-12" />
                  )}
                </div>

                <div
                  className="background-17"
                  style={{
                    alignSelf: screenWidth < 991 ? "stretch" : undefined,
                    backgroundColor:
                      screenWidth < 991
                        ? "#fcfcfb"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "var(--aavecomalabaster)"
                          : undefined,
                    height:
                      screenWidth < 991
                        ? "294.09px"
                        : screenWidth >= 991 && screenWidth < 1440
                          ? "242px"
                          : screenWidth >= 1440
                            ? "258px"
                            : undefined,
                    left:
                      screenWidth >= 991 && screenWidth < 1440
                        ? "568px"
                        : screenWidth >= 1440
                          ? "625px"
                          : undefined,
                    position:
                      screenWidth < 991
                        ? "relative"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "absolute"
                          : undefined,
                    top:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "0"
                        : undefined,
                    width:
                      screenWidth < 991
                        ? "100%"
                        : screenWidth >= 991 && screenWidth < 1440
                          ? "327px"
                          : screenWidth >= 1440
                            ? "361px"
                            : undefined,
                  }}
                >
                  <div className="container-72">
                    <div className="container-73">
                      <div className="container-28">
                        <div className="text-wrapper-16">245</div>
                      </div>
                    </div>

                    <div className="text-wrapper-15">%</div>
                  </div>

                  <div className="container-74">
                    <div className="text-wrapper-26">Collateralisation</div>

                    <Component1517 className="component-1-517" />
                    <div className="text-wrapper-27">30 Day Avg</div>
                  </div>

                  {screenWidth < 991 && (
                    <Component1421 className="component-1-421" />
                  )}

                  {screenWidth >= 991 && screenWidth < 1440 && (
                    <Component1607 className="component-1-607" />
                  )}

                  {screenWidth >= 1440 && (
                    <Component1598 className="component-1-598" />
                  )}
                </div>

                <div
                  className="background-18"
                  style={{
                    alignSelf: screenWidth < 991 ? "stretch" : undefined,
                    backgroundColor:
                      screenWidth < 991
                        ? "#fcfcfb"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "var(--aavecomalabaster)"
                          : undefined,
                    height:
                      screenWidth < 991
                        ? "234.94px"
                        : screenWidth >= 991 && screenWidth < 1440
                          ? "242px"
                          : screenWidth >= 1440
                            ? "258px"
                            : undefined,
                    left:
                      screenWidth >= 991 && screenWidth < 1440
                        ? "568px"
                        : screenWidth >= 1440
                          ? "625px"
                          : undefined,
                    position:
                      screenWidth < 991
                        ? "relative"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "absolute"
                          : undefined,
                    top:
                      screenWidth >= 991 && screenWidth < 1440
                        ? "266px"
                        : screenWidth >= 1440
                          ? "282px"
                          : undefined,
                    width:
                      screenWidth < 991
                        ? "100%"
                        : screenWidth >= 991 && screenWidth < 1440
                          ? "327px"
                          : screenWidth >= 1440
                            ? "361px"
                            : undefined,
                  }}
                >
                  {((screenWidth >= 991 && screenWidth < 1440) ||
                    screenWidth < 991) && (
                    <div className="container-75">
                      <div className="text-wrapper-15">+</div>

                      <div
                        className="container-76"
                        style={{
                          marginLeft:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "-0.01px"
                              : screenWidth < 991
                                ? "-1.78e-15px"
                                : undefined,
                        }}
                      >
                        <div className="container-28">
                          <div className="text-wrapper-16">133,903,228</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {screenWidth >= 1440 && (
                    <div className="container-77">
                      <div className="text-wrapper-15">+</div>

                      <div className="container-78">
                        <div className="container-28">
                          <div className="text-wrapper-16">133,903,228</div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="container-74">
                    <div className="text-wrapper-26">GHO Minted</div>

                    <Component1517 className="component-1-517" />
                    <div className="text-wrapper-27">1 Yr</div>
                  </div>

                  {screenWidth >= 1440 && (
                    <Component1508 className="component-1-508" />
                  )}

                  {screenWidth < 991 && (
                    <Component1409 className="component-1-409" />
                  )}

                  {screenWidth >= 991 && screenWidth < 1440 && (
                    <Component1579 className="component-1-579" />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div
            className="section-6"
            style={{
              padding:
                screenWidth < 991
                  ? "48px 20px"
                  : screenWidth >= 991 && screenWidth < 1440
                    ? "100px 48px"
                    : screenWidth >= 1440
                      ? "100px 227px"
                      : undefined,
            }}
          >
            <div
              className="container-79"
              style={{
                gap:
                  screenWidth < 991
                    ? "71.99px"
                    : screenWidth >= 1440 ||
                        (screenWidth >= 991 && screenWidth < 1440)
                      ? "72px"
                      : undefined,
                width:
                  screenWidth < 991
                    ? "438px"
                    : screenWidth >= 991 && screenWidth < 1440
                      ? "895px"
                      : screenWidth >= 1440
                        ? "986px"
                        : undefined,
              }}
            >
              <div
                className="container-80"
                style={{
                  gap:
                    screenWidth < 991
                      ? "11.35px"
                      : screenWidth >= 1440 ||
                          (screenWidth >= 991 && screenWidth < 1440)
                        ? "12px"
                        : undefined,
                  padding:
                    screenWidth >= 1440 ||
                    (screenWidth >= 991 && screenWidth < 1440)
                      ? "0px 24px"
                      : undefined,
                }}
              >
                <div className="heading-13">
                  <div className="text-wrapper-14">Aave everywhere.</div>
                </div>

                <div
                  className="container-81"
                  style={{
                    padding: screenWidth < 991 ? "0px 0px 0.65px" : undefined,
                  }}
                >
                  <p
                    className="text-wrapper-28"
                    style={{
                      fontSize:
                        screenWidth < 991
                          ? "18px"
                          : screenWidth >= 1440 ||
                              (screenWidth >= 991 && screenWidth < 1440)
                            ? "20px"
                            : undefined,
                      lineHeight:
                        screenWidth < 991
                          ? "24.3px"
                          : screenWidth >= 1440 ||
                              (screenWidth >= 991 && screenWidth < 1440)
                            ? "27px"
                            : undefined,
                    }}
                  >
                    Join Aave’s growing constellation of builders.
                  </p>
                </div>
              </div>

              <div
                className="container-82"
                style={{
                  flexDirection: screenWidth < 991 ? "column" : undefined,
                  padding:
                    screenWidth >= 1440 ? "0px 0.01px 0px 0px" : undefined,
                }}
              >
                <div
                  className="container-83"
                  style={{
                    alignItems: screenWidth < 991 ? "flex-start" : undefined,
                    display: screenWidth < 991 ? "flex" : undefined,
                    flexDirection: screenWidth < 991 ? "column" : undefined,
                    height: screenWidth < 991 ? "262.81px" : undefined,
                    width:
                      screenWidth < 991
                        ? "100%"
                        : screenWidth >= 991 && screenWidth < 1440
                          ? "292.33px"
                          : screenWidth >= 1440
                            ? "322.66px"
                            : undefined,
                  }}
                >
                  {screenWidth < 991 && (
                    <div className="container-84">
                      <Component1467 className="component-1-467" />
                      <div className="container-85">
                        <Component1407 className="component-1-407" />
                      </div>
                    </div>
                  )}

                  {(screenWidth >= 1440 ||
                    (screenWidth >= 991 && screenWidth < 1440)) && (
                    <>
                      <div
                        className="link-wrapper"
                        style={{
                          height:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "91px"
                              : screenWidth >= 1440
                                ? "102px"
                                : undefined,
                          width:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "91px"
                              : screenWidth >= 1440
                                ? "102px"
                                : undefined,
                        }}
                      >
                        <a
                          className="link"
                          href="https://www.aavechan.com/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-86">
                            <Component1535
                              className={`${screenWidth >= 991 && screenWidth < 1440 && "component-13"} ${screenWidth >= 1440 && "component-14"}`}
                            />
                            <div className="container-85">
                              <Component1519
                                className={`${screenWidth >= 991 && screenWidth < 1440 && "component-13"} ${screenWidth >= 1440 && "component-14"}`}
                              />
                            </div>
                          </div>
                        </a>
                      </div>

                      <div
                        className="container-87"
                        style={{
                          height:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "91px"
                              : screenWidth >= 1440
                                ? "102px"
                                : undefined,
                          left:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "100px"
                              : screenWidth >= 1440
                                ? "111px"
                                : undefined,
                          width:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "91px"
                              : screenWidth >= 1440
                                ? "102px"
                                : undefined,
                        }}
                      >
                        <a
                          className="link-2"
                          href="https://paladin.vote/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-86">
                            <Component1535
                              className={`${screenWidth >= 991 && screenWidth < 1440 && "component-13"} ${screenWidth >= 1440 && "component-14"}`}
                            />
                            <div className="container-85">
                              {screenWidth >= 991 && screenWidth < 1440 && (
                                <Component1569 className="component-13" />
                              )}

                              {screenWidth >= 1440 && (
                                <Component1501 className="component-14" />
                              )}
                            </div>
                          </div>
                        </a>
                      </div>

                      <div
                        className="container-88"
                        style={{
                          height:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "91px"
                              : screenWidth >= 1440
                                ? "102px"
                                : undefined,
                          left:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "201px"
                              : screenWidth >= 1440
                                ? "221px"
                                : undefined,
                          width:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "91px"
                              : screenWidth >= 1440
                                ? "102px"
                                : undefined,
                        }}
                      >
                        <a
                          className="link-3"
                          href="https://www.tokenlogic.xyz/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-86">
                            <Component1535
                              className={`${screenWidth >= 991 && screenWidth < 1440 && "component-1-561"} ${screenWidth >= 1440 && "component-1-364"}`}
                            />
                            <div className="container-85">
                              <Component1592
                                className={`${screenWidth >= 991 && screenWidth < 1440 && "component-1-561"} ${screenWidth >= 1440 && "component-1-364"}`}
                              />
                            </div>
                          </div>
                        </a>
                      </div>

                      <div
                        className="container-89"
                        style={{
                          height:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "91px"
                              : screenWidth >= 1440
                                ? "102px"
                                : undefined,
                          top:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "100px"
                              : screenWidth >= 1440
                                ? "111px"
                                : undefined,
                          width:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "91px"
                              : screenWidth >= 1440
                                ? "102px"
                                : undefined,
                        }}
                      >
                        <a
                          className="link-4"
                          href="https://tokenterminal.com/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-86">
                            <Component1535
                              className={`${screenWidth >= 991 && screenWidth < 1440 && "component-1-571"} ${screenWidth >= 1440 && "component-14"}`}
                            />
                            <div className="container-85">
                              <Component1558
                                className={`${screenWidth >= 991 && screenWidth < 1440 && "component-1-571"} ${screenWidth >= 1440 && "component-14"}`}
                              />
                            </div>
                          </div>
                        </a>
                      </div>

                      <div
                        className="container-90"
                        style={{
                          height:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "91px"
                              : screenWidth >= 1440
                                ? "102px"
                                : undefined,
                          left:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "100px"
                              : screenWidth >= 1440
                                ? "111px"
                                : undefined,
                          top:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "100px"
                              : screenWidth >= 1440
                                ? "111px"
                                : undefined,
                          width:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "91px"
                              : screenWidth >= 1440
                                ? "102px"
                                : undefined,
                        }}
                      >
                        <a
                          className="link-5"
                          href="https://instadapp.io/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-86">
                            <Component1535
                              className={`${screenWidth >= 991 && screenWidth < 1440 && "component-13"} ${screenWidth >= 1440 && "component-14"}`}
                            />
                            <div className="container-85">
                              <Component1376
                                className={`${screenWidth >= 991 && screenWidth < 1440 && "component-13"} ${screenWidth >= 1440 && "component-14"}`}
                              />
                            </div>
                          </div>
                        </a>
                      </div>

                      <div
                        className="container-91"
                        style={{
                          height:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "91px"
                              : screenWidth >= 1440
                                ? "102px"
                                : undefined,
                          left:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "201px"
                              : screenWidth >= 1440
                                ? "221px"
                                : undefined,
                          top:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "100px"
                              : screenWidth >= 1440
                                ? "111px"
                                : undefined,
                          width:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "91px"
                              : screenWidth >= 1440
                                ? "102px"
                                : undefined,
                        }}
                      >
                        <a
                          className="link-6"
                          style={{
                            marginBottom:
                              screenWidth >= 991 && screenWidth < 1440
                                ? "-0.01px"
                                : undefined,
                          }}
                          href="https://www.skatechain.org/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-86">
                            <Component1535
                              className={`${screenWidth >= 991 && screenWidth < 1440 && "component-1-542"} ${screenWidth >= 1440 && "component-14"}`}
                            />
                            <div className="container-85">
                              <Component1378
                                className={`${screenWidth >= 991 && screenWidth < 1440 && "component-1-542"} ${screenWidth >= 1440 && "component-14"}`}
                              />
                            </div>
                          </div>
                        </a>
                      </div>

                      <div
                        className="container-92"
                        style={{
                          height:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "91px"
                              : screenWidth >= 1440
                                ? "102px"
                                : undefined,
                          top:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "201px"
                              : screenWidth >= 1440
                                ? "221px"
                                : undefined,
                          width:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "91px"
                              : screenWidth >= 1440
                                ? "102px"
                                : undefined,
                        }}
                      >
                        <a
                          className="link-7"
                          href="https://messari.io/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-86">
                            <Component1535
                              className={`${screenWidth >= 991 && screenWidth < 1440 && "component-13"} ${screenWidth >= 1440 && "component-14"}`}
                            />
                            <div className="container-85">
                              <Component1570
                                className={`${screenWidth >= 991 && screenWidth < 1440 && "component-13"} ${screenWidth >= 1440 && "component-14"}`}
                              />
                            </div>
                          </div>
                        </a>
                      </div>

                      <div
                        className="container-93"
                        style={{
                          height:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "91px"
                              : screenWidth >= 1440
                                ? "102px"
                                : undefined,
                          left:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "100px"
                              : screenWidth >= 1440
                                ? "111px"
                                : undefined,
                          top:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "201px"
                              : screenWidth >= 1440
                                ? "221px"
                                : undefined,
                          width:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "91px"
                              : screenWidth >= 1440
                                ? "102px"
                                : undefined,
                        }}
                      >
                        <a
                          className="link-8"
                          href="https://dune.com/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-86">
                            <Component1535
                              className={`${screenWidth >= 991 && screenWidth < 1440 && "component-13"} ${screenWidth >= 1440 && "component-14"}`}
                            />
                            <div className="container-85">
                              {screenWidth >= 991 && screenWidth < 1440 && (
                                <Component1559 className="component-13" />
                              )}

                              {screenWidth >= 1440 && (
                                <Component1495 className="component-14" />
                              )}
                            </div>
                          </div>
                        </a>
                      </div>

                      <div
                        className="container-94"
                        style={{
                          height:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "91px"
                              : screenWidth >= 1440
                                ? "102px"
                                : undefined,
                          left:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "201px"
                              : screenWidth >= 1440
                                ? "221px"
                                : undefined,
                          top:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "201px"
                              : screenWidth >= 1440
                                ? "221px"
                                : undefined,
                          width:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "91px"
                              : screenWidth >= 1440
                                ? "102px"
                                : undefined,
                        }}
                      >
                        <a
                          className="link-9"
                          style={{
                            marginBottom:
                              screenWidth >= 1440 ? "-0.01px" : undefined,
                          }}
                          href="https://www.notional.finance/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-86">
                            <Component1535
                              className={`${screenWidth >= 991 && screenWidth < 1440 && "component-1-542"} ${screenWidth >= 1440 && "component-1-364"}`}
                            />
                            <div className="container-85">
                              <Component1583
                                className={`${screenWidth >= 991 && screenWidth < 1440 && "component-1-542"} ${screenWidth >= 1440 && "component-1-364"}`}
                              />
                            </div>
                          </div>
                        </a>
                      </div>
                    </>
                  )}
                </div>

                <div
                  className="container-95"
                  style={{
                    alignItems:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "flex-start"
                        : undefined,
                    display:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "flex"
                        : undefined,
                    flexDirection:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "column"
                        : undefined,
                    height: screenWidth < 991 ? "289px" : undefined,
                    width:
                      screenWidth < 991
                        ? "100%"
                        : screenWidth >= 991 && screenWidth < 1440
                          ? "292.33px"
                          : screenWidth >= 1440
                            ? "322.67px"
                            : undefined,
                  }}
                >
                  {screenWidth < 991 && (
                    <>
                      <div className="container-96">
                        <a
                          className="link-10"
                          href="https://chaoslabs.xyz/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-86">
                            <Component1535 className="component-15" />
                            <div className="container-85">
                              <Component1393 className="component-15" />
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="container-97">
                        <a
                          className="link-11"
                          href="https://bgdlabs.com/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-86">
                            <Component1535 className="component-16" />
                            <div className="container-85">
                              <Component1394 className="component-16" />
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="container-98">
                        <a
                          className="link-12"
                          href="https://defisaver.com/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-86">
                            <Component1535 className="component-15" />
                            <div className="container-85">
                              <Component1364 className="component-15" />
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="container-99">
                        <a
                          className="link-13"
                          href="https://www.spectra.finance/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-86">
                            <Component1535 className="component-16" />
                            <div className="container-85">
                              <Component1403 className="component-16" />
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="container-100">
                        <a
                          className="link-14"
                          href="https://idle.finance/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-86">
                            <Component1535 className="component-15" />
                            <div className="container-85">
                              <Component1537 className="component-15" />
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="container-101">
                        <a
                          className="link-15"
                          href="https://thegraph.com/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-86">
                            <Component1535 className="component-16" />
                            <div className="container-85">
                              <Component1476 className="component-16" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </>
                  )}

                  {(screenWidth >= 1440 ||
                    (screenWidth >= 991 && screenWidth < 1440)) && (
                    <div className="container-102">
                      <Component1467
                        className={`${screenWidth >= 991 && screenWidth < 1440 && "class-6"} ${screenWidth >= 1440 && "class-7"}`}
                      />
                      <div className="container-85">
                        <Component1574
                          className={`${screenWidth >= 991 && screenWidth < 1440 && "class-6"} ${screenWidth >= 1440 && "class-7"}`}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className="container-103"
                  style={{
                    height: screenWidth < 991 ? "289px" : undefined,
                    width:
                      screenWidth < 991
                        ? "100%"
                        : screenWidth >= 991 && screenWidth < 1440
                          ? "292.34px"
                          : screenWidth >= 1440
                            ? "322.66px"
                            : undefined,
                  }}
                >
                  <div
                    className="container-104"
                    style={{
                      height:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "91px"
                          : screenWidth >= 1440
                            ? "102px"
                            : screenWidth < 991
                              ? "140px"
                              : undefined,
                      width:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "91px"
                          : screenWidth >= 1440
                            ? "102px"
                            : screenWidth < 991
                              ? "140px"
                              : undefined,
                    }}
                  >
                    <a
                      className="link-16"
                      href="https://chaoslabs.xyz/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="container-86">
                        <Component1535
                          className={`${screenWidth >= 991 && screenWidth < 1440 && "component-13"} ${screenWidth >= 1440 && "component-14"} ${screenWidth < 991 && "component-17"}`}
                        />
                        <div className="container-85">
                          {screenWidth >= 991 && screenWidth < 1440 && (
                            <Component1560 className="component-13" />
                          )}

                          {screenWidth >= 1440 && (
                            <Component1496 className="component-14" />
                          )}

                          {screenWidth < 991 && (
                            <Component1519 className="component-17" />
                          )}
                        </div>
                      </div>
                    </a>
                  </div>

                  <div
                    className="container-105"
                    style={{
                      height:
                        screenWidth < 991
                          ? "140px"
                          : screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth >= 1440
                              ? "102px"
                              : undefined,
                      left:
                        screenWidth < 991
                          ? "149px"
                          : screenWidth >= 991 && screenWidth < 1440
                            ? "100px"
                            : screenWidth >= 1440
                              ? "111px"
                              : undefined,
                      width:
                        screenWidth < 991
                          ? "140px"
                          : screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth >= 1440
                              ? "102px"
                              : undefined,
                    }}
                  >
                    <a
                      className="link-17"
                      href="https://paladin.vote/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="container-86">
                        <Component1535
                          className={`${screenWidth < 991 && "component-16"} ${screenWidth >= 991 && screenWidth < 1440 && "component-1-561"} ${screenWidth >= 1440 && "component-14"}`}
                        />
                        <div className="container-85">
                          {screenWidth < 991 && (
                            <Component1404 className="component-16" />
                          )}

                          {screenWidth >= 991 && screenWidth < 1440 && (
                            <Component1561 className="component-1-561" />
                          )}

                          {screenWidth >= 1440 && (
                            <Component1497 className="component-14" />
                          )}
                        </div>
                      </div>
                    </a>
                  </div>

                  <div
                    className="container-106"
                    style={{
                      height:
                        screenWidth < 991
                          ? "140px"
                          : screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth >= 1440
                              ? "102px"
                              : undefined,
                      left:
                        screenWidth < 991
                          ? "298px"
                          : screenWidth >= 991 && screenWidth < 1440
                            ? "201px"
                            : screenWidth >= 1440
                              ? "221px"
                              : undefined,
                      width:
                        screenWidth < 991
                          ? "140px"
                          : screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth >= 1440
                              ? "102px"
                              : undefined,
                    }}
                  >
                    <a
                      className="link-18"
                      href="https://www.tokenlogic.xyz/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="container-86">
                        <Component1535
                          className={`${screenWidth < 991 && "component-17"} ${screenWidth >= 991 && screenWidth < 1440 && "component-13"} ${screenWidth >= 1440 && "component-1-364"}`}
                        />
                        <div className="container-85">
                          {screenWidth < 991 && (
                            <Component1592 className="component-17" />
                          )}

                          {screenWidth >= 991 && screenWidth < 1440 && (
                            <Component1534 className="component-13" />
                          )}

                          {screenWidth >= 1440 && (
                            <Component1364 className="component-1-364" />
                          )}
                        </div>
                      </div>
                    </a>
                  </div>

                  <div
                    className="container-107"
                    style={{
                      height:
                        screenWidth < 991
                          ? "140px"
                          : screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth >= 1440
                              ? "102px"
                              : undefined,
                      top:
                        screenWidth < 991
                          ? "149px"
                          : screenWidth >= 991 && screenWidth < 1440
                            ? "100px"
                            : screenWidth >= 1440
                              ? "111px"
                              : undefined,
                      width:
                        screenWidth < 991
                          ? "140px"
                          : screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth >= 1440
                              ? "102px"
                              : undefined,
                    }}
                  >
                    <a
                      className="link-19"
                      href="https://tokenterminal.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="container-86">
                        <Component1535
                          className={`${screenWidth < 991 && "component-16"} ${screenWidth >= 991 && screenWidth < 1440 && "component-1-571"} ${screenWidth >= 1440 && "component-14"}`}
                        />
                        <div className="container-85">
                          {screenWidth < 991 && (
                            <Component1558 className="component-16" />
                          )}

                          {screenWidth >= 991 && screenWidth < 1440 && (
                            <Component1571 className="component-1-571" />
                          )}

                          {screenWidth >= 1440 && (
                            <Component1503 className="component-14" />
                          )}
                        </div>
                      </div>
                    </a>
                  </div>

                  <div
                    className="container-108"
                    style={{
                      height:
                        screenWidth < 991
                          ? "140px"
                          : screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth >= 1440
                              ? "102px"
                              : undefined,
                      left:
                        screenWidth < 991
                          ? "149px"
                          : screenWidth >= 991 && screenWidth < 1440
                            ? "100px"
                            : screenWidth >= 1440
                              ? "111px"
                              : undefined,
                      top:
                        screenWidth < 991
                          ? "149px"
                          : screenWidth >= 991 && screenWidth < 1440
                            ? "100px"
                            : screenWidth >= 1440
                              ? "111px"
                              : undefined,
                      width:
                        screenWidth < 991
                          ? "140px"
                          : screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth >= 1440
                              ? "102px"
                              : undefined,
                    }}
                  >
                    <a
                      className="link-20"
                      href="https://instadapp.io/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="container-86">
                        <Component1535
                          className={`${screenWidth < 991 && "component-17"} ${screenWidth >= 991 && screenWidth < 1440 && "component-1-561"} ${screenWidth >= 1440 && "component-14"}`}
                        />
                        <div className="container-85">
                          {screenWidth < 991 && (
                            <Component1376 className="component-17" />
                          )}

                          {(screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)) && (
                            <Component1537
                              className={`${screenWidth >= 991 && screenWidth < 1440 && "component-1-561"} ${screenWidth >= 1440 && "component-14"}`}
                            />
                          )}
                        </div>
                      </div>
                    </a>
                  </div>

                  <div
                    className="container-109"
                    style={{
                      height:
                        screenWidth < 991
                          ? "140px"
                          : screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth >= 1440
                              ? "102px"
                              : undefined,
                      left:
                        screenWidth < 991
                          ? "298px"
                          : screenWidth >= 991 && screenWidth < 1440
                            ? "201px"
                            : screenWidth >= 1440
                              ? "221px"
                              : undefined,
                      top:
                        screenWidth < 991
                          ? "149px"
                          : screenWidth >= 991 && screenWidth < 1440
                            ? "100px"
                            : screenWidth >= 1440
                              ? "111px"
                              : undefined,
                      width:
                        screenWidth < 991
                          ? "140px"
                          : screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth >= 1440
                              ? "102px"
                              : undefined,
                    }}
                  >
                    <a
                      className="link-21"
                      href="https://www.skatechain.org/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="container-86">
                        <Component1535
                          className={`${screenWidth < 991 && "component-16"} ${screenWidth >= 991 && screenWidth < 1440 && "component-13"} ${screenWidth >= 1440 && "component-14"}`}
                        />
                        <div className="container-85">
                          {screenWidth < 991 && (
                            <Component1378 className="component-16" />
                          )}

                          {(screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)) && (
                            <Component1476
                              className={`${screenWidth >= 991 && screenWidth < 1440 && "component-13"} ${screenWidth >= 1440 && "component-14"}`}
                            />
                          )}
                        </div>
                      </div>
                    </a>
                  </div>

                  {(screenWidth >= 1440 ||
                    (screenWidth >= 991 && screenWidth < 1440)) && (
                    <>
                      <div
                        className="container-110"
                        style={{
                          height:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "91px"
                              : screenWidth >= 1440
                                ? "102px"
                                : undefined,
                          top:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "201px"
                              : screenWidth >= 1440
                                ? "221px"
                                : undefined,
                          width:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "91px"
                              : screenWidth >= 1440
                                ? "102px"
                                : undefined,
                        }}
                      >
                        <a
                          className="link-22"
                          href="https://defillama.com/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-86">
                            <Component1535
                              className={`${screenWidth >= 991 && screenWidth < 1440 && "component-13"} ${screenWidth >= 1440 && "component-14"}`}
                            />
                            <div className="container-85">
                              {screenWidth >= 991 && screenWidth < 1440 && (
                                <Component1600 className="component-13" />
                              )}

                              {screenWidth >= 1440 && (
                                <Component1585 className="component-14" />
                              )}
                            </div>
                          </div>
                        </a>
                      </div>

                      <div
                        className="container-111"
                        style={{
                          height:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "91px"
                              : screenWidth >= 1440
                                ? "102px"
                                : undefined,
                          left:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "100px"
                              : screenWidth >= 1440
                                ? "111px"
                                : undefined,
                          top:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "201px"
                              : screenWidth >= 1440
                                ? "221px"
                                : undefined,
                          width:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "91px"
                              : screenWidth >= 1440
                                ? "102px"
                                : undefined,
                        }}
                      >
                        <a
                          className="link-23"
                          href="https://www.brahma.fi/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-86">
                            <Component1535
                              className={`${screenWidth >= 991 && screenWidth < 1440 && "component-1-542"} ${screenWidth >= 1440 && "component-14"}`}
                            />
                            <div className="container-85">
                              {screenWidth >= 991 && screenWidth < 1440 && (
                                <Component1542 className="component-1-542" />
                              )}

                              {screenWidth >= 1440 && (
                                <Component1479 className="component-14" />
                              )}
                            </div>
                          </div>
                        </a>
                      </div>

                      <div
                        className="container-112"
                        style={{
                          height:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "91px"
                              : screenWidth >= 1440
                                ? "102px"
                                : undefined,
                          left:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "201px"
                              : screenWidth >= 1440
                                ? "221px"
                                : undefined,
                          top:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "201px"
                              : screenWidth >= 1440
                                ? "221px"
                                : undefined,
                          width:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "91px"
                              : screenWidth >= 1440
                                ? "102px"
                                : undefined,
                        }}
                      >
                        <a
                          className="link-24"
                          style={{
                            marginBottom:
                              screenWidth >= 1440 ? "-0.01px" : undefined,
                          }}
                          href="https://symbiosis.finance/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-86">
                            <Component1535
                              className={`${screenWidth >= 991 && screenWidth < 1440 && "component-13"} ${screenWidth >= 1440 && "component-1-364"}`}
                            />
                            <div className="container-85">
                              <Component1611
                                className={`${screenWidth >= 991 && screenWidth < 1440 && "component-13"} ${screenWidth >= 1440 && "component-1-364"}`}
                              />
                            </div>
                          </div>
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div
            className="section-7"
            style={{
              padding:
                screenWidth >= 991 && screenWidth < 1440
                  ? "100px 48px"
                  : screenWidth >= 1440
                    ? "100px 227px"
                    : screenWidth < 991
                      ? "48px 20px"
                      : undefined,
            }}
          >
            <div
              className="container-113"
              style={{
                gap: screenWidth < 991 ? "1.42e-13px" : undefined,
                width:
                  screenWidth >= 991 && screenWidth < 1440
                    ? "895px"
                    : screenWidth >= 1440
                      ? "986px"
                      : screenWidth < 991
                        ? "438px"
                        : undefined,
              }}
            >
              <div
                className="container-114"
                style={{
                  gap:
                    screenWidth >= 1440 ||
                    (screenWidth >= 991 && screenWidth < 1440)
                      ? "12px"
                      : screenWidth < 991
                        ? "11.35px"
                        : undefined,
                  padding:
                    screenWidth >= 1440 ||
                    (screenWidth >= 991 && screenWidth < 1440)
                      ? "0px 24px"
                      : undefined,
                }}
              >
                <div className="heading-14">
                  <div className="text-wrapper-14">Trusted by the best.</div>
                </div>

                <div
                  className="aave-protocol-has-wrapper"
                  style={{
                    padding: screenWidth < 991 ? "0px 0px 0.64px" : undefined,
                  }}
                >
                  <div
                    className="aave-protocol-has"
                    style={{
                      fontSize:
                        screenWidth >= 1440 ||
                        (screenWidth >= 991 && screenWidth < 1440)
                          ? "20px"
                          : screenWidth < 991
                            ? "18px"
                            : undefined,
                      lineHeight:
                        screenWidth >= 1440 ||
                        (screenWidth >= 991 && screenWidth < 1440)
                          ? "27px"
                          : screenWidth < 991
                            ? "24.3px"
                            : undefined,
                    }}
                  >
                    {(screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)) && (
                      <p className="text-wrapper-61">
                        Aave Protocol has been trusted by leading institutions
                        and companies.
                      </p>
                    )}

                    {screenWidth < 991 && (
                      <p className="text-wrapper-61">
                        Aave Protocol has been trusted by leading institutions
                        <br />
                        and companies.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="container-115">
                <div
                  className="container-222"
                  style={{
                    background:
                      screenWidth < 991
                        ? "linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.74) 19%, rgba(255, 255, 255, 0.54) 34%, rgba(255, 255, 255, 0.38) 47%, rgba(255, 255, 255, 0.28) 56.5%, rgba(255, 255, 255, 0.19) 65%, rgba(255, 255, 255, 0.12) 73%, rgba(255, 255, 255, 0.08) 80.2%, rgba(255, 255, 255, 0.04) 86.1%, rgba(255, 255, 255, 0.02) 91%, rgba(255, 255, 255, 0.01) 95.2%, rgba(255, 255, 255, 0) 98.2%, rgba(255, 255, 255, 0) 100%)"
                        : undefined,
                    height:
                      screenWidth >= 991 && screenWidth < 1440
                        ? "117.89px"
                        : screenWidth >= 1440
                          ? "123.58px"
                          : screenWidth < 991
                            ? "126px"
                            : undefined,
                    left: screenWidth < 991 ? "0" : undefined,
                    marginRight:
                      screenWidth >= 991 && screenWidth < 1440
                        ? "-895.00px"
                        : screenWidth >= 1440
                          ? "-986.00px"
                          : undefined,
                    overflow:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "hidden"
                        : undefined,
                    position:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "relative"
                        : screenWidth < 991
                          ? "absolute"
                          : undefined,
                    top: screenWidth < 991 ? "0" : undefined,
                    width:
                      screenWidth >= 991 && screenWidth < 1440
                        ? "1790px"
                        : screenWidth >= 1440
                          ? "1972px"
                          : screenWidth < 991
                            ? "160px"
                            : undefined,
                  }}
                >
                  {(screenWidth >= 1440 ||
                    (screenWidth >= 991 && screenWidth < 1440)) && (
                    <div
                      className="container-116"
                      style={{
                        left:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "-895px"
                            : screenWidth >= 1440
                              ? "-986px"
                              : undefined,
                        width:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "1790px"
                            : screenWidth >= 1440
                              ? "1972px"
                              : undefined,
                      }}
                    >
                      <div className="container-117">
                        <div
                          className="img-wrapper"
                          style={{
                            padding:
                              screenWidth >= 991 && screenWidth < 1440
                                ? "8.88px 0px 8.89px"
                                : screenWidth >= 1440
                                  ? "10.22px 0px"
                                  : undefined,
                          }}
                        >
                          <img
                            className="component-18"
                            style={{
                              height:
                                screenWidth >= 991 && screenWidth < 1440
                                  ? "20.12px"
                                  : screenWidth >= 1440
                                    ? "23.14px"
                                    : undefined,
                              width:
                                screenWidth >= 991 && screenWidth < 1440
                                  ? "143.91px"
                                  : screenWidth >= 1440
                                    ? "165.48px"
                                    : undefined,
                            }}
                            alt="Component"
                            src={
                              screenWidth >= 991 && screenWidth < 1440
                                ? "/img/component-1-544.png"
                                : screenWidth >= 1440
                                  ? "/img/component-1-481.png"
                                  : undefined
                            }
                          />
                        </div>

                        <div
                          className="container-118"
                          style={{
                            padding:
                              screenWidth >= 991 && screenWidth < 1440
                                ? "3.55px 0px 3.56px"
                                : screenWidth >= 1440
                                  ? "4.08px 0px 4.09px"
                                  : undefined,
                          }}
                        >
                          <img
                            className="component-19"
                            style={{
                              height:
                                screenWidth >= 991 && screenWidth < 1440
                                  ? "30.78px"
                                  : screenWidth >= 1440
                                    ? "35.41px"
                                    : undefined,
                              width:
                                screenWidth >= 991 && screenWidth < 1440
                                  ? "113.11px"
                                  : screenWidth >= 1440
                                    ? "130.07px"
                                    : undefined,
                            }}
                            alt="Component"
                            src={
                              screenWidth >= 991 && screenWidth < 1440
                                ? "/img/component-1-580.png"
                                : screenWidth >= 1440
                                  ? "/img/component-1-509.png"
                                  : undefined
                            }
                          />
                        </div>

                        <div
                          className="container-119"
                          style={{
                            padding:
                              screenWidth >= 991 && screenWidth < 1440
                                ? "11.25px 0px"
                                : screenWidth >= 1440
                                  ? "12.94px 0px"
                                  : undefined,
                          }}
                        >
                          <img
                            className="component-20"
                            style={{
                              height:
                                screenWidth >= 991 && screenWidth < 1440
                                  ? "15.39px"
                                  : screenWidth >= 1440
                                    ? "17.7px"
                                    : undefined,
                              width:
                                screenWidth >= 991 && screenWidth < 1440
                                  ? "98.29px"
                                  : screenWidth >= 1440
                                    ? "113.04px"
                                    : undefined,
                            }}
                            alt="Component"
                            src={
                              screenWidth >= 991 && screenWidth < 1440
                                ? "/img/component-1-562.png"
                                : screenWidth >= 1440
                                  ? "/img/component-1-498.png"
                                  : undefined
                            }
                          />
                        </div>

                        <div
                          className="container-120"
                          style={{
                            padding:
                              screenWidth >= 991 && screenWidth < 1440
                                ? "8.28px 0px 8.29px"
                                : screenWidth >= 1440
                                  ? "9.53px 0px 9.55px"
                                  : undefined,
                          }}
                        >
                          <img
                            className="component-21"
                            style={{
                              height:
                                screenWidth >= 991 && screenWidth < 1440
                                  ? "21.32px"
                                  : screenWidth >= 1440
                                    ? "24.5px"
                                    : undefined,
                              width:
                                screenWidth >= 991 && screenWidth < 1440
                                  ? "100.67px"
                                  : screenWidth >= 1440
                                    ? "115.77px"
                                    : undefined,
                            }}
                            alt="Component"
                            src={
                              screenWidth >= 991 && screenWidth < 1440
                                ? "/img/component-1-596.png"
                                : screenWidth >= 1440
                                  ? "/img/component-1-576.png"
                                  : undefined
                            }
                          />
                        </div>

                        <div className="container-121">
                          <img
                            className="component-22"
                            style={{
                              height:
                                screenWidth >= 991 && screenWidth < 1440
                                  ? "37.89px"
                                  : screenWidth >= 1440
                                    ? "43.58px"
                                    : undefined,
                              width:
                                screenWidth >= 991 && screenWidth < 1440
                                  ? "68.69px"
                                  : screenWidth >= 1440
                                    ? "79px"
                                    : undefined,
                            }}
                            alt="Component"
                            src={
                              screenWidth >= 991 && screenWidth < 1440
                                ? "/img/component-1-545.png"
                                : screenWidth >= 1440
                                  ? "/img/component-1-482.png"
                                  : undefined
                            }
                          />
                        </div>

                        <div
                          className="container-122"
                          style={{
                            padding:
                              screenWidth >= 991 && screenWidth < 1440
                                ? "6.52px 0px 6.51px"
                                : screenWidth >= 1440
                                  ? "7.49px 0px 7.5px"
                                  : undefined,
                          }}
                        >
                          <img
                            className="component-23"
                            style={{
                              height:
                                screenWidth >= 991 && screenWidth < 1440
                                  ? "24.86px"
                                  : screenWidth >= 1440
                                    ? "28.59px"
                                    : undefined,
                              width:
                                screenWidth >= 991 && screenWidth < 1440
                                  ? "82.31px"
                                  : screenWidth >= 1440
                                    ? "94.66px"
                                    : undefined,
                            }}
                            alt="Component"
                            src={
                              screenWidth >= 991 && screenWidth < 1440
                                ? "/img/component-1-601.png"
                                : screenWidth >= 1440
                                  ? "/img/component-1-586.png"
                                  : undefined
                            }
                          />
                        </div>
                      </div>

                      <div
                        className="container-123"
                        style={{
                          marginRight:
                            screenWidth >= 1440 ? "-0.04px" : undefined,
                        }}
                      >
                        <div
                          className="component-1-483-wrapper"
                          style={{
                            padding:
                              screenWidth >= 991 && screenWidth < 1440
                                ? "8.88px 0px 8.89px"
                                : screenWidth >= 1440
                                  ? "10.22px 0px"
                                  : undefined,
                          }}
                        >
                          <Component1483
                            className={`${screenWidth >= 991 && screenWidth < 1440 && "class-8"} ${screenWidth >= 1440 && "class-9"}`}
                          />
                        </div>

                        <div
                          className="container-124"
                          style={{
                            padding:
                              screenWidth >= 991 && screenWidth < 1440
                                ? "3.55px 0px 3.56px"
                                : screenWidth >= 1440
                                  ? "4.08px 0px 4.09px"
                                  : undefined,
                          }}
                        >
                          {screenWidth >= 991 && screenWidth < 1440 && (
                            <Component1581 className="component-1-581" />
                          )}

                          {screenWidth >= 1440 && (
                            <Component1510 className="component-1-510" />
                          )}
                        </div>

                        <div
                          className="container-125"
                          style={{
                            padding:
                              screenWidth >= 991 && screenWidth < 1440
                                ? "11.25px 0px"
                                : screenWidth >= 1440
                                  ? "12.94px 0px"
                                  : undefined,
                          }}
                        >
                          {screenWidth >= 991 && screenWidth < 1440 && (
                            <Component1563 className="component-1-563" />
                          )}

                          {screenWidth >= 1440 && (
                            <Component1499 className="component-1-499" />
                          )}
                        </div>

                        <div
                          className="component-1-597-wrapper"
                          style={{
                            padding:
                              screenWidth >= 991 && screenWidth < 1440
                                ? "8.28px 0px 8.29px"
                                : screenWidth >= 1440
                                  ? "9.53px 0px 9.55px"
                                  : undefined,
                          }}
                        >
                          <Component1597
                            className={`${screenWidth >= 991 && screenWidth < 1440 && "class-10"} ${screenWidth >= 1440 && "class-11"}`}
                          />
                        </div>

                        <div className="container-126">
                          {screenWidth >= 991 && screenWidth < 1440 && (
                            <Component1547 className="component-1-547" />
                          )}

                          {screenWidth >= 1440 && (
                            <Component1484 className="component-1-484" />
                          )}
                        </div>

                        <div
                          className="component-1-602-wrapper"
                          style={{
                            padding:
                              screenWidth >= 991 && screenWidth < 1440
                                ? "6.52px 0px 6.51px"
                                : screenWidth >= 1440
                                  ? "7.49px 0px 7.5px"
                                  : undefined,
                          }}
                        >
                          <Component1602
                            className={`${screenWidth >= 991 && screenWidth < 1440 && "class-12"} ${screenWidth >= 1440 && "class-13"}`}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className="gradient"
                  style={{
                    height:
                      screenWidth >= 991 && screenWidth < 1440
                        ? "118px"
                        : screenWidth >= 1440
                          ? "124px"
                          : screenWidth < 991
                            ? "126px"
                            : undefined,
                    left:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "0"
                        : screenWidth < 991
                          ? "278px"
                          : undefined,
                  }}
                />

                <div
                  className="gradient-2"
                  style={{
                    background:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.74) 19%, rgba(255, 255, 255, 0.54) 34%, rgba(255, 255, 255, 0.38) 47%, rgba(255, 255, 255, 0.28) 56.5%, rgba(255, 255, 255, 0.19) 65%, rgba(255, 255, 255, 0.12) 73%, rgba(255, 255, 255, 0.08) 80.2%, rgba(255, 255, 255, 0.04) 86.1%, rgba(255, 255, 255, 0.02) 91%, rgba(255, 255, 255, 0.01) 95.2%, rgba(255, 255, 255, 0) 98.2%, rgba(255, 255, 255, 0) 100%)"
                        : undefined,
                    height:
                      screenWidth >= 991 && screenWidth < 1440
                        ? "118px"
                        : screenWidth >= 1440
                          ? "124px"
                          : screenWidth < 991
                            ? "125.7px"
                            : undefined,
                    left:
                      screenWidth >= 991 && screenWidth < 1440
                        ? "735px"
                        : screenWidth >= 1440
                          ? "826px"
                          : undefined,
                    marginRight: screenWidth < 991 ? "-1314.00px" : undefined,
                    overflow: screenWidth < 991 ? "hidden" : undefined,
                    position:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "absolute"
                        : screenWidth < 991
                          ? "relative"
                          : undefined,
                    top:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "0"
                        : undefined,
                    width:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "160px"
                        : screenWidth < 991
                          ? "1752px"
                          : undefined,
                  }}
                >
                  {screenWidth < 991 && (
                    <div className="container-127">
                      <div className="container-128">
                        <div className="container-129">
                          <img
                            className="component-24"
                            alt="Component"
                            src="/img/component-1-379.png"
                          />
                        </div>

                        <div className="container-130">
                          <img
                            className="component-25"
                            alt="Component"
                            src="/img/component-1-410.png"
                          />
                        </div>

                        <div className="container-131">
                          <img
                            className="component-26"
                            alt="Component"
                            src="/img/component-1-396.png"
                          />
                        </div>

                        <div className="container-132">
                          <img
                            className="component-27"
                            alt="Component"
                            src="/img/component-1-413.png"
                          />
                        </div>

                        <div className="container-133">
                          <img
                            className="component-28"
                            alt="Component"
                            src="/img/component-1-380.png"
                          />
                        </div>

                        <div className="container-134">
                          <img
                            className="component-29"
                            alt="Component"
                            src="/img/component-1-423.png"
                          />
                        </div>
                      </div>

                      <div className="container-128">
                        <div className="container-129">
                          <Component1381 className="component-24" />
                        </div>

                        <div className="container-130">
                          <Component1510 className="component-25" />
                        </div>

                        <div className="container-131">
                          <Component1397 className="component-26" />
                        </div>

                        <div className="container-132">
                          <img
                            className="component-27"
                            alt="Component"
                            src="/img/component-1-413.png"
                          />
                        </div>

                        <div className="container-135">
                          <img
                            className="component-28"
                            alt="Component"
                            src="/img/component-1-380.png"
                          />
                        </div>

                        <div className="container-134">
                          <img
                            className="component-29"
                            alt="Component"
                            src="/img/component-1-423.png"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div
            className="section-8"
            style={{
              padding:
                screenWidth < 991
                  ? "48px 20px"
                  : screenWidth >= 991 && screenWidth < 1440
                    ? "75px 48px"
                    : screenWidth >= 1440
                      ? "75px 227px"
                      : undefined,
            }}
          >
            <div
              className="background-wrapper"
              style={{
                width:
                  screenWidth < 991
                    ? "438px"
                    : screenWidth >= 991 && screenWidth < 1440
                      ? "895px"
                      : screenWidth >= 1440
                        ? "986px"
                        : undefined,
              }}
            >
              <div
                className="background-19"
                style={{
                  padding:
                    screenWidth < 991
                      ? "48px"
                      : screenWidth >= 991 && screenWidth < 1440
                        ? "112.44px 131.47px 112.45px 131.45px"
                        : screenWidth >= 1440
                          ? "134.59px 176.97px 134.61px 176.95px"
                          : undefined,
                }}
              >
                {screenWidth < 991 && (
                  <>
                    <Component1435 className="component-1-435" />
                    <div className="heading-margin-8">
                      <div className="heading-15">
                        <div className="governed-by-you">
                          Governed by you &amp;
                        </div>

                        <div className="container-136">
                          <div className="container-137">
                            <div className="text-wrapper-29">193,232</div>
                          </div>
                        </div>

                        <div className="text-wrapper-30">others.</div>
                      </div>
                    </div>

                    <div className="container-138">
                      <p className="AAVE-token-holders-2">
                        AAVE token holders guide the Aave
                        <br />
                        Protocol via procedures, voting, and
                        <br />
                        smart contract execution.
                      </p>
                    </div>
                  </>
                )}

                {screenWidth >= 991 && screenWidth < 1440 && (
                  <Component1624 className="component-1-624" />
                )}

                {((screenWidth >= 991 && screenWidth < 1440) ||
                  screenWidth < 991) && (
                  <div
                    className="heading-margin-9"
                    style={{
                      padding:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "16px 0px"
                          : screenWidth < 991
                            ? "24px 0px 0px"
                            : undefined,
                    }}
                  >
                    <a
                      className="heading-16"
                      style={{
                        alignItems:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "flex-start"
                            : screenWidth < 991
                              ? "center"
                              : undefined,
                        backgroundColor:
                          screenWidth < 991 ? "#ffffff" : undefined,
                        borderRadius: screenWidth < 991 ? "50px" : undefined,
                        gap: screenWidth < 991 ? "6px" : undefined,
                        justifyContent:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "center"
                            : undefined,
                        padding:
                          screenWidth < 991 ? "12px 18px 12px 20px" : undefined,
                      }}
                      href="https://governance.aave.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {screenWidth >= 991 && screenWidth < 1440 && (
                        <>
                          <div className="text-wrapper-31">
                            Governed by you &amp;
                          </div>

                          <div className="container-139">
                            <div className="container-140">
                              <div className="text-wrapper-32">193,232</div>
                            </div>
                          </div>

                          <div className="text-wrapper-31">others.</div>
                        </>
                      )}

                      {screenWidth < 991 && (
                        <>
                          <a
                            className="text-4"
                            href="https://governance.aave.com/"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Go to the Forum
                          </a>

                          <Component1548
                            className="component-1-548"
                            color="#1C4886"
                          />
                        </>
                      )}
                    </a>
                  </div>
                )}

                {screenWidth >= 991 && screenWidth < 1440 && (
                  <>
                    <div className="container-141">
                      <p className="AAVE-token-holders-3">
                        AAVE token holders guide the Aave Protocol via
                        <br />
                        procedures, voting, and smart contract execution.
                      </p>
                    </div>

                    <div className="link-margin">
                      <a
                        className="component-30"
                        href="https://governance.aave.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <a
                          className="text-4"
                          href="https://governance.aave.com/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Go to the Forum
                        </a>

                        <Component1548
                          className="component-1-548"
                          color="#1C4886"
                        />
                      </a>
                    </div>
                  </>
                )}

                {screenWidth >= 1440 && (
                  <>
                    <Component1625 className="component-1-625" />
                    <div className="heading-margin-10">
                      <div className="heading-17">
                        <div className="text-wrapper-31">
                          Governed by you &amp;
                        </div>

                        <div className="container-139">
                          <div className="container-140">
                            <div className="text-wrapper-32">193,232</div>
                          </div>
                        </div>

                        <div className="text-wrapper-31">others.</div>
                      </div>
                    </div>

                    <div className="container-141">
                      <p className="AAVE-token-holders-3">
                        AAVE token holders guide the Aave Protocol via
                        <br />
                        procedures, voting, and smart contract execution.
                      </p>
                    </div>

                    <div className="link-margin">
                      <a
                        className="component-30"
                        href="https://governance.aave.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <a
                          className="text-4"
                          href="https://governance.aave.com/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Go to the Forum
                        </a>

                        <Component1548
                          className="component-1-548"
                          color="#1C4886"
                        />
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div
            className="section-9"
            style={{
              padding:
                screenWidth < 991
                  ? "48px 20px"
                  : screenWidth >= 991 && screenWidth < 1440
                    ? "100px 48px"
                    : screenWidth >= 1440
                      ? "100px 227px"
                      : undefined,
            }}
          >
            <div
              className="container-142"
              style={{
                width:
                  screenWidth < 991
                    ? "438px"
                    : screenWidth >= 991 && screenWidth < 1440
                      ? "895px"
                      : screenWidth >= 1440
                        ? "986px"
                        : undefined,
              }}
            >
              <div
                className="container-143"
                style={{
                  gap:
                    screenWidth < 991
                      ? "11.35px"
                      : screenWidth >= 1440 ||
                          (screenWidth >= 991 && screenWidth < 1440)
                        ? "12px"
                        : undefined,
                  padding:
                    screenWidth >= 1440 ||
                    (screenWidth >= 991 && screenWidth < 1440)
                      ? "0px 24px"
                      : undefined,
                }}
              >
                <div className="heading-18">
                  <div className="text-wrapper-14">Serious security.</div>
                </div>

                <div
                  className="container-144"
                  style={{
                    maxWidth:
                      screenWidth < 991
                        ? "432px"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "480px"
                          : undefined,
                    padding: screenWidth < 991 ? "0px 0px 0.65px" : undefined,
                  }}
                >
                  <p
                    className="text-wrapper-33"
                    style={{
                      fontSize:
                        screenWidth < 991
                          ? "18px"
                          : screenWidth >= 1440 ||
                              (screenWidth >= 991 && screenWidth < 1440)
                            ? "20px"
                            : undefined,
                      lineHeight:
                        screenWidth < 991
                          ? "24.3px"
                          : screenWidth >= 1440 ||
                              (screenWidth >= 991 && screenWidth < 1440)
                            ? "27px"
                            : undefined,
                    }}
                  >
                    Peace of mind by design.
                  </p>
                </div>
              </div>

              <div
                className="container-145"
                style={{
                  gap:
                    screenWidth < 991
                      ? "32px"
                      : screenWidth >= 1440 ||
                          (screenWidth >= 991 && screenWidth < 1440)
                        ? "72px"
                        : undefined,
                }}
              >
                <div
                  className="background-20"
                  style={{
                    backgroundColor:
                      screenWidth < 991
                        ? "#fcfcfb"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "var(--aavecomalabaster)"
                          : undefined,
                    flexDirection: screenWidth < 991 ? "column" : undefined,
                    justifyContent:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "center"
                        : undefined,
                  }}
                >
                  <div
                    className="background-21"
                    style={{
                      alignItems:
                        screenWidth < 991
                          ? "center"
                          : screenWidth >= 1440 ||
                              (screenWidth >= 991 && screenWidth < 1440)
                            ? "flex-start"
                            : undefined,
                      width: screenWidth < 991 ? "100%" : undefined,
                    }}
                  >
                    {screenWidth < 991 && (
                      <Component1429 className="component-31" />
                    )}

                    {(screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)) && (
                      <Component1612
                        className={`${screenWidth >= 991 && screenWidth < 1440 && "component-1-618"} ${screenWidth >= 1440 && "component-1-622"}`}
                      />
                    )}
                  </div>

                  <div
                    className="container-146"
                    style={{
                      flex: screenWidth < 991 ? "0 0 auto" : undefined,
                      marginTop: screenWidth < 991 ? "-8.53e-14px" : undefined,
                      padding:
                        screenWidth < 991
                          ? "31.3px 32px 32px"
                          : screenWidth >= 1440 ||
                              (screenWidth >= 991 && screenWidth < 1440)
                            ? "39.3px 48px 40px"
                            : undefined,
                      width:
                        screenWidth < 991
                          ? "100%"
                          : screenWidth >= 991 && screenWidth < 1440
                            ? "447.5px"
                            : screenWidth >= 1440
                              ? "493px"
                              : undefined,
                    }}
                  >
                    <div className="heading-19">
                      <div className="text-wrapper-34">Extensive Audits</div>
                    </div>

                    <div className="horizontal-divider-4" />

                    <div className="peace-of-mind-wrapper">
                      <div className="peace-of-mind">
                        {(screenWidth >= 1440 || screenWidth < 991) && (
                          <p className="text-wrapper-61">
                            Peace of mind supported by multiple audits by the
                            <br />
                            world’s leading security firms.
                          </p>
                        )}

                        {screenWidth >= 991 && screenWidth < 1440 && (
                          <p className="text-wrapper-61">
                            Peace of mind supported by multiple audits by
                            <br />
                            the world’s leading security firms.
                          </p>
                        )}
                      </div>
                    </div>

                    <a
                      className="component-32"
                      style={{
                        padding:
                          screenWidth < 991
                            ? "20.1px 0px 8px"
                            : screenWidth >= 1440 ||
                                (screenWidth >= 991 && screenWidth < 1440)
                              ? "19.5px 0px 8px"
                              : undefined,
                      }}
                      href="https://aave.com/security"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="horizontal-divider-3" />

                      <a
                        className="text-3"
                        href="https://aave.com/security"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Learn More
                      </a>

                      <Component1548
                        className="component-1-548"
                        color="#201D1D"
                      />
                    </a>
                  </div>
                </div>

                <div
                  className="background-22"
                  style={{
                    backgroundColor:
                      screenWidth < 991
                        ? "#fcfcfb"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "var(--aavecomalabaster)"
                          : undefined,
                    flexDirection: screenWidth < 991 ? "column" : undefined,
                    justifyContent:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "center"
                        : undefined,
                  }}
                >
                  <div
                    className="background-23"
                    style={{
                      alignItems:
                        screenWidth < 991
                          ? "center"
                          : screenWidth >= 1440 ||
                              (screenWidth >= 991 && screenWidth < 1440)
                            ? "flex-start"
                            : undefined,
                      backgroundColor:
                        screenWidth < 991
                          ? "var(--aavecomwild-sand)"
                          : undefined,
                      flex: screenWidth < 991 ? "1" : undefined,
                      flexGrow: screenWidth < 991 ? "1" : undefined,
                      gap:
                        screenWidth >= 1440 ||
                        (screenWidth >= 991 && screenWidth < 1440)
                          ? "24px"
                          : undefined,
                      padding:
                        screenWidth >= 1440 ||
                        (screenWidth >= 991 && screenWidth < 1440)
                          ? "39.3px 48px 40px"
                          : undefined,
                      width:
                        screenWidth < 991
                          ? "100%"
                          : screenWidth >= 991 && screenWidth < 1440
                            ? "447.5px"
                            : screenWidth >= 1440
                              ? "493px"
                              : undefined,
                    }}
                  >
                    {screenWidth < 991 && (
                      <Component1430 className="component-31" />
                    )}

                    {(screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)) && (
                      <>
                        <div className="heading-19">
                          <div className="text-wrapper-34">Bug Bounty</div>
                        </div>

                        <div className="horizontal-divider-4" />

                        <div className="security-is-a-top-wrapper">
                          <div className="security-is-a-top">
                            {screenWidth >= 991 && screenWidth < 1440 && (
                              <p className="text-wrapper-61">
                                Security is a top priority. Report
                                vulnerabilities
                                <br />
                                or bugs responsibly and get rewarded.
                              </p>
                            )}

                            {screenWidth >= 1440 && (
                              <p className="text-wrapper-61">
                                Security is a top priority. Report
                                vulnerabilities or bugs
                                <br />
                                responsibly and get rewarded.
                              </p>
                            )}
                          </div>
                        </div>

                        <a
                          className="component-33"
                          href="https://immunefi.com/bug-bounty/aave/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-147">
                            <a
                              className="text-3"
                              href="https://immunefi.com/bug-bounty/aave/"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              Learn More
                            </a>
                          </div>

                          <Component1548
                            className="component-1-548"
                            color="#201D1D"
                          />
                          <div className="horizontal-divider-3" />
                        </a>
                      </>
                    )}
                  </div>

                  <div
                    className="container-148"
                    style={{
                      backgroundColor:
                        screenWidth >= 1440 ||
                        (screenWidth >= 991 && screenWidth < 1440)
                          ? "var(--aavecomwild-sand)"
                          : undefined,
                      flex:
                        screenWidth < 991
                          ? "0 0 auto"
                          : screenWidth >= 1440 ||
                              (screenWidth >= 991 && screenWidth < 1440)
                            ? "1"
                            : undefined,
                      flexGrow:
                        screenWidth >= 1440 ||
                        (screenWidth >= 991 && screenWidth < 1440)
                          ? "1"
                          : undefined,
                      gap: screenWidth < 991 ? "24px" : undefined,
                      marginTop: screenWidth < 991 ? "-0.01px" : undefined,
                      padding:
                        screenWidth < 991 ? "31.3px 32px 32px" : undefined,
                      width: screenWidth < 991 ? "100%" : undefined,
                    }}
                  >
                    {screenWidth < 991 && (
                      <>
                        <div className="heading-19">
                          <div className="text-wrapper-34">Bug Bounty</div>
                        </div>

                        <div className="horizontal-divider-4" />

                        <div className="container-149">
                          <p className="security-is-a-top-2">
                            Security is a top priority. Report vulnerabilities
                            or
                            <br />
                            bugs responsibly and get rewarded.
                          </p>
                        </div>

                        <a
                          className="component-33"
                          href="https://immunefi.com/bug-bounty/aave/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-150">
                            <a
                              className="text-3"
                              href="https://immunefi.com/bug-bounty/aave/"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              Learn More
                            </a>
                          </div>

                          <Component1548
                            className="component-1-548"
                            color="#201D1D"
                          />
                          <div className="horizontal-divider-3" />
                        </a>
                      </>
                    )}

                    {screenWidth >= 991 && screenWidth < 1440 && (
                      <Component1618 className="component-1-618" />
                    )}

                    {screenWidth >= 1440 && (
                      <Component1622 className="component-1-622" />
                    )}
                  </div>
                </div>

                <div
                  className="background-24"
                  style={{
                    backgroundColor:
                      screenWidth < 991
                        ? "#fcfcfb"
                        : screenWidth >= 1440 ||
                            (screenWidth >= 991 && screenWidth < 1440)
                          ? "var(--aavecomalabaster)"
                          : undefined,
                    flexDirection: screenWidth < 991 ? "column" : undefined,
                    gap: screenWidth < 991 ? "5.68e-13px" : undefined,
                    justifyContent:
                      screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                        ? "center"
                        : undefined,
                  }}
                >
                  <div
                    className="background-25"
                    style={{
                      alignItems:
                        screenWidth < 991
                          ? "center"
                          : screenWidth >= 1440 ||
                              (screenWidth >= 991 && screenWidth < 1440)
                            ? "flex-start"
                            : undefined,
                      width: screenWidth < 991 ? "100%" : undefined,
                    }}
                  >
                    {screenWidth < 991 && (
                      <Component1431 className="component-1-431" />
                    )}

                    {(screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)) && (
                      <Component1614
                        className={`${screenWidth >= 991 && screenWidth < 1440 && "class-14"} ${screenWidth >= 1440 && "class-15"}`}
                      />
                    )}
                  </div>

                  <div
                    className="container-151"
                    style={{
                      flex: screenWidth < 991 ? "0 0 auto" : undefined,
                      padding:
                        screenWidth < 991
                          ? "31.3px 32px 32px"
                          : screenWidth >= 1440 ||
                              (screenWidth >= 991 && screenWidth < 1440)
                            ? "39.3px 48px 40px"
                            : undefined,
                      width:
                        screenWidth < 991
                          ? "100%"
                          : screenWidth >= 991 && screenWidth < 1440
                            ? "447.5px"
                            : screenWidth >= 1440
                              ? "493px"
                              : undefined,
                    }}
                  >
                    <div className="heading-19">
                      <div className="text-wrapper-34">Shortfall Secured</div>
                    </div>

                    <div className="horizontal-divider-4" />

                    <div className="container-152">
                      <div className="the-aave-protocol-is-2">
                        {((screenWidth >= 991 && screenWidth < 1440) ||
                          screenWidth < 991) && (
                          <p className="text-wrapper-61">
                            The Aave Protocol is secured with a backstop
                            <br />
                            against protocol insolvency.
                          </p>
                        )}

                        {screenWidth >= 1440 && (
                          <p className="text-wrapper-61">
                            The Aave Protocol is secured with a backstop against
                            <br />
                            protocol insolvency.
                          </p>
                        )}
                      </div>
                    </div>

                    <a
                      className="component-34"
                      style={{
                        padding:
                          screenWidth < 991
                            ? "20.1px 0px 8px"
                            : screenWidth >= 1440 ||
                                (screenWidth >= 991 && screenWidth < 1440)
                              ? "19.5px 0px 8px"
                              : undefined,
                      }}
                      href="https://aave.com/help/safety-module"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="horizontal-divider-3" />

                      <a
                        className="text-3"
                        href="https://aave.com/help/safety-module"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Learn More
                      </a>

                      <Component1548
                        className="component-1-548"
                        color="#201D1D"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="separator"
            style={{
              maxWidth:
                screenWidth < 991
                  ? "430.2px"
                  : screenWidth >= 991 && screenWidth < 1440
                    ? "891.9px"
                    : screenWidth >= 1440
                      ? "1296px"
                      : undefined,
              width:
                screenWidth < 991
                  ? "430.19px"
                  : screenWidth >= 991 && screenWidth < 1440
                    ? "891.89px"
                    : screenWidth >= 1440
                      ? "1082px"
                      : undefined,
            }}
          />

          {screenWidth < 991 && (
            <>
              <div className="section-10">
                <div className="container-153">
                  <div className="container-154">
                    <div className="heading-20">
                      <div className="text-wrapper-35">FAQs</div>
                    </div>

                    <div className="container-155">
                      <div className="container-156">
                        <div className="button-wrapper">
                          <div className="button-3">
                            <div className="heading-11">
                              <div className="text-wrapper-36">
                                What is Aave?
                              </div>
                            </div>

                            <Component1398 className="component-1-398" />
                            <div className="rectangle-2" />
                          </div>
                        </div>

                        <div className="button-wrapper">
                          <div className="button-3">
                            <div className="heading-11">
                              <p className="text-wrapper-36">
                                Where are supplied tokens stored?
                              </p>
                            </div>

                            <Component1398 className="component-1-398" />
                            <div className="rectangle-2" />
                          </div>
                        </div>

                        <div className="button-wrapper">
                          <div className="button-3">
                            <div className="heading-11">
                              <div className="text-wrapper-36">
                                Does Aave have risks?
                              </div>
                            </div>

                            <Component1398 className="component-1-398" />
                            <div className="rectangle-2" />
                          </div>
                        </div>

                        <div className="button-wrapper">
                          <div className="button-3">
                            <div className="heading-11">
                              <p className="text-wrapper-36">
                                What is the Aave token?
                              </p>
                            </div>

                            <Component1398 className="component-1-398" />
                            <div className="rectangle-2" />
                          </div>
                        </div>
                      </div>

                      <a
                        className="component-33"
                        href="https://aave.com/faq"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="horizontal-divider-5" />

                        <a
                          className="text-5"
                          href="https://aave.com/faq"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          See More
                        </a>

                        <Component1548
                          className="component-1-548"
                          color="#1A88F8"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-11">
                <footer className="footer">
                  <div className="container-157">
                    <div className="container-158">
                      <Component1414 className="component-1-414" />
                      <div className="aave-com-provides-wrapper">
                        <p className="aave-com-provides">
                          Aave.com provides information and resources about the
                          fundamentals of the
                          <br />
                          decentralised non-custodial liquidity protocol called
                          the Aave Protocol,
                          <br />
                          comprised of open-source self-executing smart
                          contracts that are deployed on
                          <br />
                          various permissionless public blockchains, such as
                          Ethereum (the &#34;Aave
                          <br />
                          Protocol&#34; or the &#34;Protocol&#34;). Aave Labs
                          does not control or operate any version
                          <br />
                          of the Aave Protocol on any blockchain network.
                        </p>
                      </div>
                    </div>

                    <div className="nav">
                      <div className="list">
                        <div className="item">
                          <div className="container-159">
                            <div className="text-wrapper-37">Resources</div>
                          </div>

                          <div className="div-6">
                            <div className="item-2">
                              <div className="component-35">
                                <a
                                  className="div-7"
                                  href="https://aave.com/brand"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  Brand
                                </a>
                              </div>
                            </div>

                            <div className="item-2">
                              <div className="component-36">
                                <a
                                  className="div-7"
                                  href="https://aave.com/faq"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  FAQ
                                </a>
                              </div>
                            </div>

                            <div className="item-2">
                              <div className="component-37">
                                <div className="text-wrapper-38">
                                  Help &amp; Support
                                </div>
                              </div>
                            </div>

                            <div className="item-2">
                              <div className="component-38">
                                <a
                                  className="div-7"
                                  href="https://governance.aave.com/"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  Governance
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="item-3">
                          <div className="container-160">
                            <div className="text-wrapper-37">Developers</div>
                          </div>

                          <div className="div-6">
                            <div className="item-2">
                              <div className="component-39">
                                <a
                                  className="div-7"
                                  href="https://aave.com/docs"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  Documentation
                                </a>
                              </div>
                            </div>

                            <div className="item-2">
                              <div className="component-40">
                                <a
                                  className="text-wrapper-38"
                                  href="https://github.com/aave/aave-v3-core/blob/master/techpaper/Aave_V3_Technical_Paper.pdf"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  Technical Paper
                                </a>
                              </div>
                            </div>

                            <div className="item-2">
                              <div className="component-41">
                                <a
                                  className="div-7"
                                  href="https://aave.com/security"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  Security
                                </a>
                              </div>
                            </div>

                            <div className="item-2">
                              <div className="component-42">
                                <a
                                  className="div-7"
                                  href="https://immunefi.com/bug-bounty/aave/"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  Bug Bounty
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="item-4">
                          <div className="container-161">
                            <div className="text-wrapper-37">Company</div>
                          </div>

                          <div className="div-6">
                            <div className="item-2">
                              <div className="component-43">
                                <a
                                  className="text-wrapper-38"
                                  href="https://aave.com/privacy-policy"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  Privacy Policy
                                </a>
                              </div>
                            </div>

                            <div className="item-2">
                              <div className="component-44">
                                <a
                                  className="div-7"
                                  href="https://aave.com/terms-of-service"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  Terms of Use
                                </a>
                              </div>
                            </div>

                            <div className="item-2">
                              <div className="component-45">
                                <a
                                  className="div-7"
                                  href="https://aave.com/brand"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  Contact
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="container-162">
                    <a
                      className="component-1-489-wrapper"
                      href="https://x.com/aave"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Component1489 className="component-1-489" />
                    </a>

                    <a
                      className="component-1-389-wrapper"
                      href="https://discord.com/invite/aave"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Component1389 className="component-46" />
                    </a>

                    <a
                      className="component-1-554-wrapper"
                      href="https://hey.xyz/u/aave"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Component1554 className="component-47" />
                    </a>

                    <a
                      className="component-1-492-wrapper"
                      href="https://github.com/aave"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Component1492 className="component-47" />
                    </a>

                    <a
                      className="component-1-500-wrapper"
                      href="https://dune.com/aavelabs"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Component1500 className="component-1-500" />
                    </a>
                  </div>
                </footer>

                <div className="container-163">
                  <div className="component-48">
                    <div className="overlay-gradient-2" />
                  </div>

                  <div className="component-49">
                    <div className="overlay-gradient-2" />
                  </div>

                  <div className="component-50">
                    <div className="overlay-gradient-2" />
                  </div>

                  <div className="component-51">
                    <div className="overlay-gradient-2" />
                  </div>
                </div>
              </div>
            </>
          )}

          {(screenWidth >= 1440 ||
            (screenWidth >= 991 && screenWidth < 1440)) && (
            <div
              className="section-12"
              style={{
                gap:
                  screenWidth >= 991 && screenWidth < 1440
                    ? "5.68e-14px"
                    : screenWidth >= 1440
                      ? "1.02e-12px"
                      : undefined,
                width:
                  screenWidth >= 991 && screenWidth < 1440
                    ? "991px"
                    : screenWidth >= 1440
                      ? "1082px"
                      : undefined,
              }}
            >
              <footer className="footer-2">
                <div className="container-164">
                  <div className="container-165">
                    <Component1414 className="component-1-414" />
                    <div className="aave-com-provides-wrapper">
                      <div className="aave-com-provides-2">
                        {screenWidth >= 991 && screenWidth < 1440 && (
                          <p className="text-wrapper-61">
                            Aave.com provides information and resources about
                            the fundamentals of the
                            <br />
                            decentralised non-custodial liquidity protocol
                            called the Aave Protocol, comprised
                            <br />
                            of open-source self-executing smart contracts that
                            are deployed on various
                            <br />
                            permissionless public blockchains, such as Ethereum
                            (the &#34;Aave Protocol&#34; or the
                            <br />
                            &#34;Protocol&#34;). Aave Labs does not control or
                            operate any version of the Aave
                            <br />
                            Protocol on any blockchain network.
                          </p>
                        )}

                        {screenWidth >= 1440 && (
                          <p className="text-wrapper-61">
                            Aave.com provides information and resources about
                            the fundamentals of the
                            <br />
                            decentralised non-custodial liquidity protocol
                            called the Aave Protocol, comprised of
                            <br />
                            open-source self-executing smart contracts that are
                            deployed on various permissionless
                            <br />
                            public blockchains, such as Ethereum (the &#34;Aave
                            Protocol&#34; or the &#34;Protocol&#34;). Aave Labs
                            <br />
                            does not control or operate any version of the Aave
                            Protocol on any blockchain network.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div
                    className="list-wrapper"
                    style={{
                      width:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "418.48px"
                          : screenWidth >= 1440
                            ? "457px"
                            : undefined,
                    }}
                  >
                    <div className="list-2">
                      <div
                        className="item-5"
                        style={{
                          minWidth:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "91.03px"
                              : screenWidth >= 1440
                                ? "99.03px"
                                : undefined,
                        }}
                      >
                        <div className="container-166">
                          <div className="text-wrapper-37">Resources</div>
                        </div>

                        <div className="div-6">
                          <div className="item-2">
                            <div className="component-52">
                              <a
                                className="div-7"
                                href="https://aave.com/brand"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                Brand
                              </a>
                            </div>
                          </div>

                          <div className="item-2">
                            <div className="component-53">
                              <a
                                className="div-7"
                                href="https://aave.com/faq"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                FAQ
                              </a>
                            </div>
                          </div>

                          <div
                            className="item-6"
                            style={{
                              padding:
                                screenWidth >= 991 && screenWidth < 1440
                                  ? "0px 0px 0.79px"
                                  : screenWidth >= 1440
                                    ? "0px 0px 0.8px"
                                    : undefined,
                            }}
                          >
                            <div
                              className="component-54"
                              style={{
                                alignSelf:
                                  screenWidth >= 1440 ? "stretch" : undefined,
                                display:
                                  screenWidth >= 991 && screenWidth < 1440
                                    ? "inline-flex"
                                    : screenWidth >= 1440
                                      ? "flex"
                                      : undefined,
                                flexDirection:
                                  screenWidth >= 991 && screenWidth < 1440
                                    ? "column"
                                    : undefined,
                                gap:
                                  screenWidth >= 991 && screenWidth < 1440
                                    ? "1px"
                                    : undefined,
                                width: screenWidth >= 1440 ? "100%" : undefined,
                              }}
                            >
                              {screenWidth >= 991 && screenWidth < 1440 && (
                                <>
                                  <a
                                    className="div-7"
                                    href="https://aave.com/help"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Help &amp;
                                  </a>

                                  <a
                                    className="text-wrapper-39"
                                    href="https://aave.com/help"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Support
                                  </a>
                                </>
                              )}

                              {screenWidth >= 1440 && (
                                <a
                                  className="text-wrapper-38"
                                  href="https://aave.com/help"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  Help &amp; Support
                                </a>
                              )}
                            </div>
                          </div>

                          <div className="item-2">
                            <div className="component-55">
                              <a
                                className="div-7"
                                href="https://governance.aave.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                Governance
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="item-7"
                        style={{
                          minWidth:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "99.45px"
                              : screenWidth >= 1440
                                ? "104.83px"
                                : undefined,
                        }}
                      >
                        <div className="container-167">
                          <div className="text-wrapper-37">Developers</div>
                        </div>

                        <div className="div-6">
                          <div className="item-2">
                            <div
                              className="component-56"
                              style={{
                                alignSelf:
                                  screenWidth >= 991 && screenWidth < 1440
                                    ? "stretch"
                                    : undefined,
                                display:
                                  screenWidth >= 991 && screenWidth < 1440
                                    ? "flex"
                                    : screenWidth >= 1440
                                      ? "inline-flex"
                                      : undefined,
                                width:
                                  screenWidth >= 991 && screenWidth < 1440
                                    ? "100%"
                                    : undefined,
                              }}
                            >
                              <a
                                className="text-wrapper-40"
                                style={{
                                  flex:
                                    screenWidth >= 991 && screenWidth < 1440
                                      ? "1"
                                      : undefined,
                                  whiteSpace:
                                    screenWidth >= 1440 ? "nowrap" : undefined,
                                  width:
                                    screenWidth >= 1440
                                      ? "fit-content"
                                      : undefined,
                                }}
                                href="https://aave.com/docs"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                Documentation
                              </a>
                            </div>
                          </div>

                          <div
                            className="item-8"
                            style={{
                              padding:
                                screenWidth >= 991 && screenWidth < 1440
                                  ? "0px 0px 0.79px"
                                  : screenWidth >= 1440
                                    ? "0px 0px 0.8px"
                                    : undefined,
                            }}
                          >
                            <div
                              className="component-57"
                              style={{
                                alignSelf:
                                  screenWidth >= 1440 ? "stretch" : undefined,
                                display:
                                  screenWidth >= 991 && screenWidth < 1440
                                    ? "inline-flex"
                                    : screenWidth >= 1440
                                      ? "flex"
                                      : undefined,
                                flexDirection:
                                  screenWidth >= 991 && screenWidth < 1440
                                    ? "column"
                                    : undefined,
                                gap:
                                  screenWidth >= 991 && screenWidth < 1440
                                    ? "0.99px"
                                    : undefined,
                                width: screenWidth >= 1440 ? "100%" : undefined,
                              }}
                            >
                              {screenWidth >= 991 && screenWidth < 1440 && (
                                <>
                                  <a
                                    className="div-7"
                                    href="https://github.com/aave/aave-v3-core/blob/master/techpaper/Aave_V3_Technical_Paper.pdf"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Technical
                                  </a>

                                  <a
                                    className="text-wrapper-39"
                                    href="https://github.com/aave/aave-v3-core/blob/master/techpaper/Aave_V3_Technical_Paper.pdf"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Paper
                                  </a>
                                </>
                              )}

                              {screenWidth >= 1440 && (
                                <a
                                  className="text-wrapper-38"
                                  href="https://github.com/aave/aave-v3-core/blob/master/techpaper/Aave_V3_Technical_Paper.pdf"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  Technical Paper
                                </a>
                              )}
                            </div>
                          </div>

                          <div className="item-2">
                            <div className="component-58">
                              <a
                                className="div-7"
                                href="https://aave.com/security"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                Security
                              </a>
                            </div>
                          </div>

                          <div className="item-2">
                            <div className="component-59">
                              <a
                                className="div-7"
                                href="https://immunefi.com/bug-bounty/aave/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                Bug Bounty
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="item-9"
                        style={{
                          minWidth:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "84px"
                              : screenWidth >= 1440
                                ? "91.39px"
                                : undefined,
                        }}
                      >
                        <div className="container-168">
                          <div className="text-wrapper-37">Company</div>
                        </div>

                        <div className="div-6">
                          <div
                            className="item-10"
                            style={{
                              padding:
                                screenWidth >= 991 && screenWidth < 1440
                                  ? "0px 0px 0.79px"
                                  : screenWidth >= 1440
                                    ? "0px 0px 0.8px"
                                    : undefined,
                            }}
                          >
                            <div
                              className="component-60"
                              style={{
                                alignSelf:
                                  screenWidth >= 1440 ? "stretch" : undefined,
                                display:
                                  screenWidth >= 991 && screenWidth < 1440
                                    ? "inline-flex"
                                    : screenWidth >= 1440
                                      ? "flex"
                                      : undefined,
                                flexDirection:
                                  screenWidth >= 991 && screenWidth < 1440
                                    ? "column"
                                    : undefined,
                                gap:
                                  screenWidth >= 991 && screenWidth < 1440
                                    ? "1px"
                                    : undefined,
                                width: screenWidth >= 1440 ? "100%" : undefined,
                              }}
                            >
                              {screenWidth >= 991 && screenWidth < 1440 && (
                                <>
                                  <a
                                    className="div-7"
                                    href="https://aave.com/privacy-policy"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Privacy
                                  </a>

                                  <a
                                    className="text-wrapper-39"
                                    href="https://aave.com/privacy-policy"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Policy
                                  </a>
                                </>
                              )}

                              {screenWidth >= 1440 && (
                                <a
                                  className="text-wrapper-38"
                                  href="https://aave.com/privacy-policy"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  Privacy Policy
                                </a>
                              )}
                            </div>
                          </div>

                          <div
                            className="item-11"
                            style={{
                              padding:
                                screenWidth >= 991 && screenWidth < 1440
                                  ? "0px 0px 0.79px"
                                  : screenWidth >= 1440
                                    ? "0px 0px 0.8px"
                                    : undefined,
                            }}
                          >
                            <div
                              className="component-61"
                              style={{
                                flexDirection:
                                  screenWidth >= 991 && screenWidth < 1440
                                    ? "column"
                                    : undefined,
                                gap:
                                  screenWidth >= 991 && screenWidth < 1440
                                    ? "1px"
                                    : undefined,
                              }}
                            >
                              <a
                                className="div-7"
                                href="https://aave.com/terms-of-service"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                {screenWidth >= 1440 && <>Terms of Use</>}

                                {screenWidth >= 991 && screenWidth < 1440 && (
                                  <>Terms of</>
                                )}
                              </a>

                              {screenWidth >= 991 && screenWidth < 1440 && (
                                <a
                                  className="text-wrapper-39"
                                  href="https://aave.com/terms-of-service"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  Use
                                </a>
                              )}
                            </div>
                          </div>

                          <div className="item-2">
                            <div className="component-62">
                              <div className="div-7">Contact</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container-162">
                  <a
                    className="component-1-388-wrapper"
                    href="https://x.com/aave"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Component1489 className="component-1-489" />
                  </a>

                  <a
                    className="link-25"
                    href="https://discord.com/invite/aave"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {screenWidth >= 991 && screenWidth < 1440 && (
                      <Component1553 className="component-46" />
                    )}

                    {screenWidth >= 1440 && (
                      <Component1389 className="component-46" />
                    )}
                  </a>

                  <a
                    className="component-1-491-wrapper"
                    href="https://hey.xyz/u/aave"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Component1554 className="component-47" />
                  </a>

                  <a
                    className="component-1-391-wrapper"
                    href="https://github.com/aave"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Component1492 className="component-47" />
                  </a>

                  <a
                    className="component-1-564-wrapper"
                    href="https://dune.com/aavelabs"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Component1500 className="component-1-500" />
                  </a>
                </div>
              </footer>

              <div
                className="container-169"
                style={{
                  width:
                    screenWidth >= 991 && screenWidth < 1440
                      ? "991px"
                      : screenWidth >= 1440
                        ? "1082px"
                        : undefined,
                }}
              >
                <div
                  className="component-63"
                  style={{
                    maxWidth:
                      screenWidth >= 991 && screenWidth < 1440
                        ? "991px"
                        : screenWidth >= 1440
                          ? "1082px"
                          : undefined,
                  }}
                >
                  <div
                    className="overlay-gradient-3"
                    style={{
                      width:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "963px"
                          : screenWidth >= 1440
                            ? "1054px"
                            : undefined,
                    }}
                  />
                </div>

                <div className="component-64">
                  <div
                    className="overlay-gradient-4"
                    style={{
                      width:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "963px"
                          : screenWidth >= 1440
                            ? "1054px"
                            : undefined,
                    }}
                  />
                </div>

                <div className="component-65">
                  <div
                    className="overlay-gradient-5"
                    style={{
                      width:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "963px"
                          : screenWidth >= 1440
                            ? "1054px"
                            : undefined,
                    }}
                  />
                </div>

                <div className="component-66">
                  <div
                    className="overlay-gradient-6"
                    style={{
                      width:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "963px"
                          : screenWidth >= 1440
                            ? "1054px"
                            : undefined,
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className="header-wrapper"
        style={{
          overflowY: screenWidth < 991 ? "scroll" : undefined,
          padding:
            screenWidth >= 991 && screenWidth < 1440
              ? "0px 0px 24px"
              : screenWidth >= 1440
                ? "0px 179px 24px"
                : undefined,
          position:
            screenWidth < 991
              ? "absolute"
              : screenWidth >= 1440 ||
                  (screenWidth >= 991 && screenWidth < 1440)
                ? "fixed"
                : undefined,
          width:
            screenWidth < 991
              ? "478px"
              : screenWidth >= 991 && screenWidth < 1440
                ? "991px"
                : screenWidth >= 1440
                  ? "1440px"
                  : undefined,
        }}
      >
        <header
          className="header-3"
          style={{
            gap:
              screenWidth < 991
                ? "304px"
                : screenWidth >= 991 && screenWidth < 1440
                  ? "322.83px"
                  : screenWidth >= 1440
                    ? "413.83px"
                    : undefined,
            padding:
              screenWidth < 991
                ? "4px 24px"
                : screenWidth >= 1440 ||
                    (screenWidth >= 991 && screenWidth < 1440)
                  ? "24px 48px 0px"
                  : undefined,
            width:
              screenWidth < 991
                ? "478px"
                : screenWidth >= 991 && screenWidth < 1440
                  ? "991px"
                  : screenWidth >= 1440
                    ? "1082px"
                    : undefined,
          }}
        >
          <div className="container-170">
            <a
              className="component-1-415-wrapper"
              href="https://aave.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Component1415 className="component-1-415" />
            </a>
          </div>

          <Link
            className="button-5"
            style={{
              alignItems: screenWidth < 991 ? "flex-start" : undefined,
              backgroundColor: screenWidth < 991 ? "#201c1c" : undefined,
              borderRadius: screenWidth < 991 ? "50px" : undefined,
              display: screenWidth < 991 ? "flex" : undefined,
              flexDirection: screenWidth < 991 ? "column" : undefined,
              height:
                screenWidth < 991
                  ? "33px"
                  : screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                    ? "32.68px"
                    : undefined,
              left: screenWidth < 991 ? "364px" : undefined,
              padding: screenWidth < 991 ? "8.15px 16px 9.83px" : undefined,
              position:
                screenWidth < 991
                  ? "absolute"
                  : screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                    ? "relative"
                    : undefined,
              top: screenWidth < 991 ? "15px" : undefined,
              width:
                screenWidth < 991
                  ? "102px"
                  : screenWidth >= 1440 ||
                      (screenWidth >= 991 && screenWidth < 1440)
                    ? "478.17px"
                    : undefined,
            }}
            to={getLinkTo()}
          >
            {screenWidth < 991 && (
              <div className="text-6">&nbsp;&nbsp;Connect</div>
            )}

            {(screenWidth >= 1440 ||
              (screenWidth >= 991 && screenWidth < 1440)) && (
              <>
                <Link className="open-app-wrapper" to={getLinkTo()}>
                  <Link className="open-app" to={getLinkTo()}>
                    Connect
                  </Link>
                </Link>

                <div className="container-171">
                  <button className="button-4">
                    <div className="text-wrapper-41">Products</div>
                  </button>

                  <button className="button-4">
                    <div className="text-wrapper-41">Resources</div>
                  </button>

                  <button className="button-4">
                    <div className="text-wrapper-41">Developers</div>
                  </button>
                </div>
              </>
            )}
          </Link>
        </header>
      </div>
    </div>
  );
};
