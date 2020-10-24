import React from 'react';
import { Route } from 'react-router-dom';
import { RightSidebarMain } from './RightSidebarsComps';

function RightSidebar() {
    return (
        <Route path="/main" component={RightSidebarMain} exact />
    );
};

export default RightSidebar;