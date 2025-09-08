import { Box, Button, Field, Heading, Input, Stack, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema, type LoginFormInputs } from '@/validation/LoginPage.schema';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import type { LoginData } from '@/types/authType';
import { loginUser } from '@/services/authService';

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInputs>({
        resolver: yupResolver(loginSchema),
    });

    const navigation = useNavigate();

    const handleLogin = async (data: LoginFormInputs) => {
        try {
            const loginData: LoginData = {
                email: data.email,
                password: data.password,
            }

            const {error} = await loginUser(loginData);
            if (error) {
                alert(error.message);
            } else {
                navigation("/");
            }
        } catch (error) {
            console.error('Login error:', error);
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
                    Sign in
                </Button>

                <Text>
                    Don't have an account?{' '}
                    <RouterLink to="/register">
                        Sign Up
                    </RouterLink>
                </Text>
            </Stack>
        </Box>
    );
};

export default LoginPage;