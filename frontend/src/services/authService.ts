import { supabase } from "@/config/supabase";
import type { LoginData, RegisterData } from "@/types/authType";

export const registerUser = async (register: RegisterData) => {
    try {
        const {data, error} = await supabase.auth.signUp({
            email: register.email,
            password: register.password,
            options: {
                data: {
                    full_name: register.fullName
                }
            }
        })
        return {data, error};
    } catch (error) {
        console.error("Registration error:", error);
        throw error;
    }
}

export const loginUser = async (login: LoginData) => {
    try {
        const {data, error} = await supabase.auth.signInWithPassword({
            email: login.email,
            password: login.password
        });
        return {data, error};

    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
}