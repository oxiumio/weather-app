export default function(locationTime) {
    if (locationTime >= 6 && locationTime < 11) {
      return "morning";
    } else if (locationTime >= 11 && locationTime < 17) {
      return "day";
    } else if (locationTime >= 17 && locationTime < 21) {
      return "evening";
    } else if ((locationTime >= 21 && locationTime <= 23) || locationTime < 6) {
      return "night";
    } else {
      return "neutral";
    }
  };