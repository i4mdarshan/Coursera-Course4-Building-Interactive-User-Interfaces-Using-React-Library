import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';

describe("landing view", () => {
    beforeEach(() => {
        render(<App />);
    });
    afterEach(() => cleanup());
    it("should contain Pomodoro as title header and tabbed button with text `Pomodoro`", () => {
        expect(screen.getAllByText("Pomodoro")).toHaveLength(2)
    })
    it("should contain button as tabbed button with text `Short Break`", () => {
        expect(screen.getAllByText("Short Break")).toHaveLength(1);
    })
    it("should display 25:00 as time left", () => {
        expect(screen.queryByText("25:00")).not.toBeNull();
    });
    it("should contain button with text `start` to start Pomodoro", () => {
        expect(screen.getAllByText("start")).toHaveLength(1);
    });
    it("should display message with text `Time to Work!`", () => {
        expect(screen.getAllByText("Time to Work!")).toHaveLength(1);
    });
});

describe("When Pomodoro is started ", () => {
    beforeEach(() => {
        render(<App />);
        screen.getByText("start").click();
    });
    afterEach(() => cleanup());
    it("stop button should be displayed to pause Pomodoro", () => {
        expect(screen.queryByText("stop")).not.toBeNull();
        expect(screen.queryByText("start")).toBeNull();
    });
    it("end button should be displayed to switch to Short Break", () => {
        expect(screen.queryByText("end")).not.toBeNull();
    })
});

describe("When Pomodoro is stopped ", () => {
    beforeEach(() => {
        render(<App />);
        screen.getByText("start").click();
        screen.getByText("stop").click();
    });
    afterEach(() => cleanup());
    it("should contain button with text `start` to resume Pomodoro", () => {
        expect(screen.queryByText("start")).not.toBeNull();
    })
});

describe("When Pomodoro is ended ", () => {
    beforeEach(() => {
        render(<App />);
        screen.getByText("start").click();
        screen.getByText("end").click();
    });
    afterEach(() => cleanup());
    it("button with text `start` should be displayed to start Short Break", () => {
        expect(screen.queryByText("Short Break")).not.toBeNull();
        expect(screen.queryByText("start")).not.toBeNull();
    });
    it("should display 5:00 as time left", () => {
        expect(screen.queryByText("05:00")).not.toBeNull();
    });

    it("should display message with text `Time for Break!`", () => {
        expect(screen.queryByText("Time for Break!")).not.toBeNull();
    });
});

