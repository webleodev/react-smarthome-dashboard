import React from 'react';
import { Route } from 'react-router-dom';
import _rightSidebarMain from './_rightSidebarMain';

function RightSidebar() {
    return (
        <Route path="/main" component={_rightSidebarMain} exact />
    );
};

export default RightSidebar;