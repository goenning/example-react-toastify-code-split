export function notify(text, options) {
  return import('./toastify').then(module => {
    module.default(text, options)
  });
}