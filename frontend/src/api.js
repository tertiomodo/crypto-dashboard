import { cryptoData, assets } from "./data";

export function fakeFetchCrypto() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoData);
    }, 1);
  });
}

export function fakeFetchAssets() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(assets);
    }, 1);
  });
}
