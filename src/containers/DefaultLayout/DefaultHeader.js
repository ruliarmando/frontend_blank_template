import React from 'react';
import { NavLink } from 'react-router-dom';
import { UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';

import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg';
import sygnet from '../../assets/img/brand/sygnet.svg';

const DefaultHeader = () => (
  <>
    <AppSidebarToggler className="d-lg-none" display="md" mobile />
    <AppNavbarBrand
      full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
      minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
    />
    <AppSidebarToggler className="d-md-down-none" display="lg" />

    <Nav className="ml-auto" navbar>
      <UncontrolledDropdown nav direction="down">
        <DropdownToggle nav>
          <img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
          <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
          <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
          <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  </>
);

export default DefaultHeader;
