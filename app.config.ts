const horizontalLinkBase = 'px-9 py-1.5 before:inset-x-px before:inset-y-0';

const baseColors = ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral'] as const;

export default defineAppConfig({
  ui: {
    colors: {
      primary: 'primary'
    },
    navigationMenu: {
      slots: {
        link: 'font-semibold text-base'
      },
      variants: {
        color: Object.fromEntries(
          baseColors.map(color => [
            color,
            {
              link: `focus-visible:before:ring-${color === 'neutral' ? 'inverted' : color}`,
              childLink: `focus-visible:outline-${color === 'neutral' ? 'inverted' : color}`
            }
          ])
        ),
        highlightColor: Object.fromEntries(baseColors.map(color => [color, ''])),
        variant: {
          pill: '',
          link: ''
        },
        orientation: {
          horizontal: {
            root: 'items-center justify-between',
            list: 'flex items-center py-0',
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
