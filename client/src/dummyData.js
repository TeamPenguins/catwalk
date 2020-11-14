const Products = [
  {
    "id": 1,
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140",
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

const questionsList = {
  "product_id": "1",
  "results": [{
    "question_id": 37,
    "question_body": "Why is this product cheaper here than other sites?",
    "question_date": "2018-10-18T00:00:00.000Z",
    "asker_name": "williamsmith",
    "question_helpfulness": 4,
    "reported": 0,
    "answers": {
      68: {
        "id": 68,
        "body": "We are selling it here without any markup from the middleman!",
        "date": "2018-08-18T00:00:00.000Z",
        "answerer_name": "Seller",
        "helpfulness": 4,
        "photos": []
      }
    }
  },
  {
    "question_id": 38,
    "question_body": "How long does it last?",
    "question_date": "2019-06-28T00:00:00.000Z",
    "asker_name": "funnygirl",
    "question_helpfulness": 2,
    "reported": 0,
    "answers": {
      70: {
        "id": 70,
        "body": "Some of the seams started splitting the first time I wore it!",
        "date": "2019-11-28T00:00:00.000Z",
        "answerer_name": "sillyguy",
        "helpfulness": 6,
        "photos": [],
      },
      78: {
        "id": 78,
        "body": "9 lives",
        "date": "2019-11-12T00:00:00.000Z",
        "answerer_name": "iluvdogz",
        "helpfulness": 31,
        "photos": [],
      }
    }
  },
  ]

};

const answerList = {
  "question": "1",
  "page": 0,
  "count": 5,
  "results": [
    {
      "answer_id": 8,
      "body": "What a great question!",
      "date": "2018-01-04T00:00:00.000Z",
      "answerer_name": "metslover",
      "helpfulness": 8,
      "photos": [],
    },
    {
      "answer_id": 5,
      "body": "Something pretty durable but I can't be sure",
      "date": "2018-01-04T00:00:00.000Z",
      "answerer_name": "metslover",
      "helpfulness": 5,
      "photos": [{
        "id": 1,
        "url": "urlplaceholder/answer_5_photo_number_1.jpg"
      },
      {
        "id": 2,
        "url": "urlplaceholder/answer_5_photo_number_2.jpg"
      },
      ]
    },
  ]
};

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
  questionsList,
  answerList,
};