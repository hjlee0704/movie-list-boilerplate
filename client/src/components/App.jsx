import React from 'react';
import AddMovie from './AddMovie.jsx';
//import './App.css';
import SearchBar from './SearchBar.jsx';
//add


const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
  {title: 'AI'}
];

class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
    }
  }

  render() {
    return (
      // {this.state.movies}
      <div>
        <h1>Movie List</h1>
        <AddMovie />
        <SearchBar />
          <table className='center'>
            <tbody>
          {this.state.movies.map((movie, index) => (
            <tr key={index}>
             <td>{movie.title}</td>
            </tr>
          ))}
          </tbody>
          </table>

      </div>
    );
  } 
};

export default App;