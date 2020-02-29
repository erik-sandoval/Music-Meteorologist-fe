import React from "react";
import * as rtl from "@testing-library/react";
import AlbumInfo from "../components/dashboard/AlbumInfo.component.jsx";
import { Provider } from "react-redux";
import store from "./index.ts";


const album = {
    trackName: "Corbin and Joshue",
    artistName: "Cory & Josh",
    albumName: "Pinchies"
};

const renderComponent = () =>
    rtl.render(
        <Provider store={store}>
            <AlbumInfo showcase={album} />
        </Provider>
    );

describe("album showcase", () => {
    it("renders without crashing", () => {
        renderComponent();
    });

    it("renders trackName", () => {
        const container = renderComponent();
        container.queryAllByAltText(/trackName/i);
    });

    it("renders artistName", () => {
        const container = renderComponent();
        container.queryAllByAltText(/artistName/i);
    });

    it("renders albumName", () => {
        const container = renderComponent();
        container.queryAllByAltText(/albumName/i);
    });

});

