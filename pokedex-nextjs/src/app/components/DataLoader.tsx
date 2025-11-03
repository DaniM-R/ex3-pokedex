type OmitLoadingProps<T> = Omit<T, 'isLoading' | 'error'>;

interface DataLoaderProps<T> {
  fetcher: () => Promise<T>; 
  render: (data: T) => React.ReactNode; 
  loadingFallback: React.ReactNode;
  errorFallback: React.ReactNode;
}


export default async function DataLoader<T>({
  fetcher,
  render,
  loadingFallback,
  errorFallback,
}: DataLoaderProps<T>) {
  try {
    const data = await fetcher(); 
    return <>{render(data)}</>;
  } catch (error) {
    console.error("Data loading error:", error);
    return <>{errorFallback}</>;
  }
}