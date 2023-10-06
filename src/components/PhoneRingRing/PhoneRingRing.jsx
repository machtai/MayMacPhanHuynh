// PhoneRingRingComponent.js
import React from 'react';
import "./PhoneRingRing.css"

const PhoneRingRingComponent = () => {

  const handlePhoneClick = () => {
    window.location.href = 'tel:YOUR_PHONE_NUMBER';
  }

  return (
    <div className="phone-ring-ring-container" onClick={handlePhoneClick}>
      <div className="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
        <div className="coccoc-alo-ph-circle"></div>
        <div className="coccoc-alo-ph-circle-fill"></div>
        <div className="coccoc-alo-ph-img-circle"></div>
      </div>
    </div>
  );
};

export default PhoneRingRingComponent;
