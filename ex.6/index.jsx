import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';


ReactDOM.render(
    <Family lastName='Silva'>
        <Member name='João' />
        <Member name='Letícia' />
        <Member name='Pedro' />
        <Member name='Maria' />
    </Family>
, document.getElementById('app'));