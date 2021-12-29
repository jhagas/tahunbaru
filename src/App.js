import "./App.css";
import React from "react";

const remaining = () => {
  const tahunbaru = "Jan 01 2022";
  let difference = new Date(tahunbaru) - new Date();

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

function Countdown() {
  const [timeLeft, setTimeLeft] = React.useState(remaining());

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(remaining());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      {timeLeft ? (
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
      ) : (
        <div className="bg">
          <h1>UBAH SEKAREPMU RUD..</h1>
        </div>
      )}
    </>
  );
}

function App() {
  return <Countdown />;
}

export default App;
