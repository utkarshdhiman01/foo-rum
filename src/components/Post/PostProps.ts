import type { PostType } from "../PostEditor/PostType";

export interface PostProps extends Omit<PostType, "id"> {}
