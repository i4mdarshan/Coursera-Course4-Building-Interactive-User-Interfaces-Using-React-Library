import { render, screen, cleanup } from '@testing-library/react';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import App from '../App';

describe("landing view", () => {
    beforeEach(() => {
        render(<App />);
    });
    afterEach(() => cleanup());

    test("should have exported App Component", function () {

        const reportWebVitals = jest.fn();
        const root = document.createElement('div');
        root.id = 'root';
        document.body.appendChild(root);
      
        require('./../index.js');
      
        expect(typeof (App)).toEqual("function");
        expect(typeof (reportWebVitals)).toEqual("function");
      
    });

    it("should contain header Tag", () => {
        expect(document.getElementsByClassName("App-header")[0].innerHTML).toBe("<h2>Theme Comparer</h2>");
    })

});


describe("should have div with class name catalog", () => {

    beforeEach(() => {
        render(<App />);
    });
    afterEach(() => cleanup());

    it("should contain h3 Tag", () => {
        expect(document.getElementsByTagName("h3").length).toBeGreaterThanOrEqual(1);
    })

});

let container = null;

describe("should have form with id", () => {

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
        render(<App />);
    });
    afterEach(() => cleanup());

    test("should have exported App Component", function () {
        expect(typeof (App)).toEqual("function");
    });
    
    
    test('Should have Journler branding in the app', () => {
        act(() => {
          render(<App />, container);
        });
        expect(screen.getAllByText("Theme Comparer").length).toBeGreaterThan(1);
    });

    it("should contain form Tag", () => {
        expect(document.getElementById("catalog-form")).toBeTruthy();
    })

    test('Should have one theme item listed while loading the application', async () => {
        let response = {
          data: [{
            "id": 1,
            "name": "dark-theme",
            "backgroundColor": "black",
            "color": "whitesmoke",
            "fontFamily": "Courier",
            "fontWeight": "700"
          }]
        };
        const getMock = jest.spyOn(axios, "get").mockImplementation((url) => Promise.resolve(response));
        await act(async () => {
          render(<App />, container);
        });
        expect(getMock).toHaveBeenCalled();
    });

    test('should have form input with placeholder Theme Name', () => {
        act(() => {
          render(<App />, container);
        });
    
        const inputElement = document.getElementsByTagName('input')[0].getAttribute('placeholder');
        expect(inputElement).toContain("Theme Name");
    });

    test('should have form input with placeholder Background Color', () => {
        act(() => {
          render(<App />, container);
        });
    
        const inputElement = document.getElementsByTagName('input')[1].getAttribute('placeholder');
        expect(inputElement).toContain("Background Color");
    });

    test('should have form input with placeholder Foreground Color', () => {
        act(() => {
          render(<App />, container);
        });
    
        const inputElement = document.getElementsByTagName('input')[2].getAttribute('placeholder');
        expect(inputElement).toContain("Foreground Color");
    });

    test('should have post call in save journals',
        async () => {
            let response = {
            data: {
                "id": 1,
                "name": "dark-theme",
                "backgroundColor": "black",
                "color": "whitesmoke",
                "fontFamily": "Courier",
                "fontWeight": "700"
            }
            };
            const saveMock = jest.spyOn(axios, "post").mockImplementation((url) => Promise.resolve(response));
            await act(async () => {
            render(<App />, container);
            });

            let saveButton = document.getElementById("add_theme");
            await act(async () => {
            saveButton.dispatchEvent(new MouseEvent('click', { bubbles: true }))
            })
            expect(saveMock).toHaveBeenCalledTimes(1);
        });

});


describe("should have delete them call",() => {

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
        render(<App />);
    });
    afterEach(() => cleanup());

    test('should be a delete api call', async () => {

        let response = {
            data: {
                "id": 1,
                "name": "dark-theme",
                "backgroundColor": "black",
                "color": "whitesmoke",
                "fontFamily": "Courier",
                "fontWeight": "700"
            }
          };

        const deleteMock = jest.spyOn(axios, "delete").mockImplementation((url) => Promise.resolve(response));

        await act(async () => {
          document.getElementsByTagName("button")[1].dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        expect(deleteMock).toHaveBeenCalledTimes(0);
    });

});

