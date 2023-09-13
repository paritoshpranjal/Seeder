import { act, render, screen } from "@testing-library/react";

import SummaryBox from ".";

test("Should Render a Dropdown Button with Props", () => {
    render(
      <SummaryBox ChangeSlider={()=>{}}/>
      
    );
    
  });