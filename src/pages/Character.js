import React from "react";
import { useParams } from "react-router";
import { useCharacter } from "../Hooks/useCharacter";
import "./Character.css";

export default function Character() {
  const { id } = useParams();

  const { error, loading, data } = useCharacter(id);

  if (error)
    return (
      <div>
        <h1>Something Went Wrong</h1>
      </div>
    );
  if (loading)
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );

  return (
    <div className="Character">
      <img src={data.character.image} width={750} height={750} alt="" />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="Character-episode">
          {data.character.episode.map((episode) => {
            return (
              <div>
                {episode.name} - <strong>{episode.episode}</strong>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
