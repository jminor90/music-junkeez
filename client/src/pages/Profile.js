
import React from 'react';
import { useQuery } from '@apollo/client';

import MyThreads from '../components/Profile/MyThreads';


import { GET_MY_POSTS } from '../utils/queries';


function Profile() {

    const { loading, data } = useQuery(GET_MY_POSTS);
    const getMyPosts = data?.getMyPosts || [];

    return (
        <div>
            <h1>Profile</h1>
    <main>
      <div className="flex-row justify-center">

        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <MyThreads
              getMyPosts={getMyPosts}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
        </div>
    );
}

export default Profile;


