export default function apiService(searchQuery, pageNumber, keyQuery) {
    return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageNumber}&per_page=12&key=${keyQuery}`)
}