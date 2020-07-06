import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { FaAddressBook, FaPhoneSquareAlt } from 'react-icons/fa';
import Title from '../title/Title';

function ContactDetails() {
    return (<div>
        <div className="align">

            <FaAddressBook />Address
            <p>
                NaviRow Services
                10,MMG,Ahmedpur
                Bhopal 462026
</p>

            <FaPhoneSquareAlt />Mobile
                <p>
                7415552290
</p>
            <p>Follow Us On:</p>
            <SocialIcon url="http://facebook.com/jaketrent" />

            <SocialIcon url="http://linkedin.com/in/jaketrent" />
            <SocialIcon url="http://twitter.com/jaketrent" />

        </div>
    </div>)
}
export default ContactDetails
