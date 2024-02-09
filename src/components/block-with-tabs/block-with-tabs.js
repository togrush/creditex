import { switchingTabs } from 'Components/block-with-tabs/_switchingTabs';

document
  .querySelectorAll('.block-with-tabs')
  .forEach((tabsBlock) => switchingTabs(tabsBlock));
