import {
    Box,
    Button,
    Field,
    Heading,
    Input,
    Spinner,
    Stack,
    Text,
} from '@chakra-ui/react';
import { Toaster, toaster } from "@/components/ui/toaster"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema, type LoginFormInputs } from '@/validation/LoginPage.schema';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import type { LoginData } from '@/types/authType';
import { loginUser } from '@/services/authService';
import { useState } from 'react';

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInputs>({
        resolver: yupResolver(loginSchema),
    });

    const navigation = useNavigate();
    const [login, setLogin] = useState(false);

    const handleLogin = async (loginFormData: LoginFormInputs) => {
        try {
            setLogin(true);
            const loginData: LoginData = {
                email: loginFormData.email,
                password: loginFormData.password,
            };

            const { error } = await loginUser(loginData);

            if (error) {
                setLogin(false);
                toaster.create({
                    title: 'Login failed',
                    description: 'Invalid email or password. Please try again.',
                    duration: 4000,
                    type: 'error',
                });
            } else {
                setLogin(false);
                toaster.create({
                    title: 'Login successful',
                    description: 'Welcome back!',
                    duration: 3000,
                    type: 'success',
                });
                navigation('/');
            }
        } catch (error) {
            console.error('Login error:', error);
            setLogin(false);
            toaster.create({
                title: 'Unexpected error',
                description: 'Something went wrong. Please try again later.',
                duration: 5000,
                type: 'error',
            });
        }
    };

    return (
        <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
            <Stack as="form" onSubmit={handleSubmit(handleLogin)} w="100%" maxW="md" p={8} borderWidth={1} borderRadius="lg" boxShadow="lg">
                <Heading fontSize="2xl" textAlign="center">Access your account</Heading>

                <Field.Root required invalid={!!errors.email}>
                    <Field.Label>
                        Email
                        <Field.RequiredIndicator />
                    </Field.Label>
                    <Input placeholder='email@example.com' type='email' {...register('email')} />
                    {errors.email && <Field.ErrorText>{errors.email.message}</Field.ErrorText>}
                </Field.Root>

                <Field.Root required invalid={!!errors.password}>
                    <Field.Label>
                        Password
                        <Field.RequiredIndicator />
                    </Field.Label>
                    <Input placeholder='*********' type='password' {...register('password')} />
                    {errors.password && <Field.ErrorText>{errors.password.message}</Field.ErrorText>}
                </Field.Root>

                <Button
                    type="submit"
                    colorScheme="blue"
                >
                    {login ? (
                        <Spinner />
                    ) : "Login"}
                </Button>

                <Text>
                    Don't have an account?{' '}
                    <RouterLink to="/register">
                        Sign Up
                    </RouterLink>
                </Text>
            </Stack>
            <Toaster />
        </Box>
    );
};

export default LoginPage;