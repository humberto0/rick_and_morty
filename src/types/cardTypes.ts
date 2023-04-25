export interface CardProps {
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
  image: string;
  id: string;
}

export interface ListCardProps {
  cards: CardProps[];
}
