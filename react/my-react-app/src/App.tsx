import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
type CardProps = React.PropsWithChildren<{}>;
type AvatarProps = {
  person: {
    name: string;
  };
  size: number;
};

function Card({ children }: CardProps) {
  return <div>{children}</div>;
}

function Avatar({ person, size }: AvatarProps) {
  return (
    <img src="/puppy.webp" alt={person.name} width={size} height={size}></img>
  );
}

function Profile2() {
  return (
    <Card>
      <h1>head</h1>
      <Avatar
        size={300}
        person={{
          name: "li",
        }}
      ></Avatar>
    </Card>
  );
}

type ItemProps = {
  name: string;
  isPacked: any;
};

function Item({ name, isPacked }: ItemProps) {
  return (
    <li>
      {" "}
      {name} && {isPacked && "✅"}
    </li>
  );
}

function ItemList() {
  return (
    <section>
      <Item isPacked={true} name="space suit"></Item>
      <Item isPacked={true} name="Helemet with a golden leaf"></Item>
      <Item isPacked={false} name="rosemary on a cloud"></Item>
    </section>
  );
}

import { people } from "./data";

function List() {
  const itemList = people.map((person) => (
    <li key={person.id} className="person-item">
      <div className="person-text">
        <p className="person-name">
          <b>{person.name}</b>
        </p>
        <p className="person-accomplishment">
          {" " + person.profession + " " + person.accomplishment}
        </p>
      </div>

      <img
        className="person-image"
        src={person.imageId}
        alt={person.name}
        width={70}
        height={70}
      />
    </li>
  ));
  return (
    <article>
      <h1>scienticts</h1>
      <ul>{itemList}</ul>
    </article>
  );
}
export default List;
