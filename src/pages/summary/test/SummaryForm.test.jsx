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
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole("button", { name: /confirm order/i });
  expect(confirmButton).toBeDisabled();

  await user.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(confirmButton).toBeEnabled();

  await user.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(confirmButton).toBeDisabled();
});

test("popover responds to hover", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  //popover starts hidden
  const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
  expect(nullPopover).not.toBeInTheDocument();
  //popover appears on mouseover of checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i)
    await user.hover(termsAndConditions)
    const popover = screen.getByText(/no ice cream will actually be delivered/i)
    expect(popover).toBeInTheDocument()

  //popover disappears when we mouse out
      await user.unhover(termsAndConditions);
      expect(popover).not.toBeInTheDocument();

});
