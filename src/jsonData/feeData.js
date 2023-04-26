export const feeStructure = {
  "Exam Fee": {
    INDIAN: {
      ALL_COURSES: {
        ALL_LEVEL: {
          amount: 400,
        },
      },
    },
    FOREIGN: {
      ALL_COURSES: {
        ALL_LEVEL: {
          amount: 100,
        },
      },
    },
    NRI: {
      ALL_COURSES: {
        ALL_LEVEL: {
          amount: 600,
        },
      },
    },
    SAARC: {
      ALL_COURSES: {
        ALL_LEVEL: {
          amount: 600,
        },
      },
    },
  },
  "Application Fee": {
    INDIAN: {
      ALL_COURSES: {
        UG: {
          amount: 200,
        },
        "UG-DIPLOMA": {
          amount: 300,
        },
        PG: {
          amount: 500,
        },
      },
    },
    FOREIGN: {
      ALL_COURSES: {
        UG: {
          amount: 400,
        },
        "UG-DIPLOMA": {
          amount: 400,
        },
        PG: {
          amount: 700,
        },
      },
    },
  },
};

export const coursesList = {
  ALL_COURSES: ["Medical", "Dental", "Ayurveda"],
  UG: ["UG"],
  "UG-DIPLOMA": ["UG-DIPLOMA"],
  PG: ["PG"],
};
