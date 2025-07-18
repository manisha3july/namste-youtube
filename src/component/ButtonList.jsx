import Button from "./Button";

const ButtonList = () => {
  const list = ['All', 'Game', 'Music', 'Movie', 'Song', 'Cook', 'Comedy', 'Live', 'Cricket', 'Love'];

  return (
    <div className="overflow-x-auto whitespace-nowrap no-scrollbar">
      <div className="flex gap-3">
        {list.map((name, index) => (
          <Button key={index} name={name} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
