const EpisodeCard = ({episode}) => {
  const { name, air_date } = episode;
  return (
    <div className="my-2">
      <p className="font-bold text-lg">{name}</p>
      <p className="text-xs">{air_date}</p>
    </div>
  );
};

export default EpisodeCard;
