
import { GluegunCommand } from 'gluegun'


const command: GluegunCommand = {
  name: 'obijs-cli',
  description: 'Show info about CLI',
  run: async toolbox => {
    const { print } = toolbox

    print.info('Welcome to ObiJS CLI')
  },
}

module.exports = command
