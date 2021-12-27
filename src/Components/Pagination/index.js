import StyledPagination from "./index.styled";

const Pagination = ({ page, handleNext, handlePrev }) => {
  return (
    <StyledPagination>
      <button onClick={handlePrev} disabled={page <= 1}>
        Prev
      </button>
      <input type="number" value={page} readOnly />
      <button onClick={handleNext}>Next</button>
    </StyledPagination>
  );
};

export default Pagination;
