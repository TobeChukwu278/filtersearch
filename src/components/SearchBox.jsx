import React from 'react'

const SearchBox = (searchField, searchChange) => {
    return (
        <div>
            <input
                type='search'
                placeholder='search robots'
                className='pa3 ba b--green bg-lightest-blue'
                onChange={searchChange}
                style={{ width: '200px', height: '30px', margin: '10px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#f9f9f9', fontSize: '16px', color: '#333' }}
            />
        </div>
    )
}

export default SearchBox