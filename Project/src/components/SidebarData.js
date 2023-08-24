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
    path: '/Login/Navbar/Home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/Login/Navbar/Reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/Login/Navbar/Products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/Login/Navbar/Profile',
    icon: <CgIcons.CgProfile />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/Login/Navbar/Messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/Login/Navbar/Settings',
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
