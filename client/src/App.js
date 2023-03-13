import { Routes, Route } from 'react-router-dom';
import './App.css';
import AppContainer from "./components/containers/AppContainer";
import IndividualThread from "./pages/IndividualThread";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Genre from "./pages/Genre";
import OffTopic from "./pages/OffTopic";
import GeneralDiscussion from "./pages/GeneralDiscussion";
import { AccountBox } from "./components/accountBox";



// apollo test code
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {
  return (
    <div className='App'>
          <ApolloProvider client={client}>

      <Routes >
            <Route path="" element={<AppContainer />}>
              <Route index element={<Homepage />} />
              <Route path="/signin" element={<AccountBox />} />
              <Route path="/genres" element={<Genre />} />
              <Route path="/off-topic" element={<OffTopic />} />
              <Route path="/general-discussion" element={<GeneralDiscussion />} />
              <Route path="/:individualThreadId" element={<IndividualThread />} />
              <Route path="/:username" element={<Profile />} />
            </Route>
      </Routes>
      </ApolloProvider>
    </div>
  );
}

export default App;