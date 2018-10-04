export default function setPageTitle(subtitle = '') {
  let title = 'Spotties';
  // add subtitle if not empty
  if (subtitle !== '') {
    title = `${title} - ${subtitle}`;
  }
  document.title = title;
}
