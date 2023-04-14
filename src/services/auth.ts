import Axios from '@/axios';
import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string(),
  password: z.string().min(2),
  totp: z.string().optional(),
  backupToken: z.string().optional(),
});

export type LoginParams = z.infer<typeof loginSchema>;

export class AuthService {
  public tokenName: string;

  constructor(tokenName: string) {
    this.tokenName = tokenName;
  }

  login(params: LoginParams) {
    const doc = {
      email: params.email,
      password: params.password,
      totp: params.totp,
      backup_token: params.backupToken,
    };

    const headers = {};

    const options = {
      headers,
    };

    return Axios.post('/admin/api/v1/login', doc, options);
  }

  getToken() {
    return localStorage.getItem(this.tokenName);
  }

  setToken(token: string) {
    localStorage.setItem(this.tokenName, token);
  }

  /**
   * Clears the any tokens that are set on the service
   */
  clearToken() {
    localStorage.setItem(this.tokenName, '');
  }

  getAuthorizationHeader() {
    const token = this.getToken();
    return `Bearer ${token}`;
  }
}

export default new AuthService('mercury_nxt_token');
