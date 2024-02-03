import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

function PageChange({ pageTitle }) {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    onTop();
    const prevTitle = document.title;
    document.title = pageTitle;
    return () => {
      document.title = prevTitle;
    };
  }, [routePath]);

  return <></>;
}

PageChange.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default PageChange;
