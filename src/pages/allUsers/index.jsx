import React from "react";
import { PageBox, PageTitle } from "./allUsers.styled";
import Users from "./Users";
import Button from "../../components/utils/Button";
import AddUser from "./addUser";
import SelectedUser from "./selectedUser";

const AllUsers = ({
  users,
  addNewUser,
  newUser,
  onDelete,
  onBack,
  onEdit,
  editSelectedUser,
  updatedValue,
  selectedUser,
}) => {
  const selectedNewUser = users.users.find((user) => user.id === users.userId);
  let content = (
    <SelectedUser
      selectedUser={selectedNewUser}
      onBack={onBack}
      onEdit={onEdit}
      updatedValue={updatedValue}
    />
  );
  if (users.userId === undefined) {
    content = (
      <Users
        users={users}
        onDelete={onDelete}
        editSelectedUser={editSelectedUser}
        selectedUser={selectedUser}
      />
    );
  } else if (users.userId === null) {
    content = <AddUser newUser={newUser} onBack={onBack} />;
  }
  return (
    <div>
      <PageBox>
        <PageTitle>All Users</PageTitle>
        {users.userId === undefined && (
          <Button onClick={addNewUser}>Add User</Button>
        )}
      </PageBox>
      {content}
    </div>
  );
};
export default AllUsers;
