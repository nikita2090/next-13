import React from 'react';

export function ContactsInfo() {
    const date = new Date().toLocaleString('ru');
    return (
        <>
            <h4>Contacts Info (Server Component)</h4>
            <p>A lot of text</p>
            <p>A lot of text</p>
            <p>A lot of text</p>
            <p>A lot of text</p>
            <p>A lot of text</p>
            <p>A lot of text</p>
            <p>A lot of text</p>
            <p>A lot of text</p>
            <p>A lot of text</p>
            <p>A lot of text</p>
            <p>{date}</p>
        </>
    );
}
