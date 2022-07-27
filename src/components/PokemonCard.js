import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const { name, hp, sprites } = pokemon;
  const [sprite, setSprite] = useState('front');

  const handleCardClick = () => {
    setSprite( prev => prev === 'front' ? 'back' : 'front' )
  }

  return (
    <Card>
      <div onClick={ handleCardClick }>
        <div className="image">
          <img alt="oh no!" src={ sprites[sprite] } />
        </div>
        <div className="content">
          <div className="header">{ name }</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            { hp }
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
