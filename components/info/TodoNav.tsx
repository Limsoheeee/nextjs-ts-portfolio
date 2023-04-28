import React from "react";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";

interface Itodo {
    id: number;
    name: string;
    pathName: string;
  };

export default function TodoNav() {
  const router = useRouter();
  const todo_list = [
    {
      id: 1,
      name: "Today",
      pathName: "today",
    },
    {
      id: 2,
      name: "Week",
      pathName: "week",
    },
    {
      id: 3,
      name: "Month",
      pathName: "month",
    },
    {
      id: 4,
      name: "Year",
      pathName: "year",
    },
  ];
  const handleNavItemClick = (pathName) => {
    router.push(`/${pathName}`)
  }

  return (
    <>
      <NavContainer>
        {todo_list.map((v, idx) => {
          <NavItem NavItemkey={idx} onClick={() => handleNavItemClick(v.pathName)}>
            <p>{v.name}</p>
          </NavItem>;
        })}
      </NavContainer>
    </>
  );
}

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background: #eeeee;
`;

const NavItem= styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 30px;
  background: #99999;
  cursor: pointer;

${(props) =>
  props.NavItemkey &&
  css`
    margin-left: ${props.NavItemkey * 1.5}rem;
  `}
`;