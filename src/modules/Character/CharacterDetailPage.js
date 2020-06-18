import React from 'react'
import { Link } from 'react-router-dom'

export default function CharacterDetailsPage(props) {
    return (
        <div className="container">
            <h1>Character Details for {props.match.params.id}</h1>
            <p>
                <Link to="/characters">Back to Character List</Link>
            </p>
        </div>
    );
}