'use server';

import axios from 'axios';

const triggerRedeployment = async () => {
  const response = await axios.get(process.env.DEPLOYMENT_HOOK_URL!);

  console.log(
    'Redeployment triggered.\nCurrent State:',
    response.data?.job?.state
  );
};

export default triggerRedeployment;
