import React, { Fragment } from "react";
import ContectForm from "components/contect/contact-form";
import META from "components/Head/Head";

const PostDetailPage = () => {
  const description =
    "We would love to hear from you! The contact page of Inkwell Chronicles provides a quick and easy way to get in touch with our team.";

  return (
    <Fragment>
      <META title="Contact" content={description} />
      <ContectForm />
    </Fragment>
  );
};

export default PostDetailPage;
