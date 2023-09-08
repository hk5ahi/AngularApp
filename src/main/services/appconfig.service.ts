import {InjectionToken} from "@angular/core";
import {environment} from "../environments/environment";
import {AppConfig} from "../customDataTypes/AppConfig";
export const App_Config_Service = new InjectionToken<AppConfig>('app.config');

export const App_Config: AppConfig = {
  apiEndpoint: environment.apiEndpoint
};
