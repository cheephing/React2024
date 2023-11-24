export default function Stats({ items }) {
  if (!items.length) return <footer className="stats">Please add item</footer>;
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percent = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      {percent === 100 ? (
        <em>You got everything! Ready to go </em>
      ) : (
        <em>
          You need {numItems} items on your list, and you already packed{" "}
          {packedItems} ({percent}%)
        </em>
      )}
    </footer>
  );
}
