/**
 * @mixin
 */
export default {
  components: {
    HcAccordion:        () => import('./Accordion/Accordion'),
    HcAccordionItem:    () => import('./Accordion/Item'),
    HcBanner:           () => import('./Banner/Banner'),
    HcCardNews:         () => import('./Cards/News'),
    HcFooter:           () => import('./Footer'),
    HcHtvYoutubeLive:   () => import('./Htv/YoutubeLive'),
    HcIconBtn:          () => import('./IconButton'),
    HcNavbar:           () => import('./Navbar/Navbar'),
    HcPagination:       () => import('./Pagination'),
    HcParallax:         () => import('./Parallax'),
    HcSearchResult:     () => import('./Search/Result'),
    HcSearchFilters:    () => import('./Search/Filters'),
    HcTabs:             () => import('./Tabs/Tabs'),
    HcTab:              () => import('./Tabs/Tab'),
  }
}
