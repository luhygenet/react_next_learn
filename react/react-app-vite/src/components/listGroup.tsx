import { useState } from "react";

type ListProps = {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
};
function ListGroup({ items, heading, onSelectItem }: ListProps) {
  //   let items = ["addis", "hawassa", "adama", "asosa", "merkato"];
  let [selected, setSelected] = useState(1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, ind) => (
          <li
            className={
              selected === ind ? "list-group-item active" : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelected(ind);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
