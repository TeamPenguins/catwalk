const Products = [
  {
    "id": 1,
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140"
  },
  {
    "id": 2,
    "name": "Bright Future Sunglasses",
    "slogan": "You've got to wear shades",
    "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
    "category": "Accessories",
    "default_price": "69"
  },
  {
    "id": 3,
    "name": "Morning Joggers",
    "slogan": "Make yourself a morning person",
    "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
    "category": "Pants",
    "default_price": "40"
  },
  {
    "id": 4,
    "name": "Slacker's Slacks",
    "slogan": "Comfortable for everything, or nothing",
    "description": "I'll tell you how great they are after I nap for a bit.",
    "category": "Pants",
    "default_price": "65"
  },
  {
    "id": 5,
    "name": "Heir Force Ones",
    "slogan": "A sneaker dynasty",
    "description": "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
    "category": "Kicks",
    "default_price": "99"
  }
];

const ReviewsForProductFive = {
  "product": "5",
  "page": 0,
  "count": 5,
  "results": [
    {
      "review_id": 12,
      "rating": 3,
      "summary": "They're heavy but great",
      "recommend": 0,
      "response": "",
      "body": "I like them but they run wide.",
      "date": "2019-04-13T00:00:00.000Z",
      "reviewer_name": "thinfootjim",
      "helpfulness": 4,
      "photos": []
    },
    {
      "review_id": 57427,
      "rating": 2,
      "summary": "Are these even shoes?",
      "recommend": 0,
      "response": null,
      "body": "What even are these?",
      "date": "2020-10-09T00:00:00.000Z",
      "reviewer_name": "Confused",
      "helpfulness": 2,
      "photos": []
    },
    {
      "review_id": 57426,
      "rating": 5,
      "summary": "My favorite shoes",
      "recommend": 1,
      "response": null,
      "body": "These are just fantastic shoes. I love them and I'm never taking them off.",
      "date": "2020-10-09T00:00:00.000Z",
      "reviewer_name": "luvslie",
      "helpfulness": 1,
      "photos": []
    }
  ]
};

module.exports = {
  Products,
  ReviewsForProductFive,
};