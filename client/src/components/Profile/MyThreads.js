import React from 'react';

const MyThreads = ({ getMyPosts }) => {
  if (!getMyPosts.length) {
    return <h3>No Threads Yet</h3>;
  }

  return (
    <div>

      {
        getMyPosts.map((posts) => (
          <div key={posts._id} className="threadContainer">
            <h4 className="smallText">
              {posts.Author}<br />
              <span>
                {posts.title}
              </span>
            </h4>
            <div className="card-body bg-dark p-2">
              <p>{posts.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
};



export default MyThreads;