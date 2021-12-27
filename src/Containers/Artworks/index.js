import { useState } from "react";
import { useQuery } from "@apollo/client";

import { ArtCard, Pagination } from "../../Components";
import { LOAD_ARTWORKS } from "../../GraphQL/Queries";
import StyledArtworks from "./index.styled";

const Artworks = () => {
  const [page, setPage] = useState(1);
  const { error, loading, data } = useQuery(LOAD_ARTWORKS, {
    variables: { skip: (page - 1) * 10, first: 10 },
  });

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };
  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <StyledArtworks>
      <h1 className="artworks__title">Artworks</h1>
      <div className="artworks__body">
        {loading && <h2>Loading...</h2>}
        {data &&
          data.artworks.map((artwork) => (
            <div className="artworks__body__item" key={artwork.id}>
              <ArtCard
                name={artwork.name}
                description={artwork.description}
                mediaUri={artwork.mediaUri}
                mimeType={artwork.mimeType}
                creator={artwork.creator}
              />
            </div>
          ))}
        {error && <h2>{error}</h2>}
      </div>
      <Pagination page={page} handleNext={handleNext} handlePrev={handlePrev} />
    </StyledArtworks>
  );
};

export default Artworks;
