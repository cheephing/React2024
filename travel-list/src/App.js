import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((x) => x.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((x) => (x.id === id ? { ...x, packed: !x.packed } : x))
    );
  }

  function handleClearItem() {
    const confirmed = window.confirm("r u sure ");
    if (confirmed) setItems([]);
  }

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onToggleItem={handleToggleItem}
        onClearItem={handleClearItem}
      />
      <Stats items={items} />
    </div>
  );
}
