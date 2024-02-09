import { addPhoneMask } from 'Utils/masks/phone-mask';
import 'UIKit/form-range/form-range';

document.querySelectorAll('input[type="tel"]').forEach((telControl) => {
  addPhoneMask(telControl);
});
