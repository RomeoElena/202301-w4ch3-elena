import { render } from "@testing-library/react";
import { App } from "./App";
import { Header } from "../header/header";
import { Card } from "../../../features/components/card";

jest.mock("../header/header");
jest.mock("../../../feature/components/card");

describe("Given App component", () => {
  describe("When it is render", () => {
    test("Then it should call Header & Card", () => {
      render(<App />);
      expect(Header).toHaveBeenCalled();
      expect(Card).toHaveBeenCalled();
    });
  });
});
