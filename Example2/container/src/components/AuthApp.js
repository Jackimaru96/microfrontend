import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "auth/AuthApp";

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        // location.pathname is the path we are visiting and
        // use it to update the history object in container
        // application
        // Browser History
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    history.listen(onParentNavigate);
  }, [history]);

  return <div ref={ref} />;
};
