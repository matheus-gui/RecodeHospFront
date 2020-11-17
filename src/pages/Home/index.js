import React from 'react';
import Page from '../../components/Page';
import SignUp from '../SignUp/SignUp';

export default function index() {
    return (
        <Page title="Homepage">
            <SignUp></SignUp>
        </Page>
    );
}