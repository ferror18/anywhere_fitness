import Hero from '../../components/Hero/Hero.jsx';
import NavBar from '../../components/NavBar/NavBar.jsx'
import './Home.css'

const Home = () => {

    return (
        <div className='homeContainer'>
            <NavBar/>
            <Hero/>
        </div>
    )
}

export default Home;