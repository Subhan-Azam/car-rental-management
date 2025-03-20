

interface LoaderType {
  style: string;
}

export const Loader = ({ style }: LoaderType) => {
  return <span className={style}></span>;
};
