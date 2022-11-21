import { logRoles, render, screen } from "@testing-library/react";
import SummaryForm from "../Summaryform";
import userEvent from "@testing-library/user-event";

//checkbox is unchecked by default
test("checkbox is unchecked and toggles button", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const button = screen.getByRole("button", { name: /confirm order/i });

  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();

  await user.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(button).toBeEnabled();

  await user.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();
});

test("popover responds to hover", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  //popover starts hidden
  const Popover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(Popover).not.toBeInTheDocument();
  //popover appears on mouseover of checkbox label

  //popover disappears when we mouse out
});
