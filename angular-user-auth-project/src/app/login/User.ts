export class User{
    username:string;
    password:string;
}

export class userPerm{
    username:string;
    role:string;
    pages:Permission[];
}

export class Permission{
    name:string;
    visible:boolean;
}