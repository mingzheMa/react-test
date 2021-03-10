import { withRouter } from "next/router";

export default withRouter(({ router }) => {
  return <h1>user id is {router.query.id}</h1>;
});
