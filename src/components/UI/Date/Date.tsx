import styled from "styled-components";

const Date = (props: any) => {
  const date = props.date;

  const year = date?.getFullYear();
  const day = date?.toLocaleString("en-US", { day: "2-digit" });
  const month = date?.toLocaleString("en-US", { month: "long" });

  return (
    <StyledData>
      {month} {day}, {year}
    </StyledData>
  );
};

export default Date;

const StyledData = styled.div`
  color: #8c8c8c;
  font-weight: 500;
`;
