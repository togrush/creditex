export function getCustomTrackWidth(inputRange) {
  return `${
    ((inputRange.value - inputRange.min) / (inputRange.max - inputRange.min))
    * 100
  }%`;
}
