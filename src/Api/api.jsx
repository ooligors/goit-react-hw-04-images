import axios from 'axios';
const KEY = '28151063-e7dd8a3e4997fffdb31b020c7';
const URL = 'https://pixabay.com/api/';
async function getImages(query, page) {
  return await axios.get(
    `${URL}?key=${KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
}
export default getImages;
