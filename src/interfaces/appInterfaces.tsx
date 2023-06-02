export interface LoginResponse {
    usuario: Usuario;
    token: string;
}
    
export interface Usuario {
    rol:string;
    estado: boolean;
    google: boolean;
    nombre: string;
    correo: string;
    uid: string;
    img?:string;
}

export interface LoginData {
    correo:   string;
    password: string;
}

export interface RegisterData {
    correo:   string;
    password: string;
    nombre:   string;
}

export interface RenameResponse {
    usuario: Usuario;
}
export interface RenameData {
    uid:string;
    nombre: string
}

// Productos
// Generated by https://quicktype.io
export interface NivelesResponse {
    total:     number;
    niveles: Niveles[];
}


export interface Niveles {
    valor:    number;
    _id:       string;
    nombre:    string;
    grado: string;
    action: string;
    usuario:   CreadoPor;
    completo: string;
    // completado: boolean;
}


// Generated by https://quicktype.io

export interface CagetoriesResponse {
    total:      number;
    categorias: Grado[];
}

export interface Grado {
    _id:      string;
    nombre:   string;
    usuario?: CreadoPor;
}

export interface CreadoPor {
    _id:    string;
    nombre: string;
}


