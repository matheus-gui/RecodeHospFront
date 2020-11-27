import React from 'react';
import Page from '../../components/Page';
import './index.css';

export default function index() {
    return (
        <Page title="Homepage">
            <h3>Lorem Ipsum</h3><br></br>
            <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <p className="p">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="p"> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            <p className="p">nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
            <p className="p">in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur</p>
            <p className="p">sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
            <p className="p">mollit anim id est laborum.</p>

        </Page>
    );
}