import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as IoIcons5 from 'react-icons/io5';

import * as GiIcons from 'react-icons/gi';
import * as HiIcons from 'react-icons/hi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Plants',
    path: '/plants',
    icon: <GiIcons.GiCarnivorousPlant />,
    cName: 'nav-text'
  },
  {
    title: 'Fish',
    path: '/fish',
    icon: <IoIcons5.IoFishSharp />,
    cName: 'nav-text'
  },
  {
    title: 'Clay',
    path: '/clay',
    icon: <GiIcons.GiPaintedPottery />,
    cName: 'nav-text'
  },
  {
    title: 'Thrift',
    path: '/thrift',
    icon: <HiIcons.HiShoppingBag />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/about',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];