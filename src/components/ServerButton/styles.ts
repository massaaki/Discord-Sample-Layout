import styled from "styled-components";

import { Props } from ".";

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;

  border-radius: 50%;

  margin-bottom: 8px;

  background-color: ${(props) =>
    props.isHome ? "var(--rocketseat)" : "var(--primary)"};

  position: relative;
  cursor: pointer;

  > img {
    width: 40px;
    height: 40px;
  }

  &::before {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    position: absolute;
    left: -17px;
    top: calc(50% - 4.5px);

    background-color: var(--white);
    content: "";
    display: ${(props) => (props.hasNotifications ? "inline" : "none")};
  }
  &::after {
    background-color: var(--notification);
    width: auto;
    height: 16px;
    position: absolute;
    padding: 0 4px;
    bottom: -4px;
    right: -4px;
    border-radius: 12px;
    border: 4px solid var(--quaternary);
    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);
    content: '${(props) => props.mentions && props.mentions}';
    display: ${(props) => (props.mentions ? "inline" : "none")};
  }

  transition: border-radius 0.2s, background-color 0.2s;
  &.active,
  &:hover {
    border-radius: 16px;
    background-color: ${(props) =>
      props.isHome ? "var(--rocketseat)" : "var(--discord)"};
  }
`;
