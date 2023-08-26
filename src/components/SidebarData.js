import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FiIcons from 'react-icons/fi';
import * as CgIcons from 'react-icons/cg';
import * as TbIcons from 'react-icons/tb';
import * as MdIcons from 'react-icons/md';
export const SidebarData = [
  {
    title: 'Home',
    path: '/Login/Home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/Login/Reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/Login/Products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/Login/Profile',
    icon: <CgIcons.CgProfile />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/Login/Messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/Login/Settings',
    icon: <FiIcons.FiSettings />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/Logout',
    icon: <MdIcons.MdOutlineLogout />,
    cName: 'nav-text'
  },
  {
    title: '@Team3',
    icon: <TbIcons.TbShieldHeart />,
    cName: 'nav-text'
  }
];
