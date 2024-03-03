import axios from 'axios'

const Profile = () => {
  async function getCharacters() {
    // const response = await axios.get('http://127.0.0.1:9001/api/v1/users');
    const response = await axios.get('https://64460e44ee791e1e29f5be26.mockapi.io/api/v1/name/testing')
    console.log(response.data);
  }
  getCharacters();
  return (
    <>
    Profile Page
    </>
  )
}

export default Profile