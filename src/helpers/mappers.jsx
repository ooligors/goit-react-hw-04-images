export const mapperImgs = (array) => { 
    return array.map(img => {
        return {
            id: img.id,
            webformatURL:img.webformatURL,
            largeImageURL: img.largeImageURL, 
        }
    })
}