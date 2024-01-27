import React from 'react';

function Navbar() {
    return (
        <div className='flex justify-between items-center py-5 px-10 shadow-md bg-gray-900'>
            <div>
                <h1>Where in the world?</h1>
            </div>
            <div>
                <p>Dark Mode</p>
            </div>
        </div>
    );
}

export default Navbar;