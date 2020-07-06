import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaRegHospital, FaChalkboardTeacher } from 'react-icons/fa';
import Title from '../title/Title';

class DeliveryService extends Component {


    constructor(props) {
        super(props)

        this.state = {
            services: [
                {
                    icon: <FaCocktail />,
                    title: "Web Development",
                    info: "Lorem free cocktails available.Its pleasure to have you here."
                },
                {
                    icon: <FaHiking />,
                    title: "App Development",
                    info: "Lorem free cocktails available.Its pleasure to have you here."
                },
                {
                    icon: <FaShuttleVan />,
                    title: "Software Development",
                    info: "Lorem free cocktails available.Its pleasure to have you here."
                },
                {
                    icon: <FaChalkboardTeacher />,
                    title: "Digital Marketing/SEO/Social Media Marketing",
                    info: "Lorem free cocktails available.Its pleasure to have you here."
                },
                {
                    icon: <FaChalkboardTeacher />,
                    title: "Corporate Services/Branding",
                    info: "Lorem free cocktails available.Its pleasure to have you here."
                },
                {
                    icon: <FaRegHospital />,
                    title: "HealthCare",
                    info: "Lorem free cocktails available.Its pleasure to have you here."
                }


            ]
        }
    }

    render() {
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>

                        </article>
                    })}

                </div>
            </section>
        )
    }


}

export default DeliveryService