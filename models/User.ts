export default class User {
    private firstName: string
    private lastName: string
    private email: string
    private password: string
    private accessToken?: string
    private userID?: string;

    // Getters
    public getAccessToken(): string  | undefined {
        return this.accessToken;
    }

    public getUserId(): string | undefined {
        return this.userID;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public getEmail(): string {
        return this.email;
    }

    public getPassword(): string {
        return this.password;
    }

    // Setters
    public setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    public setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public setAccessToken(accessToken: string): void {
        this.accessToken = accessToken;
    }

    public setUserId(userId: string): void {
        this.userID = userId;
    }

    constructor(firstName: string, lastName: string, email: string, password: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            accessToken: this.accessToken,
            userID: this.userID
        };
    }
}