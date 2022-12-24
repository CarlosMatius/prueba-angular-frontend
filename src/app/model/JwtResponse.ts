export class JwtResponse {
    token_type! :string;
	access_token! :string;
    expires_in! : number;
    issued_at!: string;
    client_id! : string;
}