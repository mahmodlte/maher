const InfoCard = ({ title, Icon, description }) => {
  return (
    <div className=" w-3xs flex flex-col text-center items-center p-6  border-2   border-maher-accent hover:bg-maher-accent   text-maher-primary dark:text-maher-accent  rounded-2xl">
      <Icon className="w-10 h-10 dark:text-maher-primary" />
      <h3 className="text-lg font-heading ">{title}</h3>
      <p className="font-body">{description}</p>
    </div>
  );
};
export default InfoCard;
