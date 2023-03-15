import { FaArrowDown } from "react-icons/fa";
import React from 'react';
import { useQuery } from '@apollo/client';

import MyThreads from '../components/Profile/MyThreads';


import { GET_MY_POSTS } from '../utils/queries';


function Profile() {

    const { loading, data } = useQuery(GET_MY_POSTS);
    const getMyPosts = data?.getMyPosts || [];

    return (
        <div>
    <main>
      <div className="flex-row justify-center">

          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
            <div className="profileHeader">
            <h5>My Threads &nbsp;</h5> <FaArrowDown className="faArrowDown"/>
            </div>
            <MyThreads
              getMyPosts={getMyPosts}
              title="Some Feed for Thought(s)..."
            />
            </>
          )}

      </div>
    </main>
        </div>
    );
}

export default Profile;