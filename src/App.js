import React, { useState, useEffect } from "react";
import "./App.css";

import portrait from "./portrait.jpg";
import architecture from "./architecture.jpg";
import travel from "./Travel.jpg";

import test2 from "./test2.jpg";


function App() {
  const [open, setOpen] = useState(false);
  const [openButton, setOpenButton] = useState(false);
  const [hiddenPhoto, setHiddenPhoto] = useState(true);
  const [pageIsHidden, setPageIsHidden] = useState(true);
  const [pageIsHidden2, setPageIsHidden2] = useState(true);
  const [pageIsHidden3, setPageIsHidden3] = useState(true);

  function delay(delayInms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }

  async function start() {
    const wait = await delay(500);
    setOpen(true);
    const wait2 = await delay(1100);
    setPageIsHidden(false);
    const wait3 = await delay(3950);
    setHiddenPhoto(false);
    const wait4 = await delay(900);
    setPageIsHidden2(false);
    const wait5 = await delay(4200);
    setHiddenPhoto(null);
    const wait6 = await delay(650);
    setPageIsHidden3(false);
  }
  async function stop() {
    const wait = await delay(16000);
    setOpen(false);
    const wait2 = await delay(1300);
    // setHiddenPhoto(true);
  }
  async function stopButton() {
    setOpen(false);
    const wait2 = await delay(1300);
  }

  useEffect(() => {
    start();
    if (!openButton) stop();
  }, []);

  return (
    <div>
      <div className="bg-image"></div>
      {open ? (
        <div className=" open popup__area">
          <div className="popup__body ">
            <div className="popup__content">
              <button onClick={() => stopButton()}>&times;</button>
              <div className="book">
                <span className="page turn">
                  {!pageIsHidden && (
                    <div className="second__photo">Portrait Photography</div>
                  )}
                </span>

                <span className="page turn">
                  {hiddenPhoto ? (
                    <img className="first__photo" src={portrait} />
                  ) : hiddenPhoto === null ? (
                    <img className="first__photo" src={travel} />
                  ) : (
                    <img
                      className="first__photo"
                      src={architecture}
                      alt="suzuki"
                    />
                  )}
                </span>
                {pageIsHidden2 ? (
                  <span className="page turn">
                    <img className="first__photo" src={portrait} />
                  </span>
                ) : (
                  <span className="page turn">
                    <div className="second__photo">
                      Architectural Photography
                    </div>
                  </span>
                )}
                {pageIsHidden3 ? (
                  <span className="page turn">
                    <img
                      className="first__photo"
                      src={architecture}
                      alt="suzuki"
                    />
                  </span>
                ) : (
                  <span className="page turn">
                    {!pageIsHidden && (
                      <div className="second__photo">Travel Photography</div>
                    )}
                  </span>
                )}
                <span className="cover" />
                <span className="cover  turn " />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" open1 popup__area">
          <div className="popup__body1 ">
            <div className="popup__content1">
              <div className="book1">
                <span className="page1 turn1">
                  {!pageIsHidden && open ? (
                    <div className="second__photo">Portrait Photography</div>
                  ) : (
                    <div className="second__photo">Travel Photography</div>
                  )}
                </span>

                <span className="page1 turn1">
                  {hiddenPhoto ? (
                    <img className="first__photo" src={portrait} />
                  ) : hiddenPhoto === null ? (
                    <img className="first__photo" src={travel} />
                  ) : (
                    <img
                      className="first__photo"
                      src={architecture}
                      alt="suzuki"
                    />
                  )}
                </span>
                {pageIsHidden2 ? (
                  <span className="page1 turn1">
                    <img className="first__photo" src={portrait} />
                  </span>
                ) : (
                  <span className="page1 turn1">
                    <div className="second__photo">
                      Architectural Photography
                    </div>
                  </span>
                )}
                {pageIsHidden3 ? (
                  <span className="page1 tur1n">
                    <img
                      className="first__photo"
                      src={architecture}
                      alt="suzuki"
                    />
                  </span>
                ) : (
                  <span className="page1 turn1">
                    {!pageIsHidden && (
                      <div className="second__photo">Travel Photography</div>
                    )}
                  </span>
                )}
                <span className="cover1" />
                <span className="cover1  turn1 " />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
