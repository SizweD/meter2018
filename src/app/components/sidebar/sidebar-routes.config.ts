import {  RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    /*new menu items*/
    { path: 'usersngroups', title: 'Users & Group',  icon:'person', class: '' },
    { path: 'assignroutes', title: 'Assign Routes',  icon:'content_paste', class: '' },
    { path: 'metermanagement', title: 'Meter Management',  icon:'library_books', class: '' },
    { path: 'routesnroutebooks', title: 'Routes & Route Books',  icon:'bubble_chart', class: '' },
    { path: 'validate', title: 'Validate Readings',  icon:'location_on', class: '' },
    { path: 'release', title: 'Release Books',  icon:'notifications', class: '' },
    { path: 'reports', title: 'Reports',  icon:'notifications', class: '' },
    { path: 'intergration', title: 'Integration Status',  icon:'notifications', class: '' },
    { path: 'logout', title: 'Logout',  icon:'notifications', class: '' },
];
