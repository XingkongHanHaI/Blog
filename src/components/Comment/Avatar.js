function Avatar(props) {
  return (
    <img className="Avatar" src={props.avatar.authorUrl} alt={props.avatar.name} />
  );
}

export default Avatar;