import { withRouter } from "next/router";

export default withRouter(({ router }) => {
  return (
      <div>
          <h1>{router.query.title}</h1>
          <h3>news id is {router.query.id}</h3>
      </div>
  );
});
