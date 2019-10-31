// Test away!

import React from "react"
import { render } from "react-testing-library"
import Display from "./Display";

describe("display", () => {

    it("gate is unlocked and open) ", () => {
      const { getByText } = render(<Display />);
      expect(getByText("Unlocked"));
      expect(getByText("Open"));
    })

    it("gate is locked and closed", () => {
      const { getByText } = render(<Display locked={true} closed={true} />);
      expect(getByText("Locked"));
      expect(getByText("Closed"));
    })
  })