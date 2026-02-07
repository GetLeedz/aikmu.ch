const CounterCard = ({ item }) => (
  <div className="w-full text-center p-[15px] lg:p-[30px] card-bg-border">
    <h2 className="count-heading">
      {item.num}
      <span>{item.k && "K"}</span>
    </h2>
    <small className="text-fig text-[color:var(--color-secondary)]">
      {item.title}
    </small>
  </div>
);

export default CounterCard;
