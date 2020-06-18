import React from 'react'
import { Link } from 'react-router-dom'

export default function CharactersPage() {
    return (
        <div className="container">
            <h1>Characters</h1>
            <p>
                <Link to="/">Home</Link>
            </p>
        </div>
    );
}