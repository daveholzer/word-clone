import React from "react";

function WinBanner({tries}) {
  return (
  <div className="happy banner">
    <p>
      <strong>Congratulations!</strong> Got it in <strong>{`${tries} guesses`}</strong>
    </p>
  </div>
    );
}

export default WinBanner;
