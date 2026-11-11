// One reusable Image component for all four characters.
function Image({ source, width, alt }) {
  return <img className="character-image" src={source} width={width} alt={alt} />
}

export default Image
