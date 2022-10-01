import { DrawerContainer, DrawerHeader, DrawerContent } from './drawer.styles';
import { DrawerItem } from './drawerItem/drawerItem';

import { MdOutlineDashboard, MdOutlineDataExploration } from 'react-icons/md';
import { HiOutlineUsers } from 'react-icons/hi';
import { AiOutlineInbox } from 'react-icons/ai';

const Drawer = () => {
  return (
    <DrawerContainer>
      <DrawerHeader>
        <img src="assets/logo/logo.svg" alt="logo" style={{ width: '60%' }} />
      </DrawerHeader>
      <DrawerContent>
        <DrawerItem Icon={MdOutlineDashboard} navigateTo="/pdv">
          Dashboard
        </DrawerItem>
        <DrawerItem Icon={AiOutlineInbox} navigateTo="/produtos">
          Produtos
        </DrawerItem>
        <DrawerItem Icon={HiOutlineUsers} navigateTo="/clientes">
          Clientes
        </DrawerItem>
        <DrawerItem Icon={MdOutlineDataExploration} navigateTo="/vendas">
          Vendas
        </DrawerItem>
      </DrawerContent>
    </DrawerContainer>
  );
};

export { Drawer };
