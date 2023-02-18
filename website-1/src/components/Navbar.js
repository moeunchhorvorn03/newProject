export default function Navbar(){
    return (
        <section className="navbar">
            <div className="navbar-title">
                <div className="white">CHIIVORN</div>
                <div className="red" >MOVIES.HD</div>
            </div>
            <div className="notification-bar">
                <span class="material-symbols-outlined">notification_add</span>
            </div>
            <div className="acc-bar">
                <span class="material-symbols-outlined">account_circle</span>
            </div>
            <div className="menu-bar">
                <span class="material-symbols-outlined">menu</span>
            </div>
            <div className="btn-chevron">
            <span class="material-symbols-outlined">chevron_left</span>
            <span class="material-symbols-outlined">chevron_right</span>
            </div>
            <div className="search-box">
            <span id="search-btn" class="material-symbols-outlined">search</span>
            <small>search any movies...</small>
            </div>
           
           
        </section>
    )
}