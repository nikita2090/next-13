'use client';

import React, { useState } from 'react';

interface ContactsChildProps {
    children: React.ReactNode;
}

export const ContactsChild: React.FC<ContactsChildProps> = ({ children }) => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((c) => c + 1);
    };

    const date = new Date().toLocaleString('ru');
    // console.log('render');
    return (
        <section>
            <h3>Contacts Child (Client component)</h3>
            <p>Contacts count: {count}</p>
            <p>{date}</p>
            <button onClick={handleClick}>increase contacts</button>
            <br />
            <br />
            {children}
        </section>
    );
};
