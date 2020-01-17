/**
 * @mixin
 */
export default {
  components: {
    HcAccordion:              () => import('./Accordion/Accordion'),
    HcAccordionItem:          () => import('./Accordion/Item'),
    HcBanner:                 () => import('./Banner/Banner'),
    HcCardNews:               () => import('./Cards/News'),
    HcCommissionerCirlces:    () => import('./CommissionerCirlces'),
    HcFooter:                 () => import('./Footer/Footer'),
    HcHtvYoutubeLive:         () => import('./Htv/YoutubeLive'),
    HcIconBtn:                () => import('./IconButton'),
    HcItemCard:               () => import('./Cards/Item'),
    HcNavbar:                 () => import('./Navbar/Navbar'),
    HcPagination:             () => import('./Pagination'),
    HcParallax:               () => import('./Parallax'),
    HcSearchResult:           () => import('./Search/Result'),
    HcSearchFilters:          () => import('./Search/Filters'),
    HcTabs:                   () => import('./Tabs/Tabs'),
    HcTab:                    () => import('./Tabs/Tab'),
    HcWasThisPageHelpful:     () => import('./Footer/WasThisPageHelpful'),
  }
}
