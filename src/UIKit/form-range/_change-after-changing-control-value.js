import { getLocaleString } from 'Utils/get-locale-string';
import { getCustomTrackWidth } from 'UIKit/form-range/_get-custom-track-width';

export function changeAfterChangingControlValue(
  inputRange,
  inputText,
  customTrack,
) {
  inputText.value = getLocaleString(
    inputRange.value,
    inputRange.dataset.isYears === 'true',
  );
  customTrack.style.width = getCustomTrackWidth(inputRange);
}
