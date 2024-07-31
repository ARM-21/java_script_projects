import './navbar.css';

export default function Navbar({src,loading}) {
return (
    <header>
        <nav>
            <h2><a href='#'>Where in the world</a></h2>
            <span className='dark_mode_enabler'>
                <img src={src} alt="dark-mode-img"   />
                <p>Dark mode</p>
            </span>
        </nav>
        
    </header>
)
}