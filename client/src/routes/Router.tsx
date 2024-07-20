import AskLayout from "@components/templates/AskLayout";
import InterviewLayout from "@components/templates/InterviewLayout";
import InterviewAnswer from "@pages/interview/list/InterviewAnswer";
import InterviewRegister from "@pages/interview/service/InterviewRegister";
import Profile from "@pages/user/Profile";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/templates/Layout";
import Home from "../pages/Home";
import InterviewChoise from "../pages/interview/choise/InterviewChoise";
import InterviewList from "../pages/interview/list/InterviewList";
import InterviewDetail from "@pages/interview/list/InterviewDetail";

function Router() {
  return (
    <Routes>
      <Route path='' element={<Layout />}>
        {/* home layout */}
        <Route element={<InterviewLayout />}>
          {/* home */}
          <Route path='' element={<Home />} />
        </Route>
        {/* interview layout */}
        <Route path='interview' element={<InterviewLayout />}>
          <Route path='list' element={<InterviewList />} />
        </Route>
        <Route path='interview' element={<AskLayout />}>
          <Route path='list'>
            <Route path=':id'>
              <Route path='' element={<InterviewDetail />} />
              <Route path='answer' element={<InterviewAnswer />} />
            </Route>
          </Route>
          <Route path='register' element={<InterviewRegister />} />
          <Route path='choise' element={<InterviewChoise />} />
        </Route>
        <Route path='user' element={<AskLayout />}>
          <Route path='profile' element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Router;
