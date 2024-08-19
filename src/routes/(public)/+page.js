import { error } from '@sveltejs/kit';

// /** @type {import('./$types').PageLoad} */
// export function load({ params }) {
//   if (params.slug === 'hello-world') {
//     return {
//       title: 'Hello world!',
//       content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
//     };
//   }
//   error(404, 'Not found');
// }

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  console.log("Inside 'public/+page.js load()");

  return {
    categories: [
      {
        icon: "ion:fast-food-outline",
        name: "Food & Drink",
      },
      {
        icon: "cil:bathroom",
        name: "Bathroom",
      },
      {
        icon: "map:jewelry-store",
        name: "Jewelry",
      },
      {
        icon: "material-symbols:sports-tennis-outline",
        name: "Sports",
      },
      {
        icon: "zondicons:computer-laptop",
        name: "Tech",
      },
      {
        icon: "clarity:car-line",
        name: "Auto",
      },
      {
        icon: "icon-park-outline:entertainment",
        name: "Entertainment",
      },
      {
        icon: "streamline:travel-places-beach-island-waves-outdoor-recreation-tree-beach-palm-wave-water",
        name: "Travel",
      },
    ]
  }
}