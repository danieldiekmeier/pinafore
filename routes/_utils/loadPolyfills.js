import {
  importURLSearchParams,
  importIntersectionObserver,
  importRequestIdleCallback,
  importIndexedDBGetAllShim,
  importDialogPolyfill
} from './asyncModules'

export function loadPolyfills() {
  return Promise.all([
    typeof URLSearchParams === 'undefined' && importURLSearchParams(),
    typeof IntersectionObserver === 'undefined' && importIntersectionObserver(),
    typeof requestIdleCallback === 'undefined' && importRequestIdleCallback(),
    !IDBObjectStore.prototype.getAll && importIndexedDBGetAllShim(),
    typeof HTMLDialogElement === 'undefined' && importDialogPolyfill()
  ])
}