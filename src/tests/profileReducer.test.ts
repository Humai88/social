import {
  addPostAC,
  ProfilePageType,
  profileReducer,
  setStatusAC,
  updateNewPostTextAC,
} from "./../redux/profileReducer";
let startState: ProfilePageType;
beforeEach(() => {
  startState = {
    posts: [
      {
        id: "1",
        post:
          "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.",
        likes: 9,
      },
      {
        id: "2",
        post:
          "I alone cannot change the world, but I can cast a stone across the water to create many ripples.",
        likes: 7,
      },

      {
        id: "3",
        post:
          "Keep smiling, because life is a beautiful thing and there’s so much to smile about.",
        likes: 15,
      },
    ],
    newPostText: "",
    profile: null,
    status: "",
  };
});

test("status", () => {
  const endState = profileReducer(startState, setStatusAC("Hi"));
  expect(endState.status).toBe("Hi");
});
test("new post text", () => {
  const endState = profileReducer(startState, updateNewPostTextAC("Buy Milk"));
  expect(endState.newPostText).toBe("Buy Milk");
  expect(endState.posts[0].post).toBe("Buy Milk");
});
test("post should be added", () => {
  const endState = profileReducer(startState, addPostAC());
  expect(endState.posts.length).toBe(4);
});
