import Pocketbase from "pocketbase";

const pb = new Pocketbase("http://localhost:8090");

import { randEmail, randFullName } from "@ngneat/falso";

await pb.collection("_superusers").authWithPassword(
  "admin@admin.com",
  "rootrootroot",
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
