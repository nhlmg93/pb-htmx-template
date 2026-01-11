const { button, div, h1, span, p } = van.tags;

const Counter = () => {
  // 1. Create a reactive state initialized to 0
  const count = van.state(0);

  // 2. Return the UI structure
  return div(
    h1("VanJS Counter"),
    p(
      "Count: ",
      span(count), // VanJS automatically tracks this state
    ),
    button({ onclick: () => count.val++ }, "➕ Increment"),
    button({ onclick: () => count.val-- }, "➖ Decrement"),
  );
};

van.add(document.body, Counter());
