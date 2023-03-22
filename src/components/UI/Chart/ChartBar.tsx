import styled from "styled-components";

const ChartBar = (props: any) => {
  let barFill = props.percentageValue + "%";
  console.log(barFill);
  return (
    <StyledChartBar>
      <div className="bar_fill" style={{ width: barFill }}></div>
    </StyledChartBar>
  );
};

export default ChartBar;

const StyledChartBar = styled.div`
  height: 6px;
  width: 70%;
  border: none;
  border-radius: 12px;
  background-color: #b9b9b9;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .bar_fill {
    background-color: #ff8c38;
    height: 8px;
  }
`;
