import React from 'react';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
import Title from '../title/Title';

function ContactDashboard() {
    return (
        <section>
            <Title title="Get In Touch" />
            <ContactDetails />

            <ContactForm />

        </section>
    )

}

export default ContactDashboard