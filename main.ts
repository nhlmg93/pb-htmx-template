import "./pb_public/global.css";
import van from "vanjs-core";
import Pocketbase from "pocketbase";

const pb = new Pocketbase(import.meta.env.VITE_PB_SERVER);

const { button, div, h1, span, p } = van.tags;

const Counter = () => {
  const count = van.state(0);
  const post = van.state("");

  (async () => {
    await pb.collection("_superusers").authWithPassword(
      import.meta.env.VITE_PB_ADMIN,
      import.meta.env.VITE_PB_ADMIN_PASSWORD,
    );
    const result = await pb.collection("posts").getFirstListItem("");
    post.val = result.body;
  })();

  return div(
    h1("VanJS Counter"),
    p(
      post,
    ),
    p(
      "Count: ",
      span(count),
    ),
    button({ onclick: () => count.val++ }, "➕ Increment"),
    button({ onclick: () => count.val-- }, "➖ Decrement"),
  );
};

van.add(document.getElementById("app")!, Counter());
