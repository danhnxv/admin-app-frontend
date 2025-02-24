import { PRIVATE_PAGES } from './constants';

export function isPrivatePage(url: string) {
  const privatePathnameRegex = RegExp(
    `^(${PRIVATE_PAGES.flatMap((p) => (p === '/' ? ['', '/'] : p)).join('|')})/?$`,
    'i',
  );
  return privatePathnameRegex.test(url);
}
