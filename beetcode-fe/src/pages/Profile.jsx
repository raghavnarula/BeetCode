import axios from 'axios'
import { useEffect } from 'react';
import { DataSet, Network } from "vis-network/standalone";
import Graph from '../components/Graph';

const Profile = () => {

  
  return (
    <>
    <div id="mynetwork">
      <Graph />
    </div>
    </>
  )
}

export default Profile