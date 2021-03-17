import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props) 
    }

    render() {
        return(
            <div class="search-container">
                <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search" />
                <button type="button">Search</button>
                </form>
            </div>  
        );
    }
}

export default SearchBar;