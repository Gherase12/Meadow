import React from "react";

function LoadeingOverlay() {
  return (
    <div className='fixed inset-0 bg-blue-2/20 border-2 z-50 flex items-center justify-center '>
      <div className='loading-animation'>
        <div className='loading-circle loading-circle-2'></div>
        
      </div>
    </div>
  );
}

export default LoadeingOverlay;
