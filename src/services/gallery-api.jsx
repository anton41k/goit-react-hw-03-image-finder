const URL = "https://pixabay.com/api/";

const fetchGallery = ({ searchQuery = "", currentPage = 1, pageSize = 12 }) => {
  const key = "22580473-9722fdac11ed5197610aea928";
  const options = "image_type=photo&orientation=horizontal";
  const baseUrl = `${URL}?q=${searchQuery.trim()}&page=${currentPage}&key=${key}&${options}&per_page=${pageSize}`;
  return fetch(baseUrl).then((response) => response.json());
};

export default { fetchGallery };
