/// <reference path="../pb_data/types.d.ts" />

routerAdd("get", "/health", (e) => {
  return e.string(200, "OK");
});

//const log = (msg) =>
//  console.log(
//    `\x1b[90m[DEBUG]\x1b[0m \x1b[36m${msg}\x1b[0m`,
//  );
routerAdd("get", "/", (e) => {
  const html = $template.loadFiles(
    `${__hooks}/views/layout.html`,
    `${__hooks}/views/home.html`,
  ).render({});

  return e.html(200, html);
});
