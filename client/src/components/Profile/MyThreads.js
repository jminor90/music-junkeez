import "../Genre/Genre.css";

const MyThreads = ({ getMyPosts }) => {
  if (!getMyPosts.length) {
    return <h3>No Threads Yet</h3>;
  }

  return (
    <div className="threadContainerFull">

      {
        getMyPosts.map((posts) => (
          <div key={posts._id} className="threadContainer">
            <div className="profileComponentHeader">
            <div className="profileText">
            <h5>Toony
              {posts.Author} -</h5>
              </div>
              <div className="spanTitleContainer">
              <span className="spanTitle">
                {posts.title}
              </span>
              </div>
              </div>

            <div className="profileElementContainer">
              <p>{posts.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
};



export default MyThreads;