import faker from "faker";

// el is html element
const mountProducts = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
  // ReactDOM.render(<App />, el);
};

/**
 * Code needs to address both situations below
 */

/**
 * Context/Situation #1
 *   Running this file in development in isolation
 *   We are using our local index.html file which
 *   DEFINITENLY have an element with id of 'dev-product'
 *   Want to immediately render our app into that element
 *   No reason to delay
 */

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  // Assuming container does not have element with id 'dev-products'
  if (el) {
    mountProducts(el);
  }
}

/**
 * Context/Situation #2
 *   We are running this file in development or production
 *   through the CONTAINER app
 *   NO GUARANTEE that an element has an id of 'dev-product'
 *   WE DO NOT want to try to immediately render the app
 */
// Should leave this to the container
// Instead export the mount function for the container to import and use it
export { mountProducts };
