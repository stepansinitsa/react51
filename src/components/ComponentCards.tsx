import { FC, ReactNode } from 'react';

interface ComponentCardsProps {
  children?: ReactNode;
  title: string;
  text: string;
}

const ComponentCards: FC<ComponentCardsProps> = ({ children, title, text }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {children}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="/#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default ComponentCards;