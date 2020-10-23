import axios from 'axios';
import { API } from 'src/constants';
import { PostingStateInterface } from 'src/store/feed/state';

export const getPosts = () =>
  axios.get<{ posts: PostingStateInterface[] }>(`${API}/posts`)
    .then(({ data: { posts = [] } }) => posts);
