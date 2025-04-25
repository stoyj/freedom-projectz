const Icon = ({ src, alt, width = 24, height = 24 }) => {
  return (
    <img className="icon" src={src} alt={alt} width={width} height={height} />
  );
};

export default Icon;
