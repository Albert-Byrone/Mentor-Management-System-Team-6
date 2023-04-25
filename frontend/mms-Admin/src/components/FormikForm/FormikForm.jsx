/* eslint-disable react/prop-types */
import React from 'react';
import { Form, Formik } from 'formik';

function FormikForm({
  children,
  styling,
  initialValues,
  validationSchema,
  ...props
}) {
  return (
    <div className={props.className}>
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        {() => <Form className={styling}>{children}</Form>}
      </Formik>
    </div>
  );
}

export default FormikForm;
