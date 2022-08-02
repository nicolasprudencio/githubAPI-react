import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'


export const ContainerTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-right: 10rem;
  margin-top: 16px;

  `;

export const ContainerTabList = styled(TabList)`
  list-style: none ;
  padding: 4px;
  display: flex;
  margin: 0;
`;
ContainerTabList.tabsRole='TabList'

export const ContainerTab = styled(Tab)`
  border-radius: 4rem;
  border: 1px solid #ccc;
  padding: 10px;
  user-select: none;
  margin: 10px 5px;
  transition: .5s ease-in-out;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &.is-selected {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid white;
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);

    background-color: #c901c9;
    color: white;
    font-weight: bold;
  };

`;

ContainerTab.tabsRole = "Tab";


export const ContainerTabPanel = styled(TabPanel)`
  padding: 16px;
  border-top: 1px solid #ccc;
  display: none;
  margin-top: -5px;
  z-index: -1;
  &.is-selected {
    display: block;
  }
  `;

ContainerTabPanel.tabsRole = "TabPanel";