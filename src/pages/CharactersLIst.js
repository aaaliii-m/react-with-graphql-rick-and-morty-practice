import React from "react";
import { Link } from "react-router-dom";
import { useCharacters } from "../Hooks/useCharacters";
import "./CharactersList.css";

export default function CharactersLIst() {
  const { error, loading, data } = useCharacters();

  console.log(error, loading, data);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something Went Wrong!</div>;
  }

  return (
    <div className="CharactersList">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`}>
            <img src={character.image} alt="profile" />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}
