import { render } from "@testing-library/react";
import { ProgressBarWithTypo, ProgressBarWithTypoProps } from "./index";

describe("ProgressBarWithTypo", () => {
  const props: ProgressBarWithTypoProps = {
    headText: "Progress",
    bodyText: "80%",
  };

  it("renders the component with the correct props", () => {
    const { getByTestId } = render(<ProgressBarWithTypo {...props} />);
    const progressBar = getByTestId("myMProgressBar");
    expect(progressBar).toBeInTheDocument();

    const headText = getByTestId("myMProgressBar");
    expect(headText).toBeInTheDocument();

    const bodyText = getByTestId("myMProgressBar");
    expect(bodyText).toBeInTheDocument();
  });
});
