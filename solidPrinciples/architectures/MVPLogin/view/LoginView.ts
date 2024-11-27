export interface LoginView {
    showSuccessMessage(): void;
    showErrorMessage(error: string): void;
}