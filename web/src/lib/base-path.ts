// Next Link/router apply basePath automatically; native navigation and images do not.
export function withBasePath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
