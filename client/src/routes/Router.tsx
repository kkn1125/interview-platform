import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/templates/Layout";
import InterviewChoise from "../pages/interview/choise/InterviewChoise";
import InterviewList from "../pages/interview/list/InterviewList";
import InterviewRegister from "@pages/interview/service/InterviewRegister";

function Router() {
  return (
    <Routes>
      <Route path='' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='interview'>
          <Route path='list' element={<InterviewList />} />
          <Route path='register' element={<InterviewRegister />} />
          <Route path='choise' element={<InterviewChoise />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Router;
