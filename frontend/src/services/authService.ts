import { supabase } from "@/config/supabase";
import type { LoginData, RegisterData } from "@/types/authType";

export const registerUser = async (data: RegisterData) => {
    try {
        await supabase.auth.signUp({
            email: data.email,
            password: data.password,
            options: {
                data: {
                    full_name: data.fullName
                }
            }
        })
    } catch (error) {
        console.error("Registration error:", error);
        throw error;
    }
}

export const loginUser = async (data: LoginData) => {
    try {
        await supabase.auth.signInWithPassword({
            email: data.email,
            password: data.password
        });

    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
}