import { http } from "./hhtp";
import { ui } from "./ui";

// get posts on DOM load

document.addEventListener("DOMContentLoaded", getPosts);

function getPosts(data) {
  http
    .get("http://localhost:3000/posts")
    .then((data) => ui.showPosts(data))
    .catch((err) => console.log(err));
}
