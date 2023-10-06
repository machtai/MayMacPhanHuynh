import React from 'react';
import PhoneRingRingComponent from '../PhoneRingRing/PhoneRingRing';


export default function ColumnContact() {
const imgPhone = [
    "https://giatlapewpew.com/wp-content/plugins/button-contact-vr/img/phone.png",
    "https://giatlapewpew.com/wp-content/plugins/button-contact-vr/img/zalo.png"
]

    return (
        <div className="">

            <PhoneRingRingComponent items={imgPhone}/>
            
        </div>
    );
}
