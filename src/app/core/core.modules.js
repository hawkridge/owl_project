const servicesModule = angular.module('services.module', []);
import loggerService from './services/logger.factory'

servicesModule
    .service('Logger', loggerService);



export default servicesModule;