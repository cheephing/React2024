export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => onToggleItem(item.id)}
        checked={item.packed}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => onDeleteItem(item.id)}
      >
        X
      </button>
    </li>
  );
}
