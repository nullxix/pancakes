const API_URL = '/.netlify/functions/'

async function getPancake(id){
    return [
        {}
    ]
}

function postPancakeReview(pancakeId, review){
    fetch(API_URL + 'post-review', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'pancake_id': pancakeId,
            ...review
        })
      })
    .then(res => {

    })
    .catch(err => {
        console.log(err)
    });
}

export default {}