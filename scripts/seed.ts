import Pocketbase from "pocketbase";

const pb = new Pocketbase("http://localhost:8090");

import { randEmail, randFullName, randPost } from "@ngneat/falso";

await pb.collection("_superusers").authWithPassword(
  Deno.env.get("VITE_PB_ADMIN")!,
  Deno.env.get("VITE_PB_ADMIN_PASSWORD")!,
);

console.log("Seeding Users");
for (let i = 0; i < 5; i++) {
  await pb.collection("users").create({
    email: randEmail(),
    emailVisibility: false,
    verified: true,
    name: randFullName(),
    password: "rootrootroot",
    passwordConfirm: "rootrootroot",
  });
}

console.log("Seeding Posts");
await pb.collection("posts").create({ body: randPost().body });
