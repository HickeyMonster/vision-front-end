import React from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import './Layout.css';

const Layout = (props) => {
    return(
        <div> 
        <Toolbar/>
            <main className={'mainSpacing'}>
                {props.children}
            </main>
        </div>
 );
}

export default Layout;