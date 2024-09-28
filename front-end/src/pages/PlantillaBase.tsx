import React from 'react';
import Header from '../components/Header';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';
import "../styles/plantillaBase.css";

const PlantillaBase: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <Timeline />
            </main>
            <Footer />
        </>
    );
};

export default PlantillaBase;
aaa