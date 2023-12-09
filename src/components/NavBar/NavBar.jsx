import './NavBar.css'
const NavBar = () => {

    return (
        <div className="navBar">
            <h3 className='Logo'>Anywhere Fitness</h3>
            <div className='LoginButtonsConainer'>
                <button className='LoginButton'>Sign Up</button>
                <button className='LoginButton'>Log In</button>
            </div>
        </div>
    )
}
export default NavBar