const products = [
    {
        "id": 1,
        "name":" Vasline Aloe Fresh Body Lotion",
        "price": 72,
        "image": "assets/images/aloe1.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    
    {
        "id": 3,
        "name":" Plum Vitamin-C Face Moisturiser",
        "price": 75,
        "image": "assets/images/p3.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    
    {
        "id": 5,
        "name":"Dot & Key Face Mist",
        "price": 65,
        "image": "assets/images/p5.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
   
    {
        "id": 8,
        "name":" Dot & Key Face Serum",
        "price": 50,
        "image": "assets/images/serum3.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
        "id": 14,
        "name":" Jumiso  Face serum",
        "price": 68,
        "image": "assets/images/jump.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
        "id": 15,
        "name":"Blueberry-milk FaceWash",
        "price": 68,
        "image": "assets/images/blue.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
        "id": 16,
        "name":"Ponds Bright Beauty FaceWash",
        "price": 55,
        "image": "assets/images/ponds1.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
        "id": 17,
        "name":" Nycinamide FaceWash",
        "price": 50,
        "image": "assets/images/nyc.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
        "id": 18,
        "name":"LaRoche-PosayEffaclar Purifying Cleanser",
        "price": 50,
        "image": "assets/images/la.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    
    {
        "id": 45,
        "name":" Lacto Calamine Vitamin-E Facewash",
        "price": 50,
        "image": "assets/images/lac.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
        "id": 46,
        "name":"Ponds Charcoal Facewash",
        "price": 50,
        "image": "assets/images/charcoal.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
        "id": 47,
        "name":" Fix-Derma Orange Facewash",
        "price": 50,
        "image": "assets/images/orng.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
        "id": 48,
        "name":"Mamaearth Charcoal Natural Facewash",
        "price": 50,
        "image": "assets/images/me.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
        "id": 49,
        "name":"Plum Green Tea-pore Cleansing Facewash",
        "price": 50,
        "image": "assets/images/plum.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
        "id": 50,
        "name":" Aroma Treasure Tea-Tree FaceWash",
        "price": 50,
        "image": "assets/images/tt.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
        "id": 51,
        "name":"Good Vibes Purifying FaceWash",
        "price": 50,
        "image": "assets/images/gv.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },

  ];
  export default products;