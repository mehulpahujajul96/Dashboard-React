import React from "react";
import {
  Actions,
  EmptyBox,
  Image,
  ImageBox,
  List,
  ListContent,
  ListItem,
  Message,
  SubMessage,
  SubTitle,
  Title,
} from "../allUsers.styled";
import Button from "../../../components/utils/Button";
import noUsersFound from "../../../images/noUsers.png";
import PencilIcon from "../../../components/utils/PencilIcon";
import DeleteIcon from "../../../components/utils/DeleteIcon";

const Users = ({ users, onDelete, editSelectedUser, selectedUser }) => {
  return (
    <div>
      {users.users && users.users.length > 0 && (
        <List>
          {users.users.map((user) => (
            <ListItem key={user.id}>
              <ListContent>
                <Title>{user.name}</Title>
                <SubTitle>{user.email}</SubTitle>
                <Button onClick={() => selectedUser(user.id)}>
                  View Details
                </Button>
              </ListContent>
              <Actions>
                <Button onClick={() => editSelectedUser(user.id)}>
                  <PencilIcon />
                </Button>
                <Button onClick={() => onDelete(user.id)}>
                  <DeleteIcon />
                </Button>
              </Actions>
            </ListItem>
          ))}
        </List>
      )}
      {users.users.length === 0 && (
        <EmptyBox>
          <ImageBox>
            <Image src={noUsersFound} alt="No Users Found" />
          </ImageBox>
          <Message>No records has been added yet.</Message>
          <SubMessage>
            Add a new record by simpley clicking the button on top right side.
          </SubMessage>
        </EmptyBox>
      )}
    </div>
  );
};
export default Users;
