import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// to test the UI without the API
export function dummyPromise(): Promise<string> {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve("Hello, world!");
      }, 2000);
  });
}