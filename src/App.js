import { Route, Routes } from 'react-router-dom';
import './App.css';

import AppContainer from "./components/containers/AppContainer";
import IndividualThread from "./pages/IndividualThread";
import Profile from "./pages/Profile";
import Genre from "./pages/Genre";
import OffTopic from "./pages/OffTopic";
import GeneralDiscussion from "./pages/GeneralDiscussion";



function App() {
  return (
    <div className='App'>

      <Routes>
            <Route path="/music-junkeez" element={<AppContainer />}>
              <Route index element={<Homepage />} />
              <Route path="/music-junkeez/genres" element={<Genre />} />
              <Route path="/music-junkeez/off-topic" element={<OffTopic />} />
              <Route path="/music-junkeez/general-discussion" element={<GeneralDiscussion />} />
              <Route path="/music-junkeez/:individualThreadId" element={<IndividualThread />} />
              <Route path="/music-junkeez/:username" element={<Profile />} />
            </Route>
      </Routes>

    </div>
  );
}

export default App;
