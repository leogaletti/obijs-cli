"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    name: 'new',
    description: 'Create new API project',
    alias: ['n'],
    run: function (toolbox) { return __awaiter(void 0, void 0, void 0, function () {
        var parameters, template, _a, success, error, info, name;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    parameters = toolbox.parameters, template = toolbox.template, _a = toolbox.print, success = _a.success, error = _a.error, info = _a.info;
                    name = parameters.first;
                    if (!name) {
                        error('API Project name not specified');
                        return [2 /*return*/];
                    }
                    // Generate ENV example
                    return [4 /*yield*/, template.generate({
                            template: 'env.example.js.ejs',
                            target: "./" + name + "/.env-example"
                        })
                        // Generate ENV test example
                    ];
                case 1:
                    // Generate ENV example
                    _b.sent();
                    // Generate ENV test example
                    return [4 /*yield*/, template.generate({
                            template: 'env.test.example.js.ejs',
                            target: "./" + name + "/.env-test-example"
                        })
                        // Generate .sequelizerc
                    ];
                case 2:
                    // Generate ENV test example
                    _b.sent();
                    // Generate .sequelizerc
                    return [4 /*yield*/, template.generate({
                            template: '.sequelizerc.js.ejs',
                            target: "./" + name + "/.sequelizerc"
                        })
                        // Generate jest.config.js
                    ];
                case 3:
                    // Generate .sequelizerc
                    _b.sent();
                    // Generate jest.config.js
                    return [4 /*yield*/, template.generate({
                            template: 'jest.config.js.ejs',
                            target: "./" + name + "/jest.config.js"
                        })
                        // Generate package.json
                    ];
                case 4:
                    // Generate jest.config.js
                    _b.sent();
                    // Generate package.json
                    return [4 /*yield*/, template.generate({
                            template: 'package.json.js.ejs',
                            target: "./" + name + "/package.json",
                            props: { name: name }
                        })
                        // Generate __tests__/factories.js
                    ];
                case 5:
                    // Generate package.json
                    _b.sent();
                    // Generate __tests__/factories.js
                    return [4 /*yield*/, template.generate({
                            template: '__tests__.factories.js.ejs',
                            target: "./" + name + "/__tests__/factories.js"
                        })
                        // Generate __tests__/utils/truncate.js
                    ];
                case 6:
                    // Generate __tests__/factories.js
                    _b.sent();
                    // Generate __tests__/utils/truncate.js
                    return [4 /*yield*/, template.generate({
                            template: '__tests__.utils.truncate.js.ejs',
                            target: "./" + name + "/__tests__/utils/truncate.js"
                        })
                        // Generate __tests__/unit/user.test.js
                    ];
                case 7:
                    // Generate __tests__/utils/truncate.js
                    _b.sent();
                    // Generate __tests__/unit/user.test.js
                    return [4 /*yield*/, template.generate({
                            template: '__tests__.unit.user.test.js.ejs',
                            target: "./" + name + "/__tests__/unit/user.test.js"
                        })
                        // Generate __tests__/integration/user.test.js
                    ];
                case 8:
                    // Generate __tests__/unit/user.test.js
                    _b.sent();
                    // Generate __tests__/integration/user.test.js
                    return [4 /*yield*/, template.generate({
                            template: '__tests__.integration.auth.test.js.ejs',
                            target: "./" + name + "/__tests__/integration/auth.test.js"
                        })
                        // Generate src/app.js
                    ];
                case 9:
                    // Generate __tests__/integration/user.test.js
                    _b.sent();
                    // Generate src/app.js
                    return [4 /*yield*/, template.generate({
                            template: 'src.app.js.ejs',
                            target: "./" + name + "/src/app.js"
                        })
                        // Generate src/server.js
                    ];
                case 10:
                    // Generate src/app.js
                    _b.sent();
                    // Generate src/server.js
                    return [4 /*yield*/, template.generate({
                            template: 'src.server.js.ejs',
                            target: "./" + name + "/src/server.js"
                        })
                        // Generate src/routes.js
                    ];
                case 11:
                    // Generate src/server.js
                    _b.sent();
                    // Generate src/routes.js
                    return [4 /*yield*/, template.generate({
                            template: 'src.routes.js.ejs',
                            target: "./" + name + "/src/routes.js",
                            props: { name: name }
                        })
                        // Generate src/config/database.js
                    ];
                case 12:
                    // Generate src/routes.js
                    _b.sent();
                    // Generate src/config/database.js
                    return [4 /*yield*/, template.generate({
                            template: 'src.config.database.js.ejs',
                            target: "./" + name + "/src/config/database.js",
                        })
                        // Generate src/database/migrations/20191107192706-create-users.js
                    ];
                case 13:
                    // Generate src/config/database.js
                    _b.sent();
                    // Generate src/database/migrations/20191107192706-create-users.js
                    return [4 /*yield*/, template.generate({
                            template: 'src.database.migrations.20191107192706-create-users.js.ejs',
                            target: "./" + name + "/src/database/migrations/20191107192706-create-users.js",
                        })
                        // Generate src/app/controllers/SessionController.js
                    ];
                case 14:
                    // Generate src/database/migrations/20191107192706-create-users.js
                    _b.sent();
                    // Generate src/app/controllers/SessionController.js
                    return [4 /*yield*/, template.generate({
                            template: 'src.app.controllers.SessionController.js.ejs',
                            target: "./" + name + "/src/app/controllers/SessionController.js",
                        })
                        // Generate src/app/middlewares/auth.js
                    ];
                case 15:
                    // Generate src/app/controllers/SessionController.js
                    _b.sent();
                    // Generate src/app/middlewares/auth.js
                    return [4 /*yield*/, template.generate({
                            template: 'src.app.middlewares.auth.js.ejs',
                            target: "./" + name + "/src/app/middlewares/auth.js",
                        })
                        // Generate src/app/models/index.js
                    ];
                case 16:
                    // Generate src/app/middlewares/auth.js
                    _b.sent();
                    // Generate src/app/models/index.js
                    return [4 /*yield*/, template.generate({
                            template: 'src.app.models.index.js.ejs',
                            target: "./" + name + "/src/app/models/index.js",
                        })
                        // Generate src/app/models/User.js
                    ];
                case 17:
                    // Generate src/app/models/index.js
                    _b.sent();
                    // Generate src/app/models/User.js
                    return [4 /*yield*/, template.generate({
                            template: 'src.app.models.User.js.ejs',
                            target: "./" + name + "/src/app/models/User.js",
                        })];
                case 18:
                    // Generate src/app/models/User.js
                    _b.sent();
                    success("New API " + name + " created! Now, run all commands:");
                    info('');
                    info("cd " + name + " \nmv .env-example .env \nmv .env-test-example .env.test \nyarn install \nyarn dev");
                    return [2 /*return*/];
            }
        });
    }); },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL25ldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDYixJQUFJLEVBQUUsS0FBSztJQUNYLFdBQVcsRUFBRSx3QkFBd0I7SUFDckMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osR0FBRyxFQUFFLFVBQU8sT0FBdUI7Ozs7O29CQUUvQixVQUFVLEdBR04sT0FBTyxXQUhELEVBQ1YsUUFBUSxHQUVKLE9BQU8sU0FGSCxFQUNSLEtBQ0ksT0FBTyxNQURvQixFQUF0QixPQUFPLGFBQUEsRUFBRSxLQUFLLFdBQUEsRUFBRSxJQUFJLFVBQUEsQ0FDbEI7b0JBRUwsSUFBSSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUE7b0JBRTdCLElBQUksQ0FBQyxJQUFJLEVBQUU7d0JBQ1AsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUE7d0JBQ3ZDLHNCQUFNO3FCQUNUO29CQUVELHVCQUF1QjtvQkFDdkIscUJBQU0sUUFBUSxDQUFDLFFBQVEsQ0FBQzs0QkFDcEIsUUFBUSxFQUFFLG9CQUFvQjs0QkFDOUIsTUFBTSxFQUFFLE9BQUssSUFBSSxrQkFBZTt5QkFDbkMsQ0FBQzt3QkFFRiw0QkFBNEI7c0JBRjFCOztvQkFKRix1QkFBdUI7b0JBQ3ZCLFNBR0UsQ0FBQTtvQkFFRiw0QkFBNEI7b0JBQzVCLHFCQUFNLFFBQVEsQ0FBQyxRQUFRLENBQUM7NEJBQ3BCLFFBQVEsRUFBRSx5QkFBeUI7NEJBQ25DLE1BQU0sRUFBRSxPQUFLLElBQUksdUJBQW9CO3lCQUN4QyxDQUFDO3dCQUVGLHdCQUF3QjtzQkFGdEI7O29CQUpGLDRCQUE0QjtvQkFDNUIsU0FHRSxDQUFBO29CQUVGLHdCQUF3QjtvQkFDeEIscUJBQU0sUUFBUSxDQUFDLFFBQVEsQ0FBQzs0QkFDcEIs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