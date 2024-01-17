import {useState, useEffect} from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Feed from "./components/Feed";
import WriteIcon from "./components/WriteIcon";
import PopUp from "./components/PopUp";

const App = () => {
    const [ user, setUser ] = useState(null)
    const [threads, setThreads] = useState([])
    const [ viewThreadsFeed, setViewThreadsFeed ] = useState(true)
    const [filteredThreads, setFilteredThreads] = useState([])
    const [ openPopUp, setOpenPopUp ] = useState(false)

    const userId = "6d7e0175-2613-4d29-ac67-215280f0f0df"

    const getUser = async () => {
        const response = await fetch(`http://localhost:3000/users?user_uuid=${userId}`)
        const data = await response.json()
        setUser(data[0])
        try {

        } catch (error) {
            console.error(error)
        }
    }

    const getThreads = async () => {
        try {
            const response = await fetch(`http://localhost:3000/threads?thread_from=${userId}`)
            const data = await response.json()
            setThreads((data))
        } catch (error) {
            console.error(error)
        }
    }

    const getThreadsFeed = () => {
        if (viewThreadsFeed) {
            const standAloneThreads = threads?.filter(thread => thread.reply_to === null)
            setFilteredThreads(standAloneThreads)
        }
        if (!viewThreadsFeed) {
            const replyThreads = threads?.filter(thread => thread.reply_to !== null)
            setFilteredThreads(replyThreads)
        }
    }

    useEffect(() => {
        getUser()
        getThreads()
    }, [])

    useEffect(() => {
        getThreadsFeed()
    },[user, threads, viewThreadsFeed])

    console.log(filteredThreads)

    return (
        <>
            { user && <div className="app">
                <Nav url={user.instagram_url}/>
                <Header
                    user={user}
                    viewThreadsFeed={viewThreadsFeed}
                    setViewThreadsFeed={setViewThreadsFeed}
                />
                <Feed
                    user={user}
                    setOpenPopUp={setOpenPopUp}
                    filteredThreads={filteredThreads}
                />
                {openPopUp &&
                    <PopUp
                        user={user}
                        setOpenPopUp={setOpenPopUp}
                    />
                }
                <div onClick={() => setOpenPopUp(true)}>
                    <WriteIcon/>
                </div>
            </div> }
        </>
    );
}

export default App;
