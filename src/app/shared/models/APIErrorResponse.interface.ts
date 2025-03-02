export interface IApiErrorResponse {
  api: {
    version: number;
    release: string;
    commit: string;
  };
  timestamp: string;
  tibia_urls: string[];
  status: {
    http_code: number;
    error: number;
    message: string;
  };
}
