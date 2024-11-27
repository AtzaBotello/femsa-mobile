export class UserService {
    private validUsername = "user";
    private validPassword = "password";
  
    authenticate(username: string, password: string): boolean {
      return username === this.validUsername && password === this.validPassword;
    }
}