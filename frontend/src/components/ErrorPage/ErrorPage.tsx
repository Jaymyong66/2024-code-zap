import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  errorMessage: string;
}

const ErrorPage = ({ errorMessage }: Props) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  }, []);

  return (
    <>
      <div style={{ color: 'white', padding: '10rem' }}>
        <div>{errorMessage}</div>
        <span>잠시 후 다시 시도해주세요.</span>
        <button onClick={() => navigate('/')}>되돌아가기</button>
      </div>
    </>
  );
};

export default ErrorPage;
