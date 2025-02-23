const WithAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = true;

    if (!isAuthenticated) {
      return <>Not Authorized. Please return to previous page!</>;
    }
    return <WrappedComponent {...props} />;
  };
};
export default WithAuth;
