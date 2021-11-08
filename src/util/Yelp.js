const apiKey = 'NjxUtdUzZQO-I7dn3nx9Gf35bxiecqmBQkzG1qRDqYKYO17LYTIXirUdv57H41Yictm-OdJH4F7YIKJChTD-LQQrRxyFBL-ewGY0FU7I7-EvtgyPlr62isGwTRv_X3Yx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            }).then(response => {
                return response.json();
            }).then(jsonResponse => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => ({
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }));
                }
            });
    }
};

export default Yelp;