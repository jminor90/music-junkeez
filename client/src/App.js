import { Routes, Route } from 'react-router-dom';
import './App.css';

import AppContainer from "./components/containers/AppContainer";
import IndividualThread from "./pages/IndividualThread";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import GenrePage from "./pages/Genre";
import OffTopic from "./pages/OffTopic";
import GeneralDiscussion from "./pages/GeneralDiscussion";
import { AccountBox } from "./components/accountBox";

function App() {
  return (
    <div className='App'>

      <Routes >
            <Route path="" element={<AppContainer />}>
              <Route index element={<Homepage />} />
              <Route path="/signin" element={<AccountBox />} />
              <Route path="/genres" element={<GenrePage />} />
              <Route path="/off-topic" element={<OffTopic />} />
              <Route path="/general-discussion" element={<GeneralDiscussion />} />
              <Route path="/:individualThreadId" element={<IndividualThread />} />
              <Route path="/:username" element={<Profile />} />
            </Route>
      </Routes>

    </div>
  );
}

export default App;