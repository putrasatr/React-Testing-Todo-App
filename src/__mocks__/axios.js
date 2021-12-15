const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Putra",
          last: "Pratama",
        },
        picture: {
          large: "",
        },
        login: {
          username: "utaCobrah",
        },
      },
    ],
  },
};

const defaultMocks = {
  get: jest.fn().mockResolvedValue(mockResponse),
};

export default defaultMocks;
