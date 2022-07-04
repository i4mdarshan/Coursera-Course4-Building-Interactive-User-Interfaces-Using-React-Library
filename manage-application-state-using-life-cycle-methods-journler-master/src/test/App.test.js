import { screen, cleanup } from '@testing-library/react';
import { render } from "react-dom";
import { act } from 'react-dom/test-utils';

import axios from "axios";


import App from '../App';

let container = null;
describe("landing view", () => {
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);

  });
  afterEach(() => cleanup());

  test("should have exported App Component", function () {
    expect(typeof (App)).toEqual("function");
  });


  test('Should have Journler branding in the app', () => {
    act(() => {
      render(<App />, container);
    });
    expect(screen.getAllByText("Journler")).toHaveLength(1);
  });

  test('Should be displaying the current date in the editor mode of the app', () => {
    act(() => {
      render(<App />, container);
    });
    const currentDate = new Date();
    const months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"]
    const currentDateAsNumber = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    let todayDate = `${currentDateAsNumber} ${month} ${year}`;
    expect(screen.getAllByText(todayDate)).not.toBeNull();
  });

  test('should have editor mode by default', () => {
    act(() => {
      render(<App />, container);
    });

    const inputElement = document.getElementsByTagName('input')[0].getAttribute('placeholder');
    expect(inputElement).toContain("What's on your Mind?");
  });

  test('should be a text box in the page in editor mode', () => {
    act(() => {
      render(<App />, container);
    });

    const inputElement = document.getElementsByTagName('input')[0].getAttribute('placeholder');
    expect(inputElement).toContain("What's on your Mind?");
  });


test(`Expect textBox to be there in the Journal with placeholder I am all excited to know how was your day like!`, async () => {
  act(() => {
    render(<App />, container);
  });
  const inputElement = document.getElementsByTagName('textarea')[0].getAttribute('placeholder');
  expect(inputElement).toContain(
    `I am all excited to know how was your day like!`
  );
});
const findButtonByText = text =>
  [...document.querySelectorAll('button')]
    .find(btn => btn.textContent.includes(text));

test('Expect save button be there to add new journals', async () => {
  act(() => {
    render(<App />, container);
  });
  const btnElement = findButtonByText('Save' || 'save' || 'SAVE');
  expect(btnElement.textContent).not.toBeNull;
});

test('Expect Clear button be there to cancel', async () => {
  act(() => {
    render(<App />, container);
  });
  const btnElement = findButtonByText('Clear' || 'clear' || 'CLEAR');
  expect(btnElement.textContent).not.toBeNull;
});

test('Should have one journal item listed while loading the application', async () => {
  let response = {
    data: [{
      "id": 1645160241027,
      "title": "Sweet memories",
      "writeup": "Working",
      "mood": "Excited",
      "journalDate": "18 February 2022"
    }]
  };
  const getMock = jest.spyOn(axios, "get").mockImplementation((url) => Promise.resolve(response));
  await act(async () => {
    render(<App />, container);
  });
  expect(getMock).toHaveBeenCalled();
  expect(screen.getAllByText(/Sweet/)).toBeTruthy();
 
});

});

