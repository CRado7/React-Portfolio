import React, { useState } from 'react';
import CherryBlossom from '../assets/parlor/CherryBlossom.png';
import RavenRising from '../assets//parlor/RavenRising.png';
import Samuri from '../assets/parlor/Samuri.png';
import SpaceBees from '../assets/parlor/SpaceBees.png';
import SpaceCowboy from '../assets/parlor/SpaceCowboy.png';
import StrangeHoliday from '../assets/parlor/StrangeHoliday.png';
import Sunrise from '../assets/parlor/Sunrise.png';
import Valhalla from '../assets/parlor/Valhalla.png';
import WesternSkies from '../assets/parlor/WesternSkies.png';
import '../styles/skiCard.css';

const designs = [
    {
        id: 1,
        name: 'Cherry Blossom',
        image: CherryBlossom,
        description: 'The Cherry Blossom design is inspired by the beauty of the Japanese cherry blossom tree. The design features a pink and white color palette with delicate cherry blossom flowers.',
    },
    {
        id: 2,
        name: 'Raven Rising',
        image: RavenRising,
        description: 'The Raven Rising design is inspired by the Nordic myth of the raven. The design features a black and white color palette with a bold raven motif.',
    },
    {
        id: 3,
        name: 'Samuri',
        image: Samuri,
        description: 'The Samurai design is inspired by the ancient Japanese warrior. The design features a red and black color palette with a fierce samurai warrior motif.',
    },
    {
        id: 4,
        name: 'Space Bees',
        image: SpaceBees,
        description: 'The Space Bees design is inspired by the beauty of the cosmos. The design features a blue and yellow color palette with a whimsical bee motif.',
    },
    {
        id: 5,
        name: 'Space Cowboy',
        image: SpaceCowboy,
        description: 'The Space Cowboy design is inspired by the wild west. The design features a brown and blue color palette with a cowboy motif.',
    },
    {
        id: 6,
        name: 'Strange Holiday',
        image: StrangeHoliday,
        description: 'The Strange Holiday design is inspired by the surreal world of dreams. The design features a purple and green color palette with a dreamy holiday motif.',
    },
    {
        id: 7,
        name: 'Sunrise',
        image: Sunrise,
        description: 'The Sunrise design is inspired by the beauty of the sun rising over the mountains. The design features a yellow and orange color palette with a mountain motif.',
    },
    {
        id: 8,
        name: 'Valhalla',
        image: Valhalla,
        description: 'The Valhalla design is inspired by the Norse myth of Valhalla. The design features a blue and white color palette with a bold Valhalla motif.',
    },
    {
        id: 9,
        name: 'Western Skies',
        image: WesternSkies,
        description: 'The Western Skies design is inspired by the beauty of the American west. The design features a red and blue color palette with a western motif.',
    },
];


export default function SkiDesigns() {
    const [selectedImage, setSelectedImage] = useState(CherryBlossom);

    const handleItemClick = (id) => {
        const selectedDesign = designs.find((design) => design.id === id);
        console.log("Selected design:", selectedDesign);
        setSelectedImage(selectedDesign.image);
    };

    let designList = null;
    if (designs.length) {
        designList = designs.map((design) => (
            <li key={design.id} className="design-names">
                <button onClick={() => handleItemClick(design.id)}>
                    {design.name}
                </button>
            </li>
        ));
    }

    return (
        <div className="carousel">
            <div className="carousel-list">
                <ul className="design-list">{designList}</ul>
            </div>
            <div className="carousel-designs">
                {selectedImage && <img className="design" src={selectedImage} alt="Selected Design" />}
            </div>
        </div>
    );
}