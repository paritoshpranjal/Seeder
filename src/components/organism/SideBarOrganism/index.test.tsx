import { act, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SideBar from ".";

describe("SideBar", () => {
  test("renders sidebar elements correctly", () => {
    render(
      <MemoryRouter>
        <SideBar />
      </MemoryRouter>
    );

    expect(screen.getByText("Seeder")).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Cash Accleration" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Watch how to" })
    ).toBeInTheDocument();
  });
  test("navigates to the correct page when a link is clicked", () => {
    render(
      <MemoryRouter>
        <SideBar />
      </MemoryRouter>
    );
    const cashAccelerationLink = screen.getByRole("link", {
      name: "Watch how to",
    });
    act(() => {
      cashAccelerationLink.click();
    });
    expect(screen.getByText("Watch how to")).toBeInTheDocument();
  });
  test("navigates to the correct page when a link is clicked", () => {
    render(
      <MemoryRouter>
        <SideBar />
      </MemoryRouter>
    );
    const cashAccelerationLink = screen.getByRole("link", {
      name: "Cash Accleration",
    });
    act(() => {
      cashAccelerationLink.click();
    });
    expect(screen.getByText("Cash Accleration")).toBeInTheDocument();
  });
   
});
