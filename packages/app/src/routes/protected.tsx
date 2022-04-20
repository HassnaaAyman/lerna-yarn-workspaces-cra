/** @format */

import React, { Suspense } from 'react';
import { Spin } from 'antd';
import Unauthorized from '@lucifer/components/src/common/unAuthorized';

const MainLayout = React.lazy(
  () => import('@lucifer/components/src/components/Layout'),
);

type Props = {
  component?: React.LazyExoticComponent<() => JSX.Element> | any;
  path: string | string[];
  name?: string;
};

const Protected = ({ component: Component, path, name, ...rest }: Props) => {
  const isAuthed = !!localStorage.getItem('access_token');

  const AuthenticatedAndAuthorized = (props: any) => {
    return (
      <Suspense
        fallback={
          <Spin
            size='large'
            tip='Loading...'
            style={{ position: 'absolute', top: '50%', left: '50%' }}
          />
        }>
        <MainLayout>
          <Component {...rest} {...props} />
        </MainLayout>
      </Suspense>
    );
  };

  return isAuthed ? (
    <AuthenticatedAndAuthorized />
  ) : (
    <>
      <Unauthorized />
    </>
  );
};

export default Protected;
