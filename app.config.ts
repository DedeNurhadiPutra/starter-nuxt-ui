const horizontalLinkBase = 'px-9 py-1.5 before:inset-x-px before:inset-y-0';

export default defineAppConfig({
  ui: {
    colors: {
      primary: 'primary',
      darker: 'darker'
    },
    container: {
      base: 'w-full max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8'
    },
    navigationMenu: {
      slots: {
        root: 'flex flex-col md:flex-row gap-2 w-full',
        list: 'flex flex-col md:flex-row w-full text-center justify-center',
        item: 'w-full md:w-auto',
        link: 'custom-nav-link'
      },
      variants: {
        orientation: {
          horizontal: {
            root: 'flex-wrap items-center justify-center',
            list: 'flex flex-wrap justify-center',
            item: 'py-0',
            link: horizontalLinkBase,
            childList: 'grid p-2'
          }
        }
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: 'link',
          active: true,
          class: {
            link: 'text-white bg-primary'
          }
        },
        {
          color: 'primary',
          variant: 'link',
          active: false,
          class: {
            link: 'text-neutral hover:bg-primary hover:text-white'
          }
        }
      ],
      defaultVariants: {
        color: 'primary',
        highlightColor: 'primary',
        variant: 'link'
      }
    }
  }
});
