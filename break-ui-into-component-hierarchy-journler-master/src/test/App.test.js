import { render, screen, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import App from '../App';

let container = null;
describe("landing view", () => {
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
    expect(screen.getAllByText("Journler")).not.toBeNull;
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
