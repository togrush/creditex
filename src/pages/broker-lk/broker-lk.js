import { BROKER_LK_PAGE } from 'Components/start-work/constants/constants';
import { copyToClipboard } from 'Utils/copy-to-clipboard';

const copyReferralLinkButton = document.getElementById(
  BROKER_LK_PAGE.copyReferralLinkButton,
);
copyReferralLinkButton.addEventListener('click', () => {
  copyToClipboard(copyReferralLinkButton.dataset.refLink);
  copyReferralLinkButton.textContent = 'Ссылка скопирована';
});
