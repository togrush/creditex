export function switchingTabs(tabsBlock) {
  const tabsSelector = 'tab';
  const tabs = tabsBlock.querySelectorAll(`.${tabsSelector}`);
  const tabsInner = tabsBlock.querySelector('.block-with-tabs__tabs-inner');
  const content = tabsBlock.querySelectorAll('.tab__content');

  function tabSwitching(tabsItems, tabsContainer, contentBlocks, selector) {
    function hideTabContent(a) {
      for (let i = a; i < contentBlocks.length; i++) {
        tabs[i].classList.remove('tab_active', 'tab_hidden-after');
        contentBlocks[i].classList.add('tab__content_hide');
      }
    }

    function showTabContent(b) {
      if (contentBlocks[b].classList.contains('tab__content_hide')) {
        contentBlocks[b].classList.remove('tab__content_hide');
        tabs[b].classList.add('tab_active');
        if (b > 0) {
          tabs[b - 1].classList.add('tab_hidden-after');
        }
      }
    }

    hideTabContent(1);
    tabsContainer.addEventListener('click', (event) => {
      const { target } = event;

      if (target && target.classList.contains(selector)) {
        for (let i = 0; i < tabsItems.length; i++) {
          if (target === tabsItems[i]) {
            hideTabContent(0);
            showTabContent(i);
            break;
          }
        }
      }
    });
  }

  tabSwitching(tabs, tabsInner, content, tabsSelector);
}
