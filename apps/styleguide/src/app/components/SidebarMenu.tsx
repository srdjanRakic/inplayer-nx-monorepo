import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import ComponentWrapper from './ComponentWrapper'
// import * as InplayerUi from '@inplayer-org/inplayer-ui';
import {
  PaywallPreviews,
  PreviewTemplatesWrapper
} from '@inplayer-org/ui/paywall-previews';

const WrapperNavigation = styled.div`
  width: 15rem;
  display: flex;
  flex-direction: column;
  font-size: .9em;;
  color: rgba(0,0,0,.5);
  height: 100%;
  border-radius: .2rem;
  font-weight: 400;
  box-shadow: 0 2px 3px 2px #e2e6ea;
  position: fixed;
  overflow-y: auto;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    cursor: pointer;
    border-radius: 5px;
    background: rgba(0,0,0,.25);
    -webkit-transition: color .2s ease;
    transition: color .2s ease;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0,0,0,.1);
    border-radius: 0;
  }
`
const WrapperSection = styled.div`
  border-top: 1px solid #e2e6ea;
  display: flex;
  flex-direction: column;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #9a9a9a;
  padding: .5em 1.3em;

  &:hover {
  color: #292929;
}`

const NavigationHeader = styled(StyledLink)`
  font-weight: bold;
  padding: 1em 1.3em;
  color: #292929;
`

// const itemsToIgnore = ['Colors', 'ThemeWrapper']

// const navigationElements = Object.keys(InplayerUi).filter(element => !itemsToIgnore.includes(element));

const previewTemplates = Object.keys(PaywallPreviews);

console.error(previewTemplates);

const SidebarMenu: React.FC = () => (
    <Router>
      <WrapperNavigation>
        <WrapperSection>
          <NavigationHeader to='/'> InPlayer UI | 2.0.0 </NavigationHeader>
        </WrapperSection>
        <WrapperSection>
          <NavigationHeader> Components</NavigationHeader>
          {/* {
            navigationElements.map(el => <StyledLink to={`/${el}`}>{el}</StyledLink>)
          } */}
        </WrapperSection>
        <WrapperSection>
          <NavigationHeader>Previews</NavigationHeader>
          {
            previewTemplates.map(preview => <StyledLink to={`/${preview}`}>{preview}</StyledLink>)
          }
        </WrapperSection>
      </WrapperNavigation>
      <Switch>
        <Route path="/:preview">
          <PreviewTemplatesWrapper />
        </Route>
        <Route path="/:id">
          <ComponentWrapper />
        </Route>
      </Switch>
    </Router>
);

export default SidebarMenu;
