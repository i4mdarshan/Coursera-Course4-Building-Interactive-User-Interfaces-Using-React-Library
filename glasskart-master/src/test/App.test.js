
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import { ProductList } from '../App';
let container

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
let products = [
  { productName: 'Aviator', outOfStock: false, price: '50 USD', imageSrc: 'glasskart-assets/aviator.jpg' },
  { productName: 'Cat Eye', outOfStock: true, price: '50 USD', imageSrc: 'glasskart-assets/cateye.jpg' },
  { productName: 'Reading', outOfStock: false, discountPrice: '30 USD', price: '50 USD', imageSrc: 'glasskart-assets/reading.jpg' },
  { productName: 'Rectangular', outOfStock: false, discountPrice: '30 USD', price: '50 USD', imageSrc: 'glasskart-assets/rectangular.jpg' },
  { productName: 'Rounded', outOfStock: false, price: '50 USD', imageSrc: 'glasskart-assets/rounded.jpg' },
];

test('Should have GlassKart items in the app', () => {
  act(() => {
    render(<ProductList products={products} />, container);
  });
  console.log(container.textContent);
  expect(container.textContent).toContain('Aviator');
  expect(container.textContent).toContain('Reading');
  expect(container.textContent).toContain('Rectangular');
  expect(container.textContent).toContain('Rounded');
});




