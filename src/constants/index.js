export const ALERT_TIMEOUT = 3000;
export const DEV_ENV = "dev";
export const PROD_ENV = "prod";
export const APP_ENV = DEV_ENV;
export const API_LOG = APP_ENV === DEV_ENV;
export const API_TIMEOUT = 30000;

// DATE FORMATS
export const DATE_FORMAT1 = "MMM DD, YYYY";
export const DATE_FORMAT2 = "DD, MMM YY";
export const DATE_FORMAT3 = "YYYY-MM-DD";
export const DATE_FORMAT4 = "DD-MM-YYYY";
export const TIME_FORMAT1 = "hh:mma";
export const TIME_FORMAT2 = "hh:mm";
export const TIME_FORMAT3 = "hh";
export const DATE_TIME = "Do MM YYYY, hh:mm a";

// VALIDATION REGEX
export const ALLOW_ALPHABETS_REGEX = new RegExp(/^[a-zA-Z\s]*$/); // allow only alphabets and white spaces
export const ALLOW_ALPHANUM_REGEX = new RegExp(/^[a-zA-Z0-9]*$/); // allow only alphabets and numbers

// ACCESS TYPES
export const ACCESS_TYPES = {
  AUTH: "auth",
  PRIVATE: "private",
  PUBLIC: "public",
};

// REACT TOASTIFY ALERT CONFIGURATION
export const ALERT_POSITIONS = {
  TOP_Right: "top-right",
  TOP_LEFT: "top-left",
  TOP_CENTER: "top-center",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_CENTER: "bottom-center",
};
export const ALERT_THEMES = {
  DARK: "dark",
  COLORED: "colored",
  LIGHT: "light",
};
export const ALERT_TYPES = {
  INFO: "info",
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  DEFAULT: "default",
};

// PUBLIC ROUTES
export const HOME_ROUTE = "/";
export const PRICE_PLAN = "/price-plan";
// AUTH ROUTES
export const LOGIN_ROUTE = "/login";
// PRIVATE ROUTES
export const DASHBOARD_ROUTE = "/dashboard";

export const freeEffects = [
  {
    title: "Fix Minor Chin/Jawline",
    guideText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    name: "chinJawline",
  },
  {
    title: "Retain Target’s Mouth",
    guideText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    name: "targetMouth",
  },
  {
    title: "Keep Eyes Shut",
    guideText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    name: "eyeShut",
  },
  {
    title: "Fix Hairline",
    guideText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    name: "hairLine",
  },
];

export const paidEffects = [
  {
    title: "Face Textuizer",
    guideText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    name: "faceTextuizer",
    range: false,
  },
  {
    title: "Sharpen",
    guideText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    name: "sharpe",
    range: false,
  },
  {
    title: "Expressionify",
    guideText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    name: "expressionify",
    range: true,
  },
  {
    title: "Oldify",
    guideText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    name: "oldify",
    range: true,
  },
  {
    title: "Youngify",
    guideText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    name: "youngify",
    range: true,
  },
];

export const pricePlan = [
  {
    title: "free",
    price: "$0.00",
    content:
      "The generous and daily Free Plan not seen in most other AI services allows you to",
    detailList: [
      "Morph 1 face per image. If multiple faces in one image, morph will be on the largest detected face in the image.",
      "50 credits every 24 hours for face morphing on pictures. Credits do not accrue and they reset daily at 0:00 UTC for everyone.",
      "Cost of 3 credits when performing a face morph on any images Save up to 20 source face identities",
      "Great for casual users who want to enjoy basic face morphing features for free.",
    ],
  },
  {
    title: "Basic Plan",
    price: "$9.99/mon",
    content: "The Basic Plan gives you",
    detailList: [
      "Morph up to 4 faces per image! (Does not include  Xtreme, Artify, GIF or Video)",
      "EXCLUSIVE Access to the amazing new (4 credits), the newer supercharged XTREME and ARTIFY modes (4 credits), Face Texturizer Mode, Sharpen, Expressionify, Oldify, and Youngify features!",
      "200 credits per day. Credits reset daily and do not accrue.",
      "Save up to 60 source face identities",
      "4096px max resolution! Automatically receive the highest resolution possible based on your source and target images being above 4096px",
      "Cost of 1 credits when performing a face morph on any images. Cost of 2 credits if face swapping more than 2 faces on a single target image.",
      "Best for power users who want multi-face morphing and a big boost in daily credits.",
    ],
  },
  {
    title: "Pro Plan",
    price: "$19.99/mon",
    content: "Pro Plan offers",
    detailList: [
      "Morph up to 4 faces per image! (Does not include  Xtreme, Artify, GIF or Video)",
      "EXCLUSIVE Access to the amazing new (4 credits), the newer supercharged XTREME and ARTIFY modes (4 credits), Face Texturizer Mode, Sharpen, Expressionify, Oldify, and Youngify features!",
      "200 credits per day. Credits reset daily and do not accrue.",
      "Save up to 60 source face identities",
      "4096px max resolution! Automatically receive the highest resolution possible based on your source and target images being above 4096px",
      "Cost of 1 credits when performing a face morph on any images. Cost of 2 credits if face swapping more than 2 faces on a single target image.",
      "Best for power users who want multi-face morphing and a big boost in daily credits.",
    ],
  },
  {
    title: "Ultra Plan",
    price: "$34.99/mon",
    content: "Ultra Plan brings you",
    detailList: [
      "Morph up to 4 faces per image! (Does not include  Xtreme, Artify, GIF or Video)",
      "EXCLUSIVE Access to the amazing new (4 credits), the newer supercharged XTREME and ARTIFY modes (4 credits), Face Texturizer Mode, Sharpen, Expressionify, Oldify, and Youngify features!",
      "200 credits per day. Credits reset daily and do not accrue.",
      "Save up to 60 source face identities",
      "4096px max resolution! Automatically receive the highest resolution possible based on your source and target images being above 4096px",
      "Cost of 1 credits when performing a face morph on any images. Cost of 2 credits if face swapping more than 2 faces on a single target image.",
      "Best for power users who want multi-face morphing and a big boost in daily credits.",
    ],
  },
];
