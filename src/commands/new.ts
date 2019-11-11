import { GluegunToolbox } from 'gluegun'

module.exports = {
    name: 'new',
    description: 'Create new API project',
    alias: ['n'],
    run: async (toolbox: GluegunToolbox) => {
        const {
        parameters,
        template,
        print: { success, error, info },
        } = toolbox

        const name = parameters.first

        if (!name) {
            error('API Project name not specified')
            return
        }

        // Generate ENV example
        await template.generate({
            template: 'env.example.js.ejs',
            target: `./${name}/.env-example`
        })

        // Generate ENV test example
        await template.generate({
            template: 'env.test.example.js.ejs',
            target: `./${name}/.env-test-example`
        })

        // Generate .sequelizerc
        await template.generate({
            template: '.sequelizerc.js.ejs',
            target: `./${name}/.sequelizerc`
        })

        // Generate jest.config.js
        await template.generate({
            template: 'jest.config.js.ejs',
            target: `./${name}/jest.config.js`
        })

        // Generate package.json
        await template.generate({
            template: 'package.json.js.ejs',
            target: `./${name}/package.json`,
            props: { name }
        })

        // Generate __tests__/factories.js
        await template.generate({
            template: '__tests__.factories.js.ejs',
            target: `./${name}/__tests__/factories.js`
        })

        // Generate __tests__/utils/truncate.js
        await template.generate({
            template: '__tests__.utils.truncate.js.ejs',
            target: `./${name}/__tests__/utils/truncate.js`
        })

        // Generate __tests__/unit/user.test.js
        await template.generate({
            template: '__tests__.unit.user.test.js.ejs',
            target: `./${name}/__tests__/unit/user.test.js`
        })

        // Generate __tests__/integration/user.test.js
        await template.generate({
            template: '__tests__.integration.auth.test.js.ejs',
            target: `./${name}/__tests__/integration/auth.test.js`
        })

        // Generate src/app.js
        await template.generate({
            template: 'src.app.js.ejs',
            target: `./${name}/src/app.js`
        })

        // Generate src/server.js
        await template.generate({
            template: 'src.server.js.ejs',
            target: `./${name}/src/server.js`
        })

        // Generate src/routes.js
        await template.generate({
            template: 'src.routes.js.ejs',
            target: `./${name}/src/routes.js`,
            props: { name }
        })

        // Generate src/config/database.js
        await template.generate({
            template: 'src.config.database.js.ejs',
            target: `./${name}/src/config/database.js`,
        })

        // Generate src/database/migrations/20191107192706-create-users.js
        await template.generate({
            template: 'src.database.migrations.20191107192706-create-users.js.ejs',
            target: `./${name}/src/database/migrations/20191107192706-create-users.js`,
        })

        // Generate src/app/controllers/SessionController.js
        await template.generate({
            template: 'src.app.controllers.SessionController.js.ejs',
            target: `./${name}/src/app/controllers/SessionController.js`,
        })

        // Generate src/app/middlewares/auth.js
        await template.generate({
            template: 'src.app.middlewares.auth.js.ejs',
            target: `./${name}/src/app/middlewares/auth.js`,
        })

        // Generate src/app/models/index.js
        await template.generate({
            template: 'src.app.models.index.js.ejs',
            target: `./${name}/src/app/models/index.js`,
        })

        // Generate src/app/models/User.js
        await template.generate({
            template: 'src.app.models.User.js.ejs',
            target: `./${name}/src/app/models/User.js`,
        })

        success(`New API ${name} created! Now, run all commands:`)
        info('')
        info(`cd ${name} \nmv .env-example .env \nmv .env-test-example .env.test \nyarn install \nyarn dev`)
    },
}
  