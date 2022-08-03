import React from 'react';
import { AuthFormWrapper } from './styles';

interface Props {
  value: string;
}

const AuthForm: React.FC<Props> = ({ value }) => {
  return (
    <AuthFormWrapper>
      <p>{value}</p>
    </AuthFormWrapper>
  );
};

export default AuthForm;
