# Temper Sortable Post List Assignment

This example project demonstrates a list with sortable posts, made as part of an assignment for Temper.

The project is built with Nuxt 3 (Vue 3) and Tailwind. I've deployed a live demo using Vercel, which you can find here: https://temper-sortable-list-demo.vercel.app/

## Project Structure

The project follows a typical Nuxt 3 folder structure:

- `app.vue`: Contains the main application view – no routing, since there's just 1 page.
- `components/`: Contains (reusable) components for the lists, and a container + section.
- `composables/`: Contains composable functions for fetching the post and manipulating the state.
- `assets/`: Contains static assets like images and a stylesheet.
- `types/`: Typescript interfaces for Post and History entities.

## Functionality

This example project features a list of posts that have been fetched from an API endpoint. It allows the user to sort the posts using buttons. It keeps track of the sorting history and features a basic undo functionality. I've also added drag-and-drop for improved UX and bonus points :).

Key features of the project:

- Fetching posts: The posts are fetched using a simple API call in the `usePosts` composable.
- State management: Uses composables for simple and basic state management to update the position of posts.
- History & Undo: Features a `useHistory` composable with a basic implementation of an undo stack, allowing the user to roll back their changes.

## Setup and Installation

To run the example project locally, follow these steps:

1. Clone the repository or download the source code.
2. Ensure you have Node.js and npm installed on your machine.
3. Open a terminal or command prompt in the project directory.
4. Run the following command to install project dependencies:
   ```shell
   yarn install
   ```
5. After the installation is complete, start the development server by running:
   ```shell
   yarn dev
   ```
6. Open a web browser and navigate to `http://localhost:3000/` to view the application.

## Unit Testing

The project includes unit tests for the `useHistory` and `usePosts` composables, to ensure the state manipulation and time-travelling work correctly. To run the tests, use the following command:

```shell
yarn test
```

This will execute the tests and provide feedback on their results.

## License

This project is released under the [MIT License](LICENSE).

---

Thank you for checking out this example project! If you have any questions or feedback, please don't hesitate to reach out.
