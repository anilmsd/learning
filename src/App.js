import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Routers/Home";
import Dashboard from "./Routers/Dashboard";
import About from "./Routers/About";
import Crud from "./CRUD/Crud";
import Usestate from "./Hooks/Usestate";
import Useeffect from "./Hooks/Useeffect";
import Useref from "./Hooks/Useref";
import Usememo from "./Hooks/Usememo";
import Usecallback from "./Hooks/Usecallback";
import Main from "./Hooks/UseContextHook/Main";
import Login from "./Redux/Components/Login";
import Logout from "./Redux/Components/Logout";
import API from "./API/Crud";
import LandingPage from "./API/Home";
import UserManagement from "./API/UserManagement";
import Admin from "./Protected Routes/Admin";
import ParentComponent from "./React Memo/ParentComponent";
import ToDoList from "./Task/ToDoList";
import Parent from "./ParentToChild/Parent";

import  { MainComponent } from "./Error Boundary/ComponentA";
import Task2 from "./Task/Task2";
import Task from "./Task/Task";
import "./../src/global.css";
import FetchData from "./Interceptor/FetchData";
import Task3 from "./Task/Task3";
import RegistrationForm from "./FormValidation/FormIk";
import ThrottleDebounce from "./Task/ThrottleDebounce";
// import JestTestLogin from "./Jest_UnitTesting/Login";
export default function App() {
  // const adminRoutes = ({ component: Component, ...rest }) => {
  //   const isAdmin = Cookies.get("role") === "Admin";
  //   return (
  //     <Route
  //       {...rest}
  //       element={isAdmin ? <Component /> : <Navigate to="/" />}
  //     />
  //   );
  // };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dashboard/:name" element={<Dashboard />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/crud" element={<Crud />} />
          <Route exact path="/usestate" element={<Usestate />} />
          <Route exact path="/useeffect" element={<Useeffect />} />
          <Route exact path="/useref" element={<Useref />} />
          <Route exact path="/usememo" element={<Usememo />} />
          <Route exact path="/usecallback" element={<Usecallback />} />
          <Route exact path="/usecontext" element={<Main />} />
          <Route exact path="/redux" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/authentication" element={<API />} />
          <Route exact path="/home" element={<LandingPage />} />
          <Route exact path="/reactmemo" element={<ParentComponent />} />
          <Route
            path="/userManagement/*"
            element={<Admin component={UserManagement} />}
          />
          <Route path="/alltasks" element={<Task />} />
          <Route path="/todolist" element={<ToDoList />} />
          <Route path="/parenttochild" element={<Parent />} />
          <Route path="/task2" element={<Task2 />} />
          {/* <Route path="/jesttestinglibrary" element={<JestTestLogin/>}/> */}
          <Route path="/errorBoundary" element={<MainComponent />} />
          <Route path="/interceptor" element={<FetchData />} />
          <Route path="/task3" element={<Task3 />} />
          <Route path="/throttle_debounce" element={<ThrottleDebounce />} />
          <Route path="/formValidation" element={<RegistrationForm />} />
        </Routes>
      </BrowserRouter>

      {/* Error boundary component will catch javascript errors anywhere in their child component
      tree and display a fallback UI. */}
      {/* <ErrorBoundary>
        <ComponentA />
      </ErrorBoundary> */}
    </div>
  );
}
