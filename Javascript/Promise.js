async function getData() {
  console.time();
  const fetchUser = () =>
    fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
      res.json()
    );

  const fetchPosts = () =>
    fetch("https://jsonplaceholder.typicode.com/INVALID_URL").then((res) => {
      return res.json();
    });

  const fetchComments = () =>
    fetch("https://jsonplaceholder.typicode.com/comments?postId=1").then(
      (res) => res.json()
    );

  Promise.allSettled([fetchUser(), fetchPosts(), fetchComments()])
    .then(([user, posts, comments]) => {
      console.log("User:", user);
      console.log("Posts:", posts);
      console.log("Comments:", comments);
    })
    .catch((error) => {
      console.error("One of the API calls failed:", error.message);
    });

  console.timeEnd();
}

const data = getData();
