import Thread from "./Thread";

const Feed = ({ user, setOpenPopUp, filteredThreads }) => {
    return (
        <div className="feed">
            {filteredThreads && filteredThreads.map(filteredThread =>
                <Thread
                    key={filteredThread.id}
                    user={user}
                    setOpenPopUp={setOpenPopUp}
                    filteredThread={filteredThread}
                />)}
        </div>
    );
}

export default Feed;
