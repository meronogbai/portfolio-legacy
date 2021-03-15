const fetchRepos = async () => {
  const response = await fetch('/.netlify/functions/fetchRepos');
  if (!response.ok) throw new Error(response);
  const repos = await response.json();
  return repos;
};

export default fetchRepos;
