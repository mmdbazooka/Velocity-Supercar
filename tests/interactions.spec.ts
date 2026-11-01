import { test, expect } from "@playwright/test";
test("color assets, gallery navigation, Escape and local inquiry work", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Crimson", exact: true }).click();
  await expect(page.locator(".showroom-car img")).toHaveAttribute(
    "alt",
    /Crimson/,
  );
  await page.getByRole("button", { name: "Open Crimson image" }).click();
  const gallery = page.getByRole("dialog", { name: "The V9 studio gallery" });
  await expect(gallery).toBeVisible();
  await page.keyboard.press("ArrowRight");
  await expect(gallery.locator("img")).toHaveAttribute("alt", /Silver/);
  await page.keyboard.press("ArrowLeft");
  await expect(gallery.locator("img")).toHaveAttribute("alt", /Crimson/);
  await page.keyboard.press("Escape");
  await expect(gallery).not.toBeVisible();
  await page
    .getByRole("button", { name: "RESERVE A VIEWING", exact: true })
    .first()
    .click();
  const inquiry = page.getByRole("dialog", {
    name: "A closer look. A new perspective.",
  });
  await inquiry.getByLabel("Your name").fill("Alex Test");
  await inquiry.getByLabel("Email address").fill("alex@example.com");
  await inquiry
    .getByLabel("What do you have in mind?")
    .fill("I would like to explore the silver concept study.");
  await inquiry.getByRole("button", { name: "Preview your inquiry" }).click();
  await expect(inquiry.getByRole("status")).toContainText(
    "Nothing was sent, reserved, or saved.",
  );
});
