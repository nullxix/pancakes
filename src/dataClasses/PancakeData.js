
class PancakeDataUrls {
    constructor (big, medium, thumb) {
        this.big = big
        this.medium = medium
        this.thumb = thumb
    }
}

class PancakeData {
    /**
     * 
     * @param {PancakeDataUrls} urls 
     * @param {Array<Object>} reviews 
     */
    constructor (urls, reviews) {
        this.urls = urls
        this.reviews = reviews
    }
}


export default PancakeData