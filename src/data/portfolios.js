import web1 from '../img/portImages/web1.png';
import blog from '../img/portImages/blog.png';
import mmasgpt3 from '../img/portImages/mmasgpt3.png';
import realstate from '../img/portImages/realstate.png';
import movie from '../img/portImages/movie.png';
import booking from '../img/portImages/booking.png';
import dash from '../img/portImages/dash.png';

const portfolios = [
    {
        id: 1,
        category: 'React JS',
        image: web1,
        link1: 'https://github.com/Eng-MustafaMasoud/react-social',
        link2: 'https://www.google.com',
        title: 'Responsive social-app',
        text: 'Created with React and style-components.'
    },
    {
        id: 2,
        category: 'Next JS',
        image: realstate,
        link1: 'https://github.com/Eng-MustafaMasoud/mmas.realstate',
        link2: 'https://mmas-realstate.vercel.app/',
        title: 'Using Next js',
        text: 'realstate application using rapid api , chakra-ui '
    },
    {
        id: 3,
        category: 'React JS',
        image: mmasgpt3,
        link1: 'https://mmas-gpt3.netlify.app/',
        link2: 'https://mmas-gpt3.netlify.app/',
        title: 'Figma design to a real app',
        text: 'using figma design and turn it to a real app using react js'
    },
    {
        id: 4,
        category: 'React JS',
        image: movie,
        link1: 'https://github.com/Eng-MustafaMasoud/Modern_MovieApp',
        link2: 'https://Eng-MustafaMasoud.github.io/Modern_MovieApp',
        title: 'Intertainment Hub',
        text: 'React-React Hooks -Material-ui'
    },
    {
    id: 5,
    category: 'React JS',
    image: blog,
    link1: 'https://www.google.com',
    link2: 'https://www.google.com',
    title: ' personal Blog ',
    text: 'a daily blog web site'
},
   
    {
        id: 6,
        category: 'React JS',
        image: booking,
        link1: 'https://github.com/Eng-MustafaMasoud/booking_app',
        link2: 'https://Eng-MustafaMasoud.github.io/booking_app',
        title: ' Booking Website',
        text: 'Created using different technologies such as Material UI, Reactjs and React Hooks and more...'
    },
    {
        id: 7,
        category: 'React JS',
        image: dash,
        link1: 'https://github.com/Eng-MustafaMasoud/admin-dashboard',
        link2: 'https://Eng-MustafaMasoud.github.io/admin-dashboard',
        title: 'Admin dashboard',
        text: 'Created using different technologies such as Material UI, Reactjs and React Hooks and more...'
    }
]

export default portfolios;