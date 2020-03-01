import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import AppStore from "./stores/AppStore";
jest.mock('./api/api');

let appStore = new AppStore();

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider appStore={appStore}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>, div
    );
});

describe("AppStore", () => {
  it("searches repos", () => {
    const appStore = new AppStore;
    beforeEach(() => {
        appStore.handleSearch("test ");
    });
    expect(appStore.searchResults).toEqual([])
  })
});
