import {InjectionToken} from "@angular/core";
import {AppConfig} from "./appconfig.interface";
import {environment} from "../environments/environment";

export const App_Config_Service = new InjectionToken<AppConfig>('app.config');

export const App_Config: AppConfig = {
  apiEndpoint: environment.apiEndpoint
};
