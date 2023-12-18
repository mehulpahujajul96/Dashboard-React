import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "./components/common/header";
import Login from "./pages/login";
import DashBoard from "./pages/dashboard";
import AllUsers from "./pages/allUsers";
import SideBar from "./components/common/sidebar";
import Cropper from "./pages/imageCropper";
import { ChartData } from "./data";
import { PieData } from "./pieData";
function App() {
  const [users, setUsers] = useState({
    users: [],
    userId: undefined,
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const sortedUserInformation = localStorage.getItem("isLoggedIn");
    if (sortedUserInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const addUser = (data) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn((prev) => !prev);
    setUsers((prevState) => {
      const updatedData = { ...data, id: Math.random() };
      return {
        ...prevState,
        users: [...prevState.users, updatedData],
        userId: undefined,
      };
    });
  };
  const addNewUserHandler = () => {
    setUsers((prevState) => {
      return {
        ...prevState,
        userId: null,
      };
    });
  };

  const newUserHandler = (userData) => {
    setUsers((prevState) => {
      const user = { id: Math.random(), ...userData };
      return {
        ...prevState,
        users: [...prevState.users, user],
        userId: undefined,
      };
    });
  };
  const deleteUserHandler = (id) => {
    setUsers((prevState) => {
      return {
        ...prevState,
        userId: undefined,
        users: prevState.users.filter((user) => user.id !== id),
      };
    });
  };

  const selectUserHandler = (id) => {
    setUsers((prevState) => {
      return {
        ...prevState,
        userId: id,
      };
    });
    setIsEditing(false);
  };

  const backHandler = () => {
    setUsers((prevState) => {
      return {
        ...prevState,
        userId: undefined,
      };
    });
  };
  const editSelectedUserHandler = (id) => {
    setUsers((prevState) => {
      return {
        ...prevState,
        userId: id,
      };
    });
    setIsEditing(true);
  };

  const updatedValueHandler = (updatedData) => {
    setUsers((prevState) => {
      const userData = [...prevState.users];
      const exsistingDataIndex = userData.findIndex(
        (user) => user.id === updatedData.id
      );
      const exsistingData = userData[exsistingDataIndex];
      if (exsistingData) {
        const updatedUser = {
          ...exsistingData,
          name: updatedData.name,
          email: updatedData.email,
          password: updatedData.password,
          id: updatedData.id,
        };
        userData[exsistingDataIndex] = updatedUser;
      }
      return {
        ...prevState,
        users: userData,
        userId: undefined,
      };
    });
    setIsEditing(false);
  };

  const onSignOut = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn((prev) => !prev);
    navigate("");
  };

  return (
    <div className="app">
      {isLoggedIn && <DashboardHeader onSignOut={onSignOut} />}
      {isLoggedIn && <SideBar />}
      <main className={`content ${isLoggedIn ? "active" : ""}`}>
        <Routes>
          <Route path="" element={<Login onLogin={addUser} />} />
          <Route
            path="/dashboard"
            element={<DashBoard data={ChartData} pieData={PieData} />}
          />
          <Route
            path="/users"
            element={
              <AllUsers
                users={users}
                addNewUser={addNewUserHandler}
                newUser={newUserHandler}
                onDelete={deleteUserHandler}
                selectedUser={selectUserHandler}
                onBack={backHandler}
                onEdit={isEditing}
                editSelectedUser={editSelectedUserHandler}
                updatedValue={updatedValueHandler}
              />
            }
          />
          <Route path="/imageCropper" element={<Cropper />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
