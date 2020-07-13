import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import './Layout.css';

const Layout = (props) => {
    return(
        <div> 
        <Toolbar  signedInState= {props.isSignedIn} routeChange= {props.onRouteChange}/>
            <main className={'mainSpacing'}>
                <div className="main">
                 {props.children}
                </div>
            </main>
        </div>
 );
}

export default Layout;