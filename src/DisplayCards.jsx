
function DisplayCards(props) {
    /// map through the villagers array and return a div with the image and name of each villager
  const allVillagers = props.villagers.map((v) => {
    return (
        /////// key={v} is used to identify each element in the array
      <div className="images">
        <p key={v}>
           
          <img
            src={v.image_uri}
            alt={v.name["name-USen"]}
            onClick={() => props.handleClick(v)}
          />

          <p>{v.name["name-USen"]}</p>
        </p>
      </div>
    );
  });
  return <ul>{allVillagers}</ul>;
}

export default DisplayCards;
