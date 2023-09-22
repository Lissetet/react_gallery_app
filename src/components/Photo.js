const Photo = ({data}) => {
  const url = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_z.jpg`;
  return (
    <li>
      <img src={url} alt={data.title} />
    </li>
  );
}

export default Photo;