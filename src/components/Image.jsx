function Image(props) {
  return (
    <img
      src={props.src}
      alt={props.alt ? props.alt : ""}
      className={props.style}
      loading={props.loading ? props.loading : "eager"}
    />
  );
}

export default Image;
