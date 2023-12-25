import { Post } from "../utils/types";

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};
