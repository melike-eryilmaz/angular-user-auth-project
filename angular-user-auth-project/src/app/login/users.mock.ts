import { userPerm } from './User';

export const userMock: userPerm[] = [
  {
    username: 'superAdmin',
    role: 'superAdmin',
    pages: [
      { name: 'home', visible: true },
      { name: 'customer-list', visible: true },
      { name: 'admin-list', visible: true },
    ],
  },
  {
    username: 'admin',
    role: 'admin',
    pages: [
      { name: 'home', visible: true },
      { name: 'customer-list', visible: true },
      { name: 'admin-list', visible: false },
    ],
  },
  {
    username: 'customer',
    role: 'customer',
    pages: [
      { name: 'home', visible: true },
      { name: 'customer-list', visible: false },
      { name: 'admin-list', visible: false },
    ],
  },
];
