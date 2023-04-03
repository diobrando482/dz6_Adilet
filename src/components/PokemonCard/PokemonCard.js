import React, { useEffect, useState } from 'react';

const PokemonCard = ({ pokemon }) => {
  const { name, url } = pokemon;
  const [spriteUrl, setSpriteUrl] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setSpriteUrl(data.sprites.other.dream_world.front_default))
      .catch(error => console.log(error));
  }, [url]);

  return (
    <div className="pokemonCard">
      <img src={spriteUrl} alt={name} />
      <h2>{name}</h2>
    </div>
  );
};

export default PokemonCard;