import React from "react";

import { Container, Role, User, Avatar } from "./styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />
      <strong>{nickname}</strong>
      {isBot && <span>bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role> Disponivel - 1</Role>
      <UserRow nickname="User Name" />

      <Role> Offline - 2</Role>
      <UserRow nickname="User Name 2" isBot />

      <UserRow nickname="User Name 3" />
    </Container>
  );
};

export default UserList;
