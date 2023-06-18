
import bakery from '../../assets/thumbnails/bakery.png';
import animatedHamburgers from '../../assets/thumbnails/animatedHamburgers.png';
import portfolio from '../../assets/thumbnails/portfolio.png';
import photogallery from '../../assets/thumbnails/photogallery.png';
import weatherApp from '../../assets/thumbnails/weatherApp.jpg';
import spaceRocket from '../../assets/thumbnails/spaceRocket.png';
import * as SiIcons from 'react-icons/si';

export const ProjectsData = [
    {
        name: 'Portfolio',
        source: 'https://github.com/AleksandraMotor/portfolio',
        live_demo: 'https://aleksandramotor.github.io/portfolio/',
        thumbnail: portfolio,
        technologies: [
            <SiIcons.SiHtml5/>,
            <SiIcons.SiJavascript/>,
            <SiIcons.SiReact/>,
            <SiIcons.SiTypescript/>
        ]
    },
    {
        name: 'Cupcake Bakery',
        // source: 'https://github.com/AleksandraMotor/portfolio',
        // live_demo: 'https://aleksandramotor.github.io/portfolio/',
        thumbnail: bakery
    },
    {
        name: 'Animated Hamburgers',
        source: 'https://github.com/AleksandraMotor/animatedHamburgers',
        live_demo: 'https://aleksandramotor.github.io/animatedHamburgers/',
        thumbnail: animatedHamburgers,
        technologies: [<SiIcons.SiHtml5/>, <SiIcons.SiJavascript/>]
    },
    {
        name: 'Photogallery',
        source: 'https://github.com/AleksandraMotor/photogallery',
        live_demo: 'https://aleksandramotor.github.io/photogallery',
        thumbnail: photogallery
    },
    {
        name: 'Weather App',
        source: 'https://github.com/AleksandraMotor/weather-app',
        // live_demo: 'https://github.com/AleksandraMotor/weather-app',
        thumbnail: weatherApp
    },
    {
        name: 'space Rocket',
        source: 'https://github.com/AleksandraMotor/spaceRocket',
        // live_demo: 'https://aleksandramotor.github.io/portfolio/',
        thumbnail: spaceRocket
    },
    {
        name: 'css Design Samplescss Design Samples css Design Samplescss Design Samples',
        source: 'https://github.com/AleksandraMotor/css-design-samples',
        // live_demo: 'https://aleksandramotor.github.io/portfolio/',
        // thumbnail: bakery
    },
    {
        name: 'Plan Shop Chloris',
        // source: 'https://github.com/AleksandraMotor/chloris',
        // live_demo: 'https://aleksandramotor.github.io/portfolio/',
        // thumbnail: bakery
    }
];
