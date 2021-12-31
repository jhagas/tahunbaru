import "./App.css";
import React from "react";
import Popup from "reactjs-popup";
import Fab from "@mui/material/Fab";
import ChatIcon from "@mui/icons-material/Chat";
import NYpic from "./newyearpic.png";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const tahunbaru = "Jan 01 2022";
const remaining = () => {
  const difference = new Date(tahunbaru) - new Date();

  let timeLeft = false;

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

function Wit() {
  const [open, setOpen] = React.useState(false);
  const [opened, setOpened] = React.useState(false);
  const closeModal = () => setOpen(false);

  const WIT =
    new Date(tahunbaru + "UTC+9").getTime() ===
    new Date(Math.floor(+new Date() / 600000) * 600000).getTime();
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (WIT === true && opened === false) {
        setOpen(true);
        setOpened(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <div>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <h1 className="header">MEMASUKI TAHUN BARU 2022 DI WILAYAH WIT</h1>
          <img
            width="100%"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Timezones2008_UTC%2B9_gray.png/1200px-Timezones2008_UTC%2B9_gray.png"
            alt="Wilayah Waktu Indonesia Timur dalam peta"
          />
          <p className="content">
            dan juga untuk Tokyo, Jepang 🇯🇵, serta seluruh wilayah UTC+9️
          </p>
          <button type="button" className="okmodal" onClick={closeModal}>
            OK
          </button>
        </div>
      </Popup>
    </div>
  );
}

function Wita() {
  const [open, setOpen] = React.useState(false);
  const [opened, setOpened] = React.useState(false);
  const closeModal = () => setOpen(false);

  const WIT =
    new Date(tahunbaru + "UTC+8").getTime() ===
    new Date(Math.floor(+new Date() / 600000) * 600000).getTime();
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (WIT === true && opened === false) {
        setOpen(true);
        setOpened(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <div>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <h1 className="header">MEMASUKI TAHUN BARU 2022 DI WILAYAH WITA</h1>
          <img
            width="100%"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Timezones2008_UTC%2B8_gray.png/1200px-Timezones2008_UTC%2B8_gray.png"
            alt="Wilayah Waktu Indonesia Tengah dalam peta"
          />
          <p className="content">
            dan juga untuk China 🇨🇳️, Malaysia 🇲🇾️, Singapura 🇸🇬️, serta seluruh
            wilayah UTC+8
          </p>
          <button type="button" className="okmodal" onClick={closeModal}>
            OK
          </button>
        </div>
      </Popup>
    </div>
  );
}

function useToggle(initialValue = true) {
  const [value, setValue] = React.useState(initialValue);
  const toggle = React.useCallback(() => {
    setValue((v) => !v);
  }, []);
  return [value, toggle];
}

function Chat() {
  const [isHidden, toggleIsHidden] = useToggle();
  return (
    <>
      <div id="tlkcont" className={isHidden ? "hidden" : null}>
        <iframe
          title="Chat"
          src="https://minnit.chat/tahunbaruan?embed&&nickname="
          style={{
            border: "none",
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
      <div className="fab">
        <Fab
          color="primary"
          aria-label="chat"
          variant="extended"
          onClick={toggleIsHidden}
        >
          <ChatIcon />
          <p className="fab-text">Public Chat</p>
        </Fab>
      </div>
    </>
  );
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function Tahunbaru () {
  const { width, height } = useWindowSize();
  return (
        <div className="bg">
          <Confetti
            width={width}
            height={height}
            opacity="0.7"
            recycle={false}
            numberOfPieces="500"
            tweenDuration="7000"
          />
          <div className="NYpic">
            <img
              width="100%"
              src={NYpic}
              alt="Girl with baloon and 2022 numbers floating around indicating hope for this year"
            ></img>
          </div>
          <div className="selamat">
            <h2>SELAMAT TAHUN BARU 2022!!</h2>
          </div>
        </div>
  )

}

function Countdown() {
  const [timeLeft, setTimeLeft] = React.useState(true);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(remaining());
    }, 1000);
    const loading = async function loading() {
      await sleep(2000);
      setLoading(false);
    };
    loading();
    return () => clearTimeout(timer);
  });

  if (isLoading) {
    return (
      <div className="All">
        <h1>Application Loading...</h1>
      </div>
    );
  }

  if (
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds <= 10
  ) {
    return (
      <div className="All">
        <div
          className="flex-container"
          style={{
            display: "flex",
            margin: "auto",
          }}
        >
          <h1
            style={{
              fontSize: "5em",
            }}
          >
            {timeLeft.seconds}
          </h1>
        </div>
      </div>
    );
  }

  return (
    <>
      {timeLeft ? (
        <>
          <div className="All">
            <h1>TAHUN BARU TINGGAL</h1>
            <div
              className="flex-container"
              style={{
                display: "flex",
                margin: "auto",
              }}
            >
              <div className="box days">
                <h1>{timeLeft.days}</h1>
                <h3>hari</h3>
              </div>
              <span>:</span>
              <div className="box hours">
                <h1>{timeLeft.hours}</h1>
                <h3>jam</h3>
              </div>
              <span>:</span>
              <div className="box minutes">
                <h1>{timeLeft.minutes}</h1>
                <h3>menit</h3>
              </div>
              <span>:</span>
              <div className="box seconds">
                <h1>{timeLeft.seconds}</h1>
                <h3>detik</h3>
              </div>
            </div>
          </div>
          <Wit />
          <Wita />
        </>
      ) : (
        <Tahunbaru />
      )}
    </>
  );
}

function About() {
  return (
    <div className="about">
      <h5>Pasti lu jomblo kan? sama gue juga bwang..</h5>
      <p>
        This site is open-source (MIT License), head over to{" "}
        <a href="https://github.com/jhagas/tahunbaru">Git Repo</a> to learn
        more.
      </p>
    </div>
  );
}

function App() {
  return (
    <>
      <Countdown />
      <Chat />
      <About />
    </>
  );
}

export default App;
