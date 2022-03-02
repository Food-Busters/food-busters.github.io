/* eslint-disable no-console */
// @ts-check

// https://javascript.plainenglish.io/sveltekit-github-pages-4fe2844773de

import { publish } from "gh-pages";

publish(
  "build",
  {
    branch: "gh-pages",
    repo: "https://github.com/Food-Busters/food-busters.github.io.git",
    user: {
      name: "Leomotors",
      email: "59821765+Leomotors@users.noreply.github.com",
    },
    dotfiles: true,
  },
  () => {
    console.log("Deploy Complete!");
  }
);
