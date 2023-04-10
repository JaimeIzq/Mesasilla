export interface Usuario {
	username: string;
	email: string;
	password?: string;
	token?: string;
	isAdmin?: boolean;
}
