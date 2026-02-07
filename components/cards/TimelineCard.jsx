const TimelineCard = ({ data }) => {
    const { id, title, desc } = data;
    return (
        <div className="w-full bg-and-border-gradient rounded-[10PX] p-[15px] md:p-[30px] flex gap-[15px] md:gap-[30px]">
            <div className="number">
                <h4 className="w-[50px] h-[50px] rounded-full bg-and-border-gradient flex items-center justify-center heading-4">
                    {id}
                </h4>
            </div>
            <div>
                <h4 className="heading-4">{title}</h4>
                <p className="mt-[5px] md:mt-[15px]">{desc}</p>
            </div>
        </div>
    );
};

export default TimelineCard;
