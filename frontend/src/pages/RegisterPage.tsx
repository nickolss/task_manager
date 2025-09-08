import { Box, Button, Field, Heading, Input, Spinner, Stack, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema, type RegisterFormInputs } from '@/validation/RegisterPage.schema';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { registerUser } from '@/services/authService';
import type { RegisterData } from '@/types/authType';
import { Toaster, toaster } from "@/components/ui/toaster"
import { useState } from 'react';

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormInputs>({
        resolver: yupResolver(registerSchema),
    });

    const navigation = useNavigate();
    const [login, setLogin] = useState(false);

    const handleRegister = async (data: RegisterFormInputs) => {
        try {
            setLogin(true);
            const registerData: RegisterData = {
                fullName: data.name,
                email: data.email,
                password: data.password,
                confirmPassword: data.confirmPassword,
            };

            const { error } = await registerUser(registerData);

            if (error) {
                setLogin(false);
                toaster.create({
                    title: 'Registration failed',
                    description: error,
                    duration: 4000,
                    type: 'error',
                });
            } else {
                setLogin(false);
                toaster.create({
                    title: 'Registration successful',
                    description: 'You can now log in with your credentials.',
                    duration: 3000,
                    type: 'success',
                });
                navigation("/login");
            }
        } catch (error) {
            setLogin(false);
            toaster.create({
                title: 'Unexpected error',
                description: 'Something went wrong. Please try again later.',
                duration: 5000,
                type: 'error',
            });
            console.error('Registration error:', error);
        }
    };

    return (
        <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" py={12}>
            <Stack as="form" onSubmit={handleSubmit(handleRegister)} w="100%" maxW="md" p={8} borderWidth={1} borderRadius="lg" boxShadow="lg">
                <Heading fontSize="2xl" textAlign="center">Create your Account</Heading>

                <Field.Root required invalid={!!errors.name}>
                    <Field.Label>
                        Full Name
                        <Field.RequiredIndicator />
                    </Field.Label>
                    <Input placeholder='John Doe' type='text' {...register('name')} />
                    {errors.name && <Field.ErrorText>{errors.name.message}</Field.ErrorText>}
                </Field.Root>

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

                <Field.Root required invalid={!!errors.confirmPassword}>
                    <Field.Label>
                        Confirm Password
                        <Field.RequiredIndicator />
                    </Field.Label>
                    <Input placeholder='*********' type='password' {...register('confirmPassword')} />
                    {errors.confirmPassword && <Field.ErrorText>{errors.confirmPassword.message}</Field.ErrorText>}
                </Field.Root>

                <Button
                    type="submit"
                    colorScheme="blue"
                >
                    {login ? (
                        <Spinner />
                    ) : "Register"}
                </Button>

                <Text>
                    Already have an account?{' '}
                    <RouterLink to="/login">
                        Sign In
                    </RouterLink>
                </Text>
            </Stack>
            <Toaster />
        </Box>
    );
};

export default RegisterPage;