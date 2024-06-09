import { Button } from '..';

const LoadMoreOnClick = ({
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  className,
  children,
}) => {
  if (!hasNextPage) {
    return null;
  }
  const handleClick = () => {
    if (typeof fetchNextPage === 'function') {
      fetchNextPage();
    }
  };

  return (
    <div className="my-4">
      <Button
        className={className || 'button full secondary text-xs'}
        onClick={handleClick}
        disabled={isFetchingNextPage}
      >
        {children}
      </Button>
    </div>
  );
};

export default LoadMoreOnClick;
