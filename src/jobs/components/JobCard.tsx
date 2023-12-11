import { JobType } from "../types/Job";
import { Link } from "react-router-dom";

const Card: React.FC<{ card: JobType }> = ({ card }) => {
  return (
    <div className="border p-8 flex flex-wrap bg-white gap-2">
      <div className="w-full">
        <img src={card.url} alt="card.title" />
      </div>
      <Link
        to={{
          pathname: `job/${card.id}`,
        }}
        key={card.id}
        className="text-lg font-semibold py-2 hover:text-blue-300"
      >
        {card.title}
      </Link>
      <p className="text-slate-700">{card.summary}</p>
    </div>
  );
};

export default Card;
