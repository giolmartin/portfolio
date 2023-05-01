import React, { useRef } from 'react';

import { CardsContainer, Card, CardContent, Text } from './card.styles';

const Cards: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardsRef.current) return;

    const cards = Array.from(cardsRef.current.getElementsByClassName('card'));

    for (const card of cards) {
      const rect = (card as HTMLElement).getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
      (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <CardsContainer id='cards' ref={cardsRef} onMouseMove={handleMouseMove}>
      <Card className='card'>
        <CardContent>
          <Text> 1</Text>
        </CardContent>
      </Card>
      <Card className='card'>
        <CardContent>
          <Text> 2</Text>
        </CardContent>
      </Card>
      <Card className='card'>
        <CardContent>
          <Text> 3</Text>
        </CardContent>
      </Card>
    </CardsContainer>
  );
};

export default Cards;
