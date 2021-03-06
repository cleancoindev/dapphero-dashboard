import { getEntireHtml } from '../src'

const generateHTML =  async (project, contracts) => {
  
  try {
    let projectNetworkId = 5
    switch(project.network) {
      case 'mainnet':
        projectNetworkId = 1
        break;
      case 'ropsten':
        projectNetworkId = 3
        break;
      case 'rinkeby':
        projectNetworkId = 4
        break;
      case 'goerli':
        projectNetworkId = 5
        break;
      case 'kovan':
        projectNetworkId = 42
        break;
      case 'xDai':
        projectNetworkId = 100
        break;
      case 'maticMumbaiTestnet':
        projectNetworkId = 80001
        break;
      default:
        projectNetworkId = 4
    }

    let abis = []

    contracts.map(contract => {
      let newAbi = {
        abi_text: contract.abi,
        name_text: contract.name
      }
      return abis.push(newAbi)
    })

    const projectId = project.id;
    const projectNetworkName = project.network;
    const projectDescription = project.description;
    const projectImage = project.coverImg;
    const projectName = project.name;

    if (!projectId) {
      return console.error('Project id not defined');
    }
    if (!abis) {
      return console.error('ABIs not defined');
    }

    if (!Array.isArray(abis)) {
      return console.error('Invalid ABI');
    }

    const html = getEntireHtml({abis, projectId, projectNetworkId, projectNetworkName, projectDescription, projectImage, projectName});
    return html;
    } catch (err) {
        console.error(`Can't generate HTML`, err)
    }
};

export default generateHTML
