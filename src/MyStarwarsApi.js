import React from 'react';

 {/* How to Loop in React;js(mapping) */}
class FilmItemRow extends React.Component{
    render(){
        return(
            <li>
            <a href={this.props.url}>{this.props.url}</a>
            </li>
        )
    }
}

class StarWars extends React.Component {

    // Storing state on your new component
    constructor() {
        super()
        this.state = {
            loadedCharacter : false,
            name: null,
            height: null,
            homeworld: null,
            films: [],
        }
    }

    // A new React.js click event
    getNewCharacter() {
        // Randomize the character
        const randomNumber = Math.round(Math.random() * 82)
        const url = `https://swapi.dev/api/people/${randomNumber}/`
        // your first react-based api request
        fetch(url)
         .then(response =>response.json())
         .then(data =>{
            console.log(data)
            // Storing state on your new component
            this.setState({
                name: data.name,
                height: data.height,
                homeworld: data.homeworld,
                films: data.films,
                loadedCharacter : true,
            })
         })
    }

    render() {
         {/* How to Loop in React;js(mapping) */}
        const movies = this.state.films.map((film,i) =>{
           return <FilmItemRow key={i} url={film}/>
        })

        return (
            <div>
                {
                    // if condition
                    this.state.loadedCharacter &&  
                    <div>
                        <h1>{this.state.name}</h1>
                        <p>{this.state.height} cm</p>
                        {/* create a link for a text */}
                        <p><a href={this.state.homeworld}>Homework</a> </p>
                        <ul>
                            {/* {
                            this.state.films.map(film =>{
                               return <li>{film}</li>
                            })
                           } */}

                           {movies}
                        </ul>
                    </div>
                }
                <button type='button'
                    onClick={() => this.getNewCharacter()}
                    className='btn'>Randomize Character</button>
            </div>
        )
    }
}

export default StarWars;