
const getData = async function() {
      const response = await fetch("https://valorant-api.com/v1/agents")
      if(response.status == 200){
        const data = await response.json();
        const playableAgents = data.data.filter(agent => agent.isPlayableCharacter == true);
        return { data: playableAgents };
      }else{
        new Error(response.statusText)
      }
    }
    export { getData }