const Header = ( { user, viewThreadsFeed, setViewThreadsFeed} ) => {
    return (
        <header>
            <div className="info-container">
                <div className="user-info-container">
                    <h1>{user.username}</h1>
                    <p>{user.handle} <span className="threads-info">threads.net</span></p>
                </div>
            </div>
            <div className="img-container">
                <img  src={user.img} alt="profile avatar"/>
            </div>
            <p>{user.bio}</p>
            <div className="sub-info-container">
                <p className="sub-text">{user.followers.length} followers •
                    <a href={user.link}> {user.link.replace("https://www.", "")}</a>
                </p>
            </div>
            <button
                className="primary"
                onClick={() => navigator.clipboard.writeText('url')}
            >
                Share Profile
            </button>
            <div className="button-container">
                {/*TOFIX*/}
                <button className={viewThreadsFeed ? "current" : null} onClick={() => setViewThreadsFeed(true)}>Threads</button>
                <button className={viewThreadsFeed ? "current" : null} onClick={() => setViewThreadsFeed(false)}>Replies</button>
            </div>
        </header>
    );
}
export default Header;
