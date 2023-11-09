import { useQuery } from 'react-query';
import { getTest } from '../../api/logAPI';
import { useState } from 'react';

function Test() {
  const [testData, setTestData] = useState(null!);
  useQuery('test', getTest, {
    onSuccess: (data) => {
      setTestData(data.body);
    },
  });

  return <>{testData && <div>{testData}</div>}</>;
}

export default Test;
