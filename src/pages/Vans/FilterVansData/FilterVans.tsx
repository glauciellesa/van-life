import styled from "styled-components";
import Button from "../../../components/Button/Button";

const FilterVans = (props: {
  onSelecteVanType: (selectedType: string) => void;
}) => {
  const typeVans = ["Simple", "Luxury", "Rugged"];

  const handleVanType = (event: any) => {
    const selectedType = event.target.value;
    props.onSelecteVanType(selectedType);
  };
  return (
    <StyledFilter>
      {typeVans.map((typeVan) => {
        return (
          <div className="filter_button" key={typeVan}>
            <Button color="#ffead0" onClick={handleVanType} value={typeVan}>
              {typeVan}
            </Button>
          </div>
        );
      })}
    </StyledFilter>
  );
};

export default FilterVans;

const StyledFilter = styled.div`
  padding: 1rem 0;
  color: #4d4d4d;
  font-size: 0.8rem;
  display: flex;
  gap: 1rem;
`;
