// Test away

import React from 'react';
import { render } from 'react-testing-library';
import Dashboard from './Dashboard';


describe("Dashboard Testing", () => {
    it('display is rendering', () =>{
        const { getByText } = render(<Dashboard />);
        expect(getByText("Unlocked"));
        expect(getByText("Open"));
        expect(getByText("Lock Gate"));
        expect(getByText("Close Gate"));        
    });
})