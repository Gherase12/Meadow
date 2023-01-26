import React, { useEffect } from "react";
import { ethos } from "ethos-connect";

function Timeout() {
    const { wallet } = ethos.useWallet()
  

  useEffect(() => {
    const interval = setInterval(() => {
      const connectedAt = localStorage.getItem("connectedAt");
      if (connectedAt && Date.now() - connectedAt > 3600000) {
        wallet.disconnect();
        localStorage.removeItem("connectedAt");
        clearInterval(interval);
      }
    }, 5000); // check every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
     
    </div>
  )
}

export default Timeout