export const pageToPath: Record<string, string> = {
  home: '/',
  about: '/about',
  events: '/events',
  partners: '/partners',
  team: '/team',
  contact: '/contact',
  news: '/news',
};

export const pathToPage: Record<string, string> = Object.entries(pageToPath).reduce(
  (acc, [page, path]) => {
    acc[path] = page;
    return acc;
  },
  {} as Record<string, string>,
);
