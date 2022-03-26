const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      // imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      imageUrl: "https://i.ibb.co/qFGtKtn/hats.jpg",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/tqM5wQK/image-2.jpg",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl:
        "https://i.ibb.co/Qmp9PHH/seth-doyle-BZ2-PNGD5-Emw-unsplash.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl:
        "https://i.ibb.co/n6NL5jL/seth-doyle-R5t-Hd-a-Ym-Ps-unsplash.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
