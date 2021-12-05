import { Dimmer, Loader } from "semantic-ui-react";

export const LoaderLayer = ({ children }) => {
  return (
    <>
      <Dimmer active={true}>
        <Loader>Loading...</Loader>
      </Dimmer>
      {children}
    </>
  );
};
