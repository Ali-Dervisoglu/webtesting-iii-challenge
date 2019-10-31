// Test away!

import React from "react"
import { render, fireEvent } from "react-testing-library"
import Controls from "./Controls";

describe("<Controls />", () => {
    it("button open and unlock", () => {
        const mock = jest.fn();
        const { queryByText } = render(<Controls locked={false} closed={false} toggleClosed={mock} />)
        const lock = queryByText("Lock Gate");
        const close = queryByText("Close Gate");
        expect(lock.disabled).toBe(true);
        expect(close.disabled).toBe(false);
        fireEvent.click(close);
        expect(mock).toBeCalled();
    });

    it("button closed and unlock", () => {
        const mock = jest.fn();
        const { queryByText } = render(<Controls locked={false} closed={true} toggleClosed={mock} />)
        const lock = queryByText("Lock Gate");
        const open = queryByText("Open Gate");
        expect(lock.disabled).toBe(false);
        expect(open.disabled).toBe(false);
        fireEvent.click(open);
        expect(mock).toBeCalled();
    })

    it("button closed and locked", () => {
        const mock = jest.fn();
        const { queryByText } = render(<Controls locked={true} closed={true} toggleLocked={mock} />)
        const unlock = queryByText("Unlock Gate");
        const open = queryByText("Open Gate");
        expect(unlock.disabled).toBe(false);
        expect(open.disabled).toBe(true);
        fireEvent.click(unlock);
        expect(mock).toBeCalled();
    })
})