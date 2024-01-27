import Filter from '@/components/Search/Filter';
import Search from '@/components/Search/Search';
import React from 'react';

function Countries(props) {
    return (
        <div>
            <div>
                <Search />
                <Filter />
            </div>
        </div>
    );
}

export default Countries;