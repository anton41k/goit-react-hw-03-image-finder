const fetchGallery = ({ searchQuery = "", currentPage = 1, pageSize = 12 }) => {
  const url = "https://pixabay.com/api/";
  const key = "22580473-9722fdac11ed5197610aea928";
  const options = "image_type=photo&orientation=horizontal";
  const BASE_URL = `${url}?q=${searchQuery.trim()}&page=${currentPage}&key=${key}&${options}&per_page=${pageSize}`;
  return fetch(BASE_URL).then((response) => response.json());
};

export default { fetchGallery };
