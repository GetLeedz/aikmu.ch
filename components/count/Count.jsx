import CounterCard from "../cards/CounterCard";

const Count = () => (
  <section className="mx-4">
    <div className="container mt-[60px] lg:mt-[120px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
      {[
        { id: 1, num: 3462, title: "Total Items" },
        { id: 2, num: 1549, title: "Total Owners" },
        { id: 3, num: 5, title: "Floor Price ( ETH)" },
        { id: 4, num: 445, k: "k", title: "Total Items" },
      ].map((item) => (
        <CounterCard key={item.id} item={item} />
      ))}
    </div>
  </section>
);

export default Count;
