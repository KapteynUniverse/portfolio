function List({ items, style }) {
  return (
    <ul className={style || ""}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default List;
