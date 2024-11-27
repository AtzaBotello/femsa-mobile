import { UserService } from "../model/UserService";
import { LoginView } from "../view/LoginView";

export class LoginPresenter {
  constructor(private view: LoginView, private userService: UserService) {}

  handleLogin(username: string, password: string): void {
    if (this.userService.authenticate(username, password)) {
      this.view.showSuccessMessage();
    } else {
      this.view.showErrorMessage("Invalid username or password.");
    }
  }
}