const ShimmerCard = () => {
  return (
    <div className="container menu-shimmer">
      <div className="row ">
        <div className="col-xs-6 col-sm-4">
          <div className="row">
            <div className="col-7  m-2 element-displaying-menu"></div>
            <div className="col-7 m-2 element-displaying-menu "></div>
            <div className="col-7 m-2 element-displaying-menu"></div>
          </div>
        </div>
        <div className="col-2 element-displaying-menu mt-2 ms-3 ratingShimmer"></div>
        <div className="col-8 ms-2 element-displaying-menu "></div>
        <div className="col-8 ms-2 my-2 element-displaying-menu "></div>
      </div>
      <ul className="list-unstyled w-75">
        <li className="element-displaying-menu my-2"></li>
        <li className="element-displaying-menu my-2"></li>
        <li className="element-displaying-menu my-2"></li>
        <li className="element-displaying-menu my-2"></li>
        <li className="element-displaying-menu my-2"></li>
        <li className="element-displaying-menu my-2"></li>
        <li className="element-displaying-menu my-2"></li>
      </ul>
    </div>
  );
};
export default ShimmerCard;
