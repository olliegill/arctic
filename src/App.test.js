import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import AppStore from "./stores/AppStore";

let appStore = new AppStore();

test('renders learn react link', () => {
    const { getByText } = render(
        <Provider appStore={appStore}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
