import styled from "styled-components";
import ChartBar from "./ChartBar";

const Chart = ({ rating }: { rating: number[] }) => {
  const stars = ["5 starts", "4 starts", "3 starts", "2 starts", "1 starts"];
  const totalReview = rating.length;
  const percentages: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

  for (const r of rating) {
    percentages[r]++;
  }

  return (
    <StyledChart>
      {stars.map((star, index) => {
        const percentage =
          (percentages[stars.length - index] / totalReview) * 100;

        return (
          <div key={index} className="bar">
            {star}
            <ChartBar percentageValue={percentage} />
            {percentage}%
          </div>
        );
      })}
    </StyledChart>
  );
};

export default Chart;

const StyledChart = styled.div`
  padding-top: 1rem;
  .bar {
    padding: 0.3rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #4d4d4d;
    font-size: 0.8rem;
  }
`;
