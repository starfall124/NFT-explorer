import StyledArtCard from "./index.styled";

const ArtCard = ({ name, description, mediaUri, mimeType, creator }) => {
  const renderMedia = () => {
    const type = mimeType.split("/")[0];

    switch (type) {
      case "image":
        return <img src={mediaUri} alt="Media" />;

      case "video":
        return (
          <video controls>
            <source src={mediaUri} />
          </video>
        );

      case "audio":
        return (
          <audio controls>
            <source src={mediaUri} type={mimeType} />
          </audio>
        );

      default:
        return (
          <a href={mediaUri} target="_blank" rel="noreferrer">
            Download
          </a>
        );
    }
  };

  return (
    <StyledArtCard>
      <div className="artcard__media">{renderMedia()}</div>
      <div className="artcard__info">
        <div className="artcard__info__name">{name}</div>
        <div className="artcard__info__description">{description}</div>
        <a className="artcard__info__creator" href="#">
          {creator.id}
        </a>
      </div>
    </StyledArtCard>
  );
};

export default ArtCard;
