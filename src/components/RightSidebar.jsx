import React from 'react';
import { Route } from 'react-router-dom';
import RightSidebarMain from './RightSidebarMain';

function RightSidebar() {
    return (
        <Route path="/main" component={RightSidebarMain} exact />
    );
};

export default RightSidebar;