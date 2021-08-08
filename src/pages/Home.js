import React, { Component } from 'react'
import { Header } from '../components';
import Footer from "../components/Footer";
import Particles from 'react-particles-js';


export default class Home extends Component {

    render() {
        return (
            <div>
                <Particles
                    className="particles-canvas"
                    params={{
                        particles: {
                            number: {
                                value: 30,
                                density: {
                                    enable: true,
                                    value_area: 900
                                }
                            },
                            shape: {
                                type: "circle",
                                stroke: {
                                    width: 6,
                                    color: "#f9ab00"
                                }
                            }
                        }
                    }} />
                <Header />
                <Footer />
            </div>

        )
    }
}
